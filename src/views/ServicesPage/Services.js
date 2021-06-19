import React from 'react'
import Services from '../../components/Services'
import Products from '../../components/Products'
import { data, data2 } from './serviceData'

export default function Service() {
  return (
    <>
      <Services />
      <Products cssValue={'infoContent'} data={data} />
      <Products cssValue={'infoContent light reverse '} data={data2} />
    </>
  )
}
