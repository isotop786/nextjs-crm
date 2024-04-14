import { connect } from "@/dbConfig/dbConfig";
import { NextResponse,NextRequest } from "next/server";
import bcryptjs from 'bcryptjs'
import jwt from "jsonwebtoken";
import User from "@/models/userModel";

connect();

export async function GET(request: NextRequest) {
    try {
        const response = NextResponse.json(
            {
                message: "Logout successful",
                success: true,
            }
        )
        response.cookies.set("token", "",
        { httpOnly: true, expires: new Date(0)
        })

        return response;
        
    } catch (error : any) {
        return NextResponse.json({ error: error.message},
            {status: 500});
    }
}