import ImageKit from "imagekit"
import { prisma } from "@/lib/prisma"
import { getAuth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import authAdmin from "@/middlewares/authAdmin"
//add a new product to the store

export async function POST(req) {   
    try {
        const { userId } = getAuth(req)
        const isAdmin = await authAdmin(userId)
            if(!isAdmin) {
                return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
            }
        //Get the data from form
        const formData = await req.formData()
        const name = formData.get("name")
        const description = formData.get("description")
        const mrp = Number(formData.get("mrp"))
        const price = Number(formData.get("price"))
        const category = formData.get("category")
        const images = formData.getAll("images")
      
        if(!name || !description || !mrp || !price || !category || images.length < 1) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 })
        }

        //uploading images to imagekit and getting the urls
        const imagesUrl = await Promise.all(images.map(async (image) => {
            const buffer = Buffer.from(await image.arrayBuffer())
            const response = await ImageKit.upload({
                file: buffer,
                fileName: image.name,
                folder: "products",
            })
            const url =ImageKit.url({
                path : response.filePath,
                transformation: [
                    { quality : "auto" },
                    { format : "webp" },
                    {width: '1024'}
                ]
            })
            return url
            }))

        await prisma.product.create({
            data: {
                name,
                description,
                mrp,
                price,
                category,
                images: imagesUrl,
                userId,
            }
        })
        // Logic to add a product to the store
        return NextResponse.json({ message: "Product added successfully" }, { status: 200 })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error:error.code || error.message }, { status: 400 })
    }
}

//get all products from the store
export async function GET(req) {
    try {
        const { userId } = getAuth(req)

        if(!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        const products = await prisma.product.findMany()
        return NextResponse.json({ products }, { status: 200 })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error:error.code || error.message }, { status: 400 })
    }
}