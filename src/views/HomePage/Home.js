import React from 'react'
import Products from '../../components/Products'
import Services from '../../components/Services'
import { data, data2, data3, data4 } from './dataHome'

export default function Home() {
  return (
    <>
      <Products cssValue={'infoContent'} data={data} />
      <Products cssValue={'infoContent'} data={data2} />
      <Products cssValue={'infoContent light reverse '} data={data3} />
      <Services />
      <Products cssValue={'infoContent reverse'} data={data4} />
    </>
  )
}
