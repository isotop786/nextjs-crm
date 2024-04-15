"use client"
import React,{useState} from 'react'
import Image from 'next/image';


const UploadPage = () => {
    const [file, setFile] = useState<File>();
    const [url, setUrl] = useState('');

    const onSubmit = async (e :React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if (!file) return 

        try{
            const data = new FormData()
            data.set('file',file)

            const res = await fetch('/api/upload',{
                method: 'POST',
                body: data
            })
            const dataF = await res.json()
            // console.log(dataF.path)
            setUrl(dataF.path)
            if(!res.ok) throw new Error(await res.text())

        }catch(err: any){
            console.log(err)
        }
    }

  return (
    <main className='container flex flex-col justify-center mx-auto space-y-2'>
        <form className='flex flex-row' onSubmit={onSubmit}>
            <input
                type='file'
                name='file'
                accept="image/*" 
                onChange={(e) =>setFile(e.target.files?.[0])}
            />
            <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type='submit'>submit</button>
        </form>
        {url !=='' && (
            <div className='flex flex-col justify-center items-center'>
            <p>Uploaded image URL, copy from the box</p>
        <input
        value={url}
        type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        <Image src={url} alt={url} width={150} height={80}/>
            </div>
        )}
        
    </main>
  )
}

export default UploadPage