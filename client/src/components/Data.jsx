import React from 'react'
import { Link } from 'react-router-dom'

function Data() {
  return (
    <section className='w-50'>
        <div className='grid-1 text-center mt-10'>
            <h1 className='text-big'>Invoices</h1>
            
        </div>
        <section>
          <Link to="/detail">
          <div className='py-4 mt-10 px-4 bg-[#ccc] rounded-xl'>
              <h2 className='text-big' style={{fontSize:"16px"}}>Invoice 1</h2>
          </div>
          </Link>

        </section>
    </section>
  )
}

export default Data