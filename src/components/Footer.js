import React from 'react'
import { NavLink } from 'react-router-dom'

import '../css/Footer.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-box">
          <div className="box-top">
            <p className="heading">Join our exclusive membership to receive the latest news and trends</p>
            <p className="desc">You can unsubscribe at any time.</p>
            <input type="email" placeholder="Your Email"></input>
            <button className="button">Subscribe</button>
          </div>
          <div className="box-bottom">
            <div className="bottom-item">
              <h3 className="title">About us</h3>
              <NavLink exact={true} to="/">
                {' '}
                How it works{' '}
              </NavLink>
              <NavLink exact={true} to="/">
                Testimonials
              </NavLink>
              <NavLink exact={true} to="/">
                Careers
              </NavLink>
              <NavLink exact={true} to="/">
                Investor
              </NavLink>
              <NavLink exact={true} to="/">
                Terms of Service
              </NavLink>
            </div>
            <div className="bottom-item">
              <h3 className="title">Contact Us</h3>
              <NavLink exact={true} to="/">
                Contact
              </NavLink>
              <NavLink exact={true} to="/">
                Support
              </NavLink>
              <NavLink exact={true} to="/">
                Destinations
              </NavLink>
              <NavLink exact={true} to="/">
                Sponsorships
              </NavLink>
            </div>
            <div className="bottom-item">
              <h3 className="title">Videos</h3>
              <NavLink exact={true} to="/">
                Submit Video
              </NavLink>
              <NavLink exact={true} to="/">
                Ambassadors
              </NavLink>
              <NavLink exact={true} to="/">
                Agency
              </NavLink>
              <NavLink exact={true} to="/">
                Influencer
              </NavLink>
            </div>
            <div className="bottom-item">
              <h3 className="title">Social Media</h3>
              <NavLink exact={true} to="/">
                Instagram
              </NavLink>
              <NavLink exact={true} to="/">
                Facebook
              </NavLink>
              <NavLink exact={true} to="/">
                Youtube
              </NavLink>
              <NavLink exact={true} to="/">
                Twitter
              </NavLink>
            </div>
          </div>
          <div className="box-footer">
            <div className="logo">Noth'G</div>
            <div className="copy-right">
              ULTRA
              <i class="fa fa-copyright" aria-hidden="true"></i>
              2020
            </div>
            <ul className="social-icon">
              <li className="social-icon-item">
                <i class="fa fa-facebook-f" aria-hidden="true"></i>
              </li>
              <li className="social-icon-item">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </li>
              <li className="social-icon-item">
                <i class="fa fa-youtube" aria-hidden="true"></i>
              </li>
              <li className="social-icon-item">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </li>
              <li className="social-icon-item">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
