import React from 'react'
import '../css/Services.scss'
export default function Services() {
  return (
    <section className="services">
      <div className="container">
        <h1 className="tittle">Our Services</h1>
        <div className="services-box">
          <div className="services-item">
            <svg
              className="item-svg "
              stroke="currentColor"
              fillRule="currentColor"
              viewBox="0 0 512 512"
              height="64"
              width="64"
            >
              <path
                d="M228.813 23L68.75 72.28 39.5 182.095l47.53-21.22 10.44-4.655 2.5 11.155 8.75 39.125 6.405 28.53-21.75-19.53-15.72-14.125-28.218 32.344 140.657 136 9.656-40.69 7.53-31.874 10.407 31.063 54.72 163.592L432.343 465.5l45.75-202.938-84.563-148.718L228.814 23zm-57.688 49.875l-27.813 39.906-3.25 73.44-27.187-88.94 58.25-24.405zm17.844 93.406l113.124 155.25L407 355.407l-107.375-.844-110.656-128v-60.28zM79.312 330.25l140.125 153.125-5.563-65.875-134.563-87.25z"
                fill-rule="evenodd"
              ></path>
            </svg>
            <div className="item-name">Started Pack</div>
            <div className="item-price">
              $99.99<p>per month</p>
            </div>
            <div className="item-desc">
              <p>100 New Users</p>
              <p>$10,000 Budget</p>
              <p>Retargeting analytics</p>
            </div>
            <button className="button">Choose Plan</button>
          </div>
          <div className="services-item">
            <svg
              className="item-svg "
              stroke="currentColor"
              fillRule="currentColor"
              viewBox="0 0 512 512"
              height="64"
              width="64"
            >
              <path d="M196.844 14.125l-8.75 2.906-43.22 13.44-3.5 1.155-1.75 2.938L30.75 206.593l-14 21.032 5.344 15.156L41.5 308.47l2.344 7 7.594-.595 74.156-4.687 6.437-.563 1.75-5.844 77.095-239.436 1.156-2.938-1.155-2.906-11.125-35.625-2.03-6.094-.032-.25h-.032l-.812-2.405zm123.812 5.25l-2.906 5.844-18.125 40.874-1.75 3.5 1.188 4.094L383.156 274l1.75 4.656 4.657 1.188 64.843 14.03 7.594 1.157V295l2.906-7 26.875-60.72 1.75-4.092-1.75-4.094L390.157 28.688l-2.343-4.657-5.25-.592-55.47-3.5-6.437-.563zM184.594 37.47l7.562 23.936-.906 2.844-89.594 174.125 23.625 31.094-6.874 21.31-32.78-42.5-42.563-.842L38 230.188l1-1.563 46.094.938L183.72 37.75l.874-.28zm147.156 1.75l16.47.874 76.343 153.22 36.5 8.374 11.53 21.718-48.468-10.656-7.22 53.438-18.436-3.844L407.093 201l-77.53-156.72 2.186-5.06zm-79.437 85.28l-5.25 3.5-37.375 25.094-3.5 2.344-.594 4.093L166.47 416.5l-.564 5.25 4.063 3.5 76.53 63.656 6.406 5.282 5.844-5.282 75.344-66.562 4.094-2.938-.594-4.656-28.625-251.125-.564-4.094-4.093-2.342-46.72-29.782-5.28-2.906zm.562 22.53l19.5 12.095 12.25 202.406 30.844 24.908 2.843 24.812-.875.78-40.594-32.905-75.156 48.188-15.094-12.47 79.437-50.687-13.155-217.125zm108.438 148.345l-7.5 37.563 32.218 94 33.595 14.968 19.438-39.375-48.094-85.155-29.657-22zM108.625 350.5l-29.687 10.813L32 431.47l2.625 34.593 31.188-12.75 46.937-70.188-4.125-32.625z"></path>
            </svg>
            <div className="item-name">Gold Rush</div>
            <div className="item-price">
              $299.99<p>per month</p>
            </div>
            <div className="item-desc">
              <p>1000 New Users</p>
              <p>$50,000 Budget</p>
              <p>Lead Gen Analytics</p>
            </div>
            <button className="button">Choose Plan</button>
          </div>
          <div className="services-item">
            <svg
              className="item-svg "
              stroke="currentColor"
              fillRule="currentColor"
              viewBox="0 0 512 512"
              height="64"
              width="64"
            >
              <path
                d="M92.906 94.813l60.438 79.75 78.125-79.75H92.905zm189.25 0L359.25 173.5l58.688-78.688H282.155zm-25.344.843l-84.718 86.47H341.53l-84.717-86.47zm177.907 7.906l-58.626 78.563H494.53l-59.81-78.563zm-358.064.75l-57.78 77.813h116.78l-59-77.813zm-58.5 96.5L226.562 429.22 143.344 200.81H18.156zm145.063 0l93.593 256.844 93.593-256.844H163.22zm207.06 0L287.064 429.22 495.469 200.81H370.28z"
                fill-rule="evenodd"
              ></path>
            </svg>
            <div className="item-name">Diamond Kings</div>
            <div className="item-price">
              $999.99<p>per month</p>
            </div>
            <div className="item-desc">
              <p>Unlimited Users</p>
              <p>$Unlimited Budget</p>
              <p>24/7 Support</p>
            </div>
            <button className="button">Choose Plan</button>
          </div>
        </div>
      </div>
    </section>
  )
}
