import {connect} from "@/dbConfig/dbConfig"
import Product from "@/models/productModel";
import { NextRequest, NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from 'next'


connect()

type ResponseData = {
    message: string
  }
   
  export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
  ) {
    res.status(200).json({ message: 'Hello from Next.js!' })
  }