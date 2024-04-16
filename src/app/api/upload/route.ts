import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import {dirname, join} from 'path'


export async function POST(request: NextRequest, response: NextResponse){

    // await NextCors(req, res, {
    //     // Options
    //     methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    //     origin: '*',
    //     optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    //  });
    

    try{
      
        

        const data = await request.formData();

        const file: File | null = data.get('file') as unknown as File;
    
        if(!file){
            return NextResponse.json({success: false})
        }
    
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes)
    
        const path = join(`${process.cwd()}/public/uploads/`, file.name)
        await writeFile(path, buffer);
        console.log(`open ${path} to see`)
    
        const response = NextResponse.json({
            message: "file uploaded successful",
            success: true,
            path:`${process.env.DOMAIN}/uploads/${file.name}`
        })

        return response

    }catch(err){
        console.log(err)
    }


}