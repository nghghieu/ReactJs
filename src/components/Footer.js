import React from 'react'
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
              <a href="#">How it works</a>
              <a href="#">Testimonials</a>
              <a href="#">Careers</a>
              <a href="#">Investor</a>
              <a href="#">Terms of Service</a>
            </div>
            <div className="bottom-item">
              <h3 className="title">Contact Us</h3>
              <a href="#">Contact</a>
              <a href="#">Support</a>
              <a href="#">Destinations</a>
              <a href="#">Sponsorships</a>
            </div>
            <div className="bottom-item">
              <h3 className="title">Videos</h3>
              <a href="#">Submit Video</a>
              <a href="#">Ambassadors</a>
              <a href="#">Agency</a>
              <a href="#">Influencer</a>
            </div>
            <div className="bottom-item">
              <h3 className="title">Social Media</h3>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">Youtube</a>
              <a href="#">Twitter</a>
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
