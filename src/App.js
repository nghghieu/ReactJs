import React from 'react'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Services from './components/Services'
import './css/Reset.scss'
import './css/Global.scss'
import { data, data2, data3, data4 } from './data'

function App() {
  return (
    <>
      <Navbar />
      <Products cssValue={'infoContent'} data={data} />
      <Products cssValue={'infoContent'} data={data2} />
      <Products cssValue={'infoContent light reverse '} data={data3} />
      <Services />
      <Products cssValue={'infoContent reverse'} data={data4} />
    </>
  )
}

export default App
