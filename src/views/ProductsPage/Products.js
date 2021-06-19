import React from 'react'
import Products from '../../components/Products'
import { data, data2 } from './productData'

export default function Product() {
  return (
    <>
      <Products cssValue={'infoContent light reverse '} data={data2} />
      <Products cssValue={'infoContent'} data={data} />
    </>
  )
}
