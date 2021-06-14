import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/side-bar.scss'

export function SideBar() {
  return (
    <nav>
      <div className="logo">
        <h1>Trinh Hung</h1>
        <p>front end developer</p>
      </div>
      <ul>
        <li>
          <NavLink exact={true} to="/">
            <i className="fas fa-home-lg-alt"></i> Home
          </NavLink>
        </li>
        <li>
          <NavLink exact={true} to="demo-cud">
            <i className="fas fa-user-graduate"></i> CUD Student
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
