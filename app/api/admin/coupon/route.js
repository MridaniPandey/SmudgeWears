import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import authAdmin from "@/middlewares/authAdmin";
import { prisma } from "@/lib/prisma";

//add new coupon
export async function POST(req) {
try{
    const { userId} = getAuth()
    const isAdmin = await authAdmin(userId)

    if(!isAdmin){
        return NextResponse.json({error:"Unauthorized"}, {status:401})
    }
    const {coupon}= await req.json()
    coupon.code =coupon.code.toUpperCase()
    await prisma.coupon.create({ data: coupon })
    return NextResponse.json({ message: "Coupon added successfully" }, { status: 201 })
}

catch(err){
    console.error(err)
    return NextResponse.json({ error: "Failed to add coupon" }, { status: 500 })
}   
}

//delete coupon /appi/coupon?id=couponId
export async function DELETE(req) {
    try{
        const { userId} = getAuth()
        const isAdmin = await authAdmin(userId) 
        if(!isAdmin){
            return NextResponse.json({error:"Unauthorized"}, {status:401})
        }
        const { searchParams } = req.nextUrl
        const code = searchParams.get("code")

        await prisma.coupon.delete({ where: { code } })
        return NextResponse.json({ message: "Coupon deleted successfully" }, { status: 200 })
    }
    catch(err){
        console.error(err)
        return NextResponse.json({ error: "Failed to delete coupon" }, { status: 500 })
    }       
}

//get all coupons
export async function GET(req) {
    try{
        const { userId} = getAuth(req)
        const isAdmin = await authAdmin(userId)
        if(!isAdmin){
            return NextResponse.json({error:"Unauthorized"}, {status:401})
        }
        const coupons = await prisma.coupon.findMany({})
        return NextResponse.json(coupons)
    }
    catch(err){
        console.error(err)
        return NextResponse.json({ error: "Failed to fetch coupons" }, { status: 500 })
    }   
}
