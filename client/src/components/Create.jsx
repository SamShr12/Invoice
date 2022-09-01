import React, { useEffect } from 'react'
import { useState } from 'react'
import {v4 as uuid4} from 'uuid'
import swal from 'sweetalert'
import axios from '../api/axios'
import { showNotification ,useNotifications } from "@mantine/notifications";
import {AiFillCheckCircle} from 'react-icons/ai'

function Create() {
    // const [customername, SetCustomerName] = useState('')
    // const [customerlocation, setCustomerLocation] = useState('')
    const [productname, setName] = useState('')
    const [productquan, setQuan] = useState()
    const [productprice, setPrice] = useState()
    const [status, setStatus] = useState("")
    const amount = productquan * parseFloat(productprice)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const id = uuid4()
        const newdata = {
            id,
            product_name: productname,
            product_quan: productquan,
            product_status: status,
            product_price: productprice,
            amount:amount
        }

        try {
            const reponse = await axios.post('/posts', newdata).then(()=>{
                showNotification({
                    message:"Item has been succesfully added to the cart",
                    title:`${productname} Sucessfully Created`,
                    icon:<AiFillCheckCircle fontSize={16} />
                })
            })
        } catch (err) {
            swal(err.message)
        }
    }



  return (
    <section className='w-50 pt-28 bd'>
        <h1 className='text-center text-big mb-5'>Create</h1>
        <form onSubmit={handleSubmit}>
        <section className='grid-2 text-center my-10'>
            <div>
                <input type="text" name="" id="" placeholder='Enter product name ...'
                onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div>
                <input type="number" name="" id="" placeholder='Enter quantity'
                onChange={(e)=>setQuan(e.target.value)}
                />
            </div>
        </section>

        <section className='grid-2 text-center my-10'>
            <div>
                <input type="text" name="" id="" placeholder='Enter product status ...'
                onChange={(e)=>setStatus(e.target.value)}
                />
            </div>
            <div>
                <input type="text" name="" id="" placeholder='Enter price ...'
                onChange={(e)=>setPrice(e.target.value)}
                />
            </div>
        </section>

        <section className='text-center'>
                <h1 className='text-big' style={{fontSize:"27px"}}>Amount : {amount}</h1>
        </section>

        <section className='text-center my-10'>
            <button className='px-4 py-4 bg-[#47baef] text-white rounded-xl hover:animate-pulse'>Submit</button>
        </section>
        </form>
    </section>
  )
}

export default Create