import React from 'react'
import "./business.css"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { business } from "../../../../dummyData"
import Heading from "../../../common/heading/Heading"

function Life() {
    const settings = {
        dots:true,
        infinity:true,
        speed:500,
        slidesToShow:3,
        slidesToScroll:1,
        responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
          ],
    }
  return (
    <>
        <section className='popularPost Life'>
        <Heading title='Business News' />
        <div className='content'>
        <Slider {...settings}>
            {business.map((val) => {
              return (
                <div className='items'>
                  <div className='box shadow'>
                    <div className='images row'>
                      <div className='img'>
                        <img src={val.cover} alt='' />
                      </div>
                      <div class='category category1'>
                        <span>{val.catgeory}</span>
                      </div>
                    </div>
                    <div className='text row'>
                      <h1 className='title'>{val.title}</h1>
                      <div className='date'>
                        <i class="fa-solid fa-comment"></i>
                        <label>{val.date}</label>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            </Slider>
        </div>
      </section>  
    </>
  )
}

export default Life