import React from 'react'
import Navbar from './components/Navbar'
import Products from './components/Products'
import './css/Reset.scss'
import './css/Global.scss'
import { data, data2, data3 } from './data'

function App() {
  return (
    <>
      <Navbar />
      <Products cssValue={'infoContent'} data={data} />
      <Products cssValue={'infoContent'} data={data2} />
      <Products cssValue={'infoContent light rowReverse'} data={data3} />
    </>
  )
}

export default App
