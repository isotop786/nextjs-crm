"use client"

import React,{useState, useEffect} from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/navigation'


const TopHeader = () => {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter();
    const logout = async () => {
        try {
            await axios.get('/api/users/logout');
            router.push('/public/login')
        } catch (error: any) {
            console.log(error.message)
            
        }

    }
  return (
    <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
    <div className="w-1/2"></div>
    <div x-data="{ isOpen: true }" className="relative w-1/2 flex justify-end">
    <button onClick={()=>setIsOpen(!isOpen)}  className="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
            <img src="https://www.upwork.com/profile-portraits/c1TOGYyOsTYunWelF4ngv7upBynkrjzpvel2Bvl99o2-BKF7TLAZAv38hi_CpJGYK1"/>
        </button>
        
        {isOpen && (
            <div x-show="isOpen" className="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16">
            <Link href="#" className="block px-4 py-2 account-link hover:text-white">Account</Link>
            <Link href="#" className="block px-4 py-2 account-link hover:text-white">Settings</Link>
            <Link onClick={logout} href="#" className="block px-4 py-2 account-link hover:text-white">Sign Out</Link>
        </div>
        )}
    </div>
</header>
  )
}

export default TopHeader