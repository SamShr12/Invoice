import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../api/axios'
import Item from './Item'

function Detail() {
  const [data,setData] = useState([])
  // const [ite]

  useEffect(() => {
    const fetchPosts = async () =>{
      try{
          const response = await axios.get('/posts');
          setData(response.data);
          console.log(response.data)
      } catch (err){
          if (err.response) {
              console.log(err.response.data);
              console.log(err.response.status);
              console.log(err.response.headers);
          } else{
              console.log(`Error:${err.message}`)
          }
          
      }
    }

    fetchPosts();
  }, [])

  const totalsum = data.reduce((a,v)=>a = a + parseInt(v.amount),0)
  console.log(totalsum)
  return (
    <section className='w-50'>
        <div className='grid-2 my-10 text-center'>
        <h1 className='text-big'>
            Detail
        </h1>
        <div>
          <Link to="/create">
                <button className='mt-2 px-4 py-4 text-white bg-[#47baef] font-bold rounded-xl mr-2 hover:animate-pulse'>New Items</button>
            </Link>
            <Link to="/invoice">
              <button className='mt-2 px-4 py-4 text-white bg-[#47baef] font-bold rounded-xl hover:animate-pulse'>Create Invoice</button>
            </Link>
        </div>
         
        </div>

        <section>
          <div className='py-1'>
            <div className='py-5 px-10 grid-2 box-shadow'>
                <div>
                  <h2 className='text-big' style={{fontSize:"18px"}}>Status</h2>
                </div>
                <div className='text-right'>
                  <button className='px-4 py-2 bg-[#27bcde] rounded-xl font-bold text-white hover:animate-pulse mx-10'>Edit</button>
                  <button className='px-4 py-2 bg-[#ec5757] rounded-xl font-bold text-white hover:animate-pulse '>Delete</button>
                </div>
            </div>
          </div>
        </section>

        <section className='box-shadow px-10 py-5'>
          <div className='my-10'>
            <h2 className='text-big' style={{fontSize:"18px"}}>Bill</h2>
            
          </div>

          <div className='bg-[#f9fafe] px-10 py-5'>
            <div className='grid-5 text-center text-[#888eb0] font-semibold'>
                <div>Item</div>
                <div>Qty</div>
                <div>Status</div>
                <div>Price</div>
                <div>Total</div>
            </div>

            {data.map((item)=>(
              <Item key={item.id} item={item} />
            ))}
          </div>
          <div className='text-right bg-[#373b53] text-white font-bold py-5'>
              <h2 className='px-20 text-xl'>Estimated Amount : Rs {totalsum}</h2>
          </div>
          
        </section>
        
    </section>
  )
}

export default Detail