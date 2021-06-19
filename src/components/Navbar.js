import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
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
  const click = () => {
    setclickNav('nav')
    setClickCl('fa fa-bars')
    window.scrollTo(0, 0)
  }
  return (
    <section>
      <div className="header">
        <div className="container">
          <nav className="header-container">
            <div className="logo">Noth'G</div>
            <ul onClick={click} className={clickNav}>
              <li className="nav-item">
                <NavLink to="/">home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact={true} to="/services">
                  services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact={true} to="/products">
                  products
                </NavLink>
              </li>
              <li className="nav-item btn">
                <NavLink exact={true} to="/">
                  sign Up
                </NavLink>
              </li>
            </ul>
            <button className="bar" onClick={clickClose}>
              <i className={clickCl}></i>
            </button>
          </nav>
        </div>
      </div>
    </section>
  )
}

export default Navbar
