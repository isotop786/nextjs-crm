import {connect} from "@/dbConfig/dbConfig"
import Product from "@/models/productModel";
import { NextRequest, NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from 'next'


connect()



export async function GET() {
    console.log("OKaaay")
    try {
        const products = await Product.find({}).sort({_id: -1}) ;

         return NextResponse.json({
            products: products,
        })
    } catch (error) {
        console.log(error)
    }
}

export async function POST(request: NextRequest)
{
    try {
        const reqBody = await request.json();    
    
         const product = await Product.create(reqBody);
        
        const response = NextResponse.json({
            message: "product created successful",
            success: true,
            product
        })

        return response;


    } catch (error) {
        console.log(error)
    }
}