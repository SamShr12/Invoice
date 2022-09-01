import React from 'react'

const Item = ({item,totalsum}) => {
    console.log(item)
  return (
    <section>
         <div className='grid-5 text-center text-[#273339] font-semibold my-5'>
                <div className='capitalize'>{item.product_name}</div>
                <div>{item.product_quan}</div>
                <div>{item.product_status}</div>
                <div>{item.product_price}</div>
                <div>{item.amount}</div>
            </div>
    </section>
  )
}

export default Item