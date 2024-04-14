"use client"
import React from 'react'
import Link from 'next/link'
import {usePathname } from 'next/navigation'
import { FcSalesPerformance } from "react-icons/fc";
import { MdOutlineInventory2 } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { FaProjectDiagram } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { MdPointOfSale } from "react-icons/md";




const Sidebar = () => {
    const pathName = usePathname()

  return (
    <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
        <div className="p-6">
            <Link href="/admin" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</Link>
            <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                <i className="fas fa-plus mr-3"></i> New Report
            </button>
        </div>
        <nav className="text-white text-base font-semibold pt-3">
            <Link href="/admin" className={`flex items-center  text-white py-4 pl-6 nav-item ${pathName=='/admin' && 'active-nav-link'}`}>
                <GrProjects className='md:mr-1'/>
                <span>Dashboard</span>
            </Link>
            <Link href="/admin/sales" className={`flex items-center  text-white py-4 pl-6 nav-item ${pathName=='/admin/sales' && 'active-nav-link'} `}>
                <MdPointOfSale className='mr-1' />
                <span>Sales</span>
            </Link>
            <Link href="/admin/products" className={`flex items-center  text-white py-4 pl-6 nav-item ${pathName=='/admin/products' && 'active-nav-link'} `} >
                <MdOutlineInventory2 className='md:mr-1'/>
                <span>Products</span>
            </Link>
            <Link href="/admin/projects" className={`flex items-center  text-white py-4 pl-6 nav-item ${pathName=='/admin/projects' && 'active-nav-link'} `} >
                <FaProjectDiagram className='md:mr-1'/>
                <span>Projects</span>
            </Link>
            <Link href="/admin/employees" className={`flex items-center  text-white py-4 pl-6 nav-item ${pathName=='/admin/employees' && 'active-nav-link'} `} >
                <IoMdPeople size={20} className='md:mr-1' />
                <span>Employees</span>
            </Link>
            <Link href="/admin/calendar" className={`flex items-center  text-white py-4 pl-6 nav-item ${pathName=='/admin/calendar' && 'active-nav-link'} `}>
                <FaCalendarAlt className='md:mr-1'/>
                <span>Calendar</span>
            </Link>
        </nav>
    </aside>
  )
}

export default Sidebar