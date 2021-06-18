import React from 'react'
import '../css/Navbar.scss'
import '../css/Product.scss'

const Products = ({ cssValue, data }) => {
  return (
    <>
      <section className={cssValue}>
        <div className="container">
          <div className="infoContent-box">
            <div className="left">
              <h2 className="topLine">{data.topLine}</h2>
              <p className="heading">{data.heading}</p>
              <p className="desc">{data.desc}</p>
              <button className="button">{data.button}</button>
            </div>
            <div className="right">
              <img src={data.img} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Products
