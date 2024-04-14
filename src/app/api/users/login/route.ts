import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import {NextRequest, NextResponse} from 'next/server'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

// connect to database
connect()

export async function POST (request: NextRequest)
{
    try{
        const reqBody = await request.json();
        const {email, password} = reqBody;

        // check if the user exists
        const user = await User.findOne({email});

        // if user doesn't exists then return error message
        if(!user){
            return NextResponse.json({error: "User does not exist"},{status:400})
        }

        // if user exists then check the password
        const validPassword = await bcryptjs.compare(password, user.password);

        if(!validPassword){
            return NextResponse.json({error:"Invalid password"}, {status: 400})
        }

        // create a token with expiration of 1 day
        const tokenData ={
            id: user._id,
            email: user.email
        }

        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn:"1d"})

        // returing success message with token
        const response = NextResponse.json({
            message:"Login successfull",
            token: token,
            success: true
        })

        // set HTTP-only cookie
        response.cookies.set("token", token, {
            httpOnly: true
        })

        return response;


    }catch(error)
    {
        console.log(error)
    }
}
