"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import User from '@/models/userModel'

const SignupPage = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirm_password:""
    })

    const onSignup = async () => {
        if(user.firstName =="" || user.lastName=="" || user.email =="" || user.password=="" || user.confirm_password==""){
            alert("Form value can not be empty")
        }else{
            if(user.password !== user.confirm_password){
                alert("Password didn't match")
            }
            else{
                try {
                    setLoading(true)
                    const response = await axios.post("/api/users/signup", user);
                    router.push("/public/login")
                }
                catch (error: any) {
                    console.log("Signup failed", error.message);
                }
                finally{
                    setLoading(false)
                }
            }
        }
       
    }

  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create an account
        </h1>
        <div className="space-y-4 md:space-y-6">
            <div>
                <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                <input
                 value={user.firstName}
                 onChange={e => setUser({...user, firstName:e.target.value})}
                type="text" name="firstName" id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
            </div>
            <div>
                <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                <input
                    value={user.lastName}
                    onChange={e => setUser({...user, lastName:e.target.value})}
                    type="text" name="lastName" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
            </div>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input 
                    value={user.email}
                    onChange={e => setUser({...user, email:e.target.value})}
                    type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
            </div>
            <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input 
                    value={user.password}
                    onChange={e => setUser({...user, password:e.target.value})}
                    type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                <input 
                    value={user.confirm_password}
                    onChange={e => setUser({...user, confirm_password:e.target.value})}
                    type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />


            </div>
           <>
           {!loading ? (
            <button onClick={onSignup} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign Up</button>
           ): (
            <button disabled className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Processing...</button>
           )}
            
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? <Link href="/public/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</Link>
            </p>
          </>
        </div>
    </div>
</div>

  )
}

export default SignupPage