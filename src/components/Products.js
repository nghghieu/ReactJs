import React, { useState } from 'react'
import '../css/Navbar.scss'
import '../css/Product.scss'

// function Products({ cssValue }) {

//   return (
//     <section className={cssValue}>
//       <div className="container">
//         <div className="infoContent-box">
//           <div className="left">
//             <h2 className="topLine">Marketing Agency</h2>
//             <p className="heading">Lead Generation Specialist for Online Businesses</p>
//             <p className="desc">
//               We help business owners increase their revenue. Our team of unique specialist can help you achieve your
//               business goals.
//             </p>
//             <button className="button">Get Started</button>
//           </div>
//           <div className="right">
//             <img src={img} alt="" />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
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

// export default Products
