import React, { useEffect, useState } from 'react'
import axios from '../api/axios';

function Invoice() {
  const [data,setData] = useState([])
  const current = new Date()
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

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
  return (
    <section>
        <div className='w-full'>

          <div className='grid-2 my-10'>
            <div>
              <input className='font-semibold text-[#273339] border py-2 px-2 w-52 capitalize' placeholder='Enter customer name...' autoFocus />
              <div>
                <input className='font-semibold text-[#273339] border py-2 px-2 w-52 capitalize' placeholder='Enter customer location...' />
              </div>
              <div>
                <h2 className='font-semibold text-[#273339] border py-2 px-2 w-52'> {date}</h2>
              </div>
            </div>
            <div>
              <h1 className='text-center font-bold text-[#273339]'>Invoice</h1>
            </div>
          </div>

          <div className='grid-5 bg-[#a6abbd] text-white font-semibold px-4 py-1'>
              <div>Item</div>
              <div>Qty</div>
              <div>Status</div>
              <div>Price</div>
              <div>Total</div>
          </div>

          {data.map((here)=>(
          <div className='grid-5 font-semibold px-4 py-2 bg-[#f9fafe] text-lg' key={here.id}>
            <div>{here.product_name}</div>
            <div>{here.product_quan}</div>
            <div>{here.product_status}</div>
            <div>{here.product_price}</div>
            <div>{here.amount}</div>
      </div>
          ))}

          <div className='bg-[#ccc] text-white font-bold text-right pr-10 py-4 text-xl'>
              Estimated Total : {totalsum}
          </div>
            
        </div>
    </section>
  )
}

export default Invoice