import {connect} from "@/dbConfig/dbConfig"
import Product from "@/models/productModel";
import { NextRequest, NextResponse } from "next/server";
import {dirname, join} from 'path'
import { writeFile } from "fs/promises";

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

        // const data = await request.formData();

        // const file: File | null = data.get('file') as unknown as File;
    
        // if(!file){
        //     return NextResponse.json({success: false,message:"No file find"})
        // }
    
        // const bytes = await file.arrayBuffer();
        // const buffer = Buffer.from(bytes)
    
        // const path = join(`${process.cwd()}/public/uploads/`, file.name)
        // await writeFile(path, buffer);
        // console.log(`open ${path} to see`)

        // const productData = {
        //     title: data.get('title'),
        //     description: data.get('description'),
        //     price: data.get('price'),
        //     imageURL: process.env.DOMAIN+'/uploads/'+file.name
        // }

        const reqBody = await request.json();    
    
         const product = await Product.create(reqBody);
        //  const product = await Product.create(productData);
        
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