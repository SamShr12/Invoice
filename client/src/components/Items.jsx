import { Field, useFormikContext } from 'formik'
import React from 'react'
import { useEffect } from 'react'

function Items({items, index, item}) {
    // const { values, setFieldValue } = useFormikContext()
    const amount = parseInt(items[index].product_quantity * items[index].product_price)

    // useEffect(()=> {
    //     const amount = values.items[index].product_quantity * values.items[index].product_price 
    //     setFieldValue(`items[${index}].amount` || "0")
    // },[values.items[index].product_quantity, values.items[index].product_price])

  return (
    <section>
         
    </section>
  )
}

export default Items