import { getAuth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import authAdmin from "@/middlewares/authAdmin"

//get dashbpard data for the store(total products, total orders, total earnings)
export async function GET(req) {
    try {
        const { userId } = getAuth(req)
        const isAdmin = await authAdmin(userId)
            if(!isAdmin) {
                return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
            }

        //get all orders for seller
        const orders = await prisma.order.count()
        //get all products for seller
        const products = await prisma.product.count()

        const ratings = await prisma.rating.findMany({
        where: { productId: { in: products.map(product => product.id) } },
        include: { user: true , product: true }
         })

        const dashboardData = {
            ratings,
            totalOrders: orders.length,
            totalEarnings: Math.round(orders.reduce((acc, order) => acc + order.total, 0)),
            totalProducts: products.length
        } 
    return NextResponse.json({dashboardData});
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error:error.code || error.message }, { status: 400 })
    }}