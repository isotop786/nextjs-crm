"use client"
import React,{useState, useEffect,ChangeEvent ,ChangeEventHandler} from 'react'
import { Product } from '../page'
import axios from 'axios'
import { useRouter } from 'next/navigation'


const CreateProduct = () => {

  const router = useRouter();

  interface Error{
    title: string,
    description: string,
    price: string,
    imageURL: string
  }

  const [product,setProduct] = useState({
     title:"",
     description:"",
     imageURL:"",
     price:""
  })
  const [errors,setErrors] = useState<Error>({
    title:"",
    description:"",
    imageURL:"",
    price:""
  })

  const err = [];

  const [loading, setLoading] = useState(false)
  const [productImage, setProductImage] = useState<File>();

  const handleImageChange = (e :ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.files[0]!)
    // if (e.target.files && e.target.files[0]) {
    //   setProductImage(e.target.files[0]);
    // }
    setProductImage(e.target.files?.[0])
    console.log(productImage)
  };
  
  const validateForm = () => {
    const myErrors : Error = {
      title:"",
      description:"",
      imageURL:"",
      price:""
    };

    if (!product.title) {
      myErrors.title = 'Title is required';
      err.push("title")
    } 

    if (!product.description) {
      myErrors.description = 'Description is required';
      err.push("dsc")
    }
    if (!product.price) {
      myErrors.price = 'Price is required';
      err.push("price")
    }
    if (!product.imageURL) {
      myErrors.imageURL = 'Image URL is required';
      err.push("imgurl")
    }

    setErrors(myErrors);
    //alert(err.length)
    //return Object.keys(myErrors).length === 0;

    if(err.length <0){
      return true
    }else{
      return false
    }
   
  };


  async function onSubmit(){
      // validateForm()
      const {title, description, price} = product;

      const data = {
        title, 
        description, 
        price,
        productImage
      }

      console.log(data.productImage)

      if(err.length === 0){
        try{
          setLoading(true)
          // const res = await axios.post("/api/products",product)
          const res = await axios.post("/api/products",data)
          router.push("/admin/products")
        }        
        catch(err){
          console.log(err)
        }
        finally{
          setLoading(false)
        }
      }
   
    }

   

 

  return (
    
<div className="max-w-sm mx-auto">

  <div className="mb-5">
      <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product title</label>
      <input 
        value={product.title}
        onChange={e => setProduct({...product,title:e.target.value})}
      type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      {errors.title && (<p className="mt-2 text-sm text-red-600 dark:text-red-500">Title can not be empty</p>)}
  </div>
  <div className="mb-5">
      <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product price</label>
      <input 
        value={product.price}
        onChange={e => setProduct({...product, price:e.target.value})}
      type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      {errors.price && (<p className="mt-2 text-sm text-red-600 dark:text-red-500">Price can not be empty</p>)}
  </div>
  <div>
      <input type="file" name="file"  onChange={async (e)=>{
        // setProductImage(e.target.files?.[0])
        console.log(e.target.files?.[0])
        setProductImage(e.target.files?.[0])
        console.log(productImage)
        
      }} />
      
    </div>
  <div className="mb-5">
      <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Image URL</label>
      <input
        value={product.imageURL}
        onChange={e => setProduct({...product, imageURL:e.target.value})}
      type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      {errors.imageURL && (<p className="mt-2 text-sm text-red-600 dark:text-red-500">ImageURL can not be empty</p>)}
  </div>

  <div className="mb-5">
      <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
      <textarea 
        value={product.description}
        onChange={e => setProduct({...product, description:e.target.value})}
      id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </textarea>
        {errors.description && (<p className="mt-2 text-sm text-red-600 dark:text-red-500">Description can not be empty</p>)}
  </div>

  <div>
    {!loading ? (<button onClick={onSubmit} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Submit</button>)
            : (<button onClick={onSubmit} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' disabled={true}>Processing</button>)  
  }
  </div>
  
</div>

  )
}

export default CreateProduct