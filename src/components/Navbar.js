import React, { useState } from 'react'
import '../css/Navbar.scss'
function Navbar() {
  const [clickCl, setClickCl] = useState('fa fa-bars')
  const [clickNav, setclickNav] = useState('nav')

  const clickClose = () => {
    if (clickCl === 'fa fa-bars') {
      setClickCl('fa fa-times')
      setclickNav('nav active')
    } else {
      setClickCl('fa fa-bars')
      setclickNav('nav')
    }
  }

  return (
    <section>
      <div className="header">
        <div className="container">
          <nav className="header-container">
            <div className="logo">Noth'G</div>
            <ul className={clickNav}>
              <li className="nav-item">
                <a href="#">home</a>
              </li>
              <li className="nav-item">
                <a href="#">services</a>
              </li>
              <li className="nav-item">
                <a href="#">products</a>
              </li>
              <li className="nav-item btn">
                <a href="#">sign Up</a>
              </li>
            </ul>
            <button className="bar" onClick={clickClose}>
              <i class={clickCl}></i>
            </button>
          </nav>
        </div>
      </div>
    </section>
  )
}

export default Navbar
