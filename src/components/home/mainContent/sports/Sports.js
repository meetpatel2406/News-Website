import React from 'react'
import "./sports.css"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { sports } from "../../../../dummyData"
import Heading from "../../../common/heading/Heading"


import { Link } from 'react-router-dom'

function Sports() {
    const settings = {
        className: "center",
        centerMode: false,
        infinite: true,
        centerPadding: "",
        slidesToShow: 1,
        speed: 500,
        rows: 2,
        slidesPerRow: 1,
        dots: false,
      }
  return (
    <div>
        <section className='sports'>
        <Heading title='Sports News' />
        <div className='content'>
        <Slider {...settings}>
            {sports.map((val) => {
              return (
                <div className='items'>
                  <div className='box shadow flexSB'>
                    <div className='images'>
                      <div className='img'>
                        <img src={val.cover} alt='' />
                      </div>
                      <div class='category category1'>
                        <span>
                        <Link className="nav-link text-light" to="sports/">{val.catgeory}</Link>
                          </span>
                      </div>
                    </div>
                    <div className='text'>
                      <h1 className='title'>{val.title.slice(0, 40)}...</h1>
                      <div className='date'>
                        <i class="fa-solid fa-comment"></i>
                        <label>{val.date}</label>
                      </div>
                      <p className="desc">{val.desc.slice(0,250)}...</p>
                      <div className="comment">
                        <i className="fas fa-share"> </i>
                        <label htmlFor="">Share/</label>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            </Slider>
        </div>
      </section>
    </div>
  )
}

export default Sports