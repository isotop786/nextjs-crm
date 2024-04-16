import {NextRequest, NextResponse} from "next/server"

export function middleware (request: NextRequest){
    const path = request.nextUrl.pathname;

    // public paths
    const isPublicPath = path === "/public/login" || path === "/public/signup" 

    // getting token from cookies
    const token = request.cookies.get('token')?.value || '';

    // Redirect to urls based on the path and token presence 

    // if user is logged in then redirect to home and private pages
    if(isPublicPath && token){
        return NextResponse.redirect(new URL('/admin',request.nextUrl))
    }

    // if user isn't logged in then redirect to login page
    if(!isPublicPath && !token){
        return NextResponse.redirect(new URL("/public/login", request.nextUrl))
    }

}

export const config = {
    matcher: [
      '/admin',
      '/admin/test',
      '/admin/calender',
      '/admin/employees',
      '/admin/projects',
      '/admin/sales',
      '/admin/products',
      '/admin/uploads',
      '/profile',
      '/posts',
      '/posts/create',
      '/public/login',
      '/public/signup',
      '/verifyemail'
    ]
  }