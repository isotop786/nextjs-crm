"use client"
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React,{useState, useEffect} from 'react'

export interface Product{
  _id?: string,
  title: string,
  description: string,
  price: number,
  imageURL: string
}

const ProductPage = () => {

  const [products,setProducts] = useState<Product[]>([])
  const [load, setLoad] = useState<Boolean>(false)

  useEffect(()=>{

    async function getProducts(){
      try{
        setLoad(true)
        axios.get("/api/products")
        .then((res:any)=>{
          // console.log(res)
          setProducts(res.data.products)

        })
      }catch(error){
        console.log(error)
      }finally{
        setLoad(false)
      }
    }

    getProducts()

  },[])



return (
<div className="relative overflow-x-auto">
  <div className='flex justify-between items-center px-2 my-4'>
    <h2 className='text-xl'>All Products</h2>
    <Link className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' href="/admin/products/create">Add New Product</Link>
  </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
              <th scope="col" className="px-6 py-3">
                  Product Image
              </th>
              <th scope="col" className="px-6 py-3">
                  Product name
              </th>

              <th scope="col" className="px-6 py-3">
                  Price
              </th>
             
              <th scope="col" className="px-6 py-3">
                  Description
              </th>
             
          </tr>
      </thead>
      {!load ? (
        <tbody>
        {products.map((product: Product)=>(
          <tr key={product._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
           
            <th scope="row" className="px-6 py-4 w-1/6"  >
                <img src={product.imageURL} alt="product image"/>
            </th>

            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {product.title}
            </td>

            <td className="px-6 py-4">
                ${product.price}
            </td>
            
            <td className="px-6 py-4">
                {product.description.substring(0,100)+"..."}
            </td>
           
        </tr>
        ))}
          
      </tbody>
      ):(<tbody>
        <tr className="bg-white dark:bg-gray-800">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  loading...
              </th>
              <td className="px-6 py-4">
              loading...
              </td>
              <td className="px-6 py-4">
              loading...
              </td>
              <td className="px-6 py-4">
              loading...
              </td>
          </tr>
      </tbody>)}
  </table>
    
</div>

  )
}

export default ProductPage