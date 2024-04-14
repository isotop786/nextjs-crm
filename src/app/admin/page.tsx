"use client"
import React from 'react'
import BarChart from '@/components/BarChart'
import LineChart from '@/components/LineChart'
import PieChart from '@/components/PieChart'
import DoughNutChart from '@/components/DoughnutChart'

const page = () => {
    
  return (
    <>
        <h1 className="text-3xl text-black pb-6">Dashboard</h1>
    
    <div className="flex flex-wrap mt-6">
        <div className="w-full lg:w-1/2 pr-0 lg:pr-2">
            <p className="text-xl pb-3 flex items-center">
                <i className="fas fa-plus mr-3"></i> Monthly Reports
            </p>
            <div className="p-6 bg-white">
                <BarChart/>
            </div>
        </div>
        <div className="w-full lg:w-1/2 pl-0 lg:pl-2 mt-12 lg:mt-0">
            <p className="text-xl pb-3 flex items-center">
                <i className="fas fa-check mr-3"></i> Quarterly Sale Report
            </p>
            <div className="p-6 bg-white">
                <LineChart/>
            </div>
        </div>

    </div>

    <div className="flex flex-wrap mt-6">
        <div className="w-1/2 lg:w-1/2 pl-0 lg:pl-2 mt-12 lg:mt-0 ">
            <p className="text-xl pb-3 flex items-center">
                <i className="fas fa-check mr-3"></i> Product Sales
            </p>
            <div className="p-6 bg-white">
                <PieChart/>
            </div>
        </div>
        <div className="w-1/2 lg:w-1/2 pl-0 lg:pl-2 mt-12 lg:mt-0 ">
            <p className="text-xl pb-3 flex items-center">
                <i className="fas fa-check mr-3"></i> Project Progress
            </p>
            <div className="p-6 bg-white">
                <DoughNutChart/>
            </div>
        </div>
    </div>

    <div className="w-full mt-12">
        <p className="text-xl pb-3 flex items-center">
            <i className="fas fa-list mr-3"></i> Employees Report
        </p> 
        <div className="bg-white overflow-auto">
            <table className="min-w-full bg-white">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                        <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Last name</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Phone</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    <tr>
                        <td className="w-1/3 text-left py-3 px-4">Lian</td>
                        <td className="w-1/3 text-left py-3 px-4">Smith</td>
                        <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                        <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}

export default page