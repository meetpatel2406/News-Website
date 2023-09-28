import React from 'react'
import "./ppost.css"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { ppost } from "../../../../dummyData"
import Heading from "../../../common/heading/Heading"


import { Link } from 'react-router-dom'

function Ppost() {
    const settings = {
        dots:true,
        infinity:true,
        speed:500,
        slidesToShow:2,
        slidesToScroll:1
    }
  return (
    <>
        <section className='popularPost'>
        <Heading title='Entertainment' />
        <div className='content'>
        <Slider {...settings}>
            {ppost.map((val) => {
              return (
                <div className='items'>
                  <div className='box shadow'>
                    <div className='images row'>
                      <div className='img'>
                        <img src={val.cover} alt='' />
                      </div>
                      <div class='category category1'>
                        <span>
                            <Link className="nav-link text-light" to="entertainment/">{val.catgeory}</Link>
                        </span>
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

export default Ppost;