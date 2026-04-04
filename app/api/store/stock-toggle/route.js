import { getAuth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import authAdmin from "@/middlewares/authAdmin"

export async function POST(req) {
    try {
        const { userId } = getAuth(req)
        const isAdmin = await authAdmin(userId)
            if(!isAdmin) {
                return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
            }

        const {productId} = await req.json()    
        if(!productId) {
            return NextResponse.json({ error: "missing details:productId" }, { status: 400 })
        }

        const product = await prisma.product.findFirst({
            where: { id: productId }
        })
        if(!product) {
            return NextResponse.json({ error: "Product not found" }, { status: 404 })   
        }
        await prisma.product.update({
            where: { id: productId },
            data: { inStock: !product.inStock }
        })
        return NextResponse.json({ message: "Stock toggled successfully" })

    } catch (error) {
        console.error(error)
        return NextResponse.json({ error:error.code || error.message }, { status: 400 })
    }}
