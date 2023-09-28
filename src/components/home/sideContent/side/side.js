import React from 'react'
import Heading from '../../../common/heading/Heading'
import Socialmedia from '../social/Socialmedia'
import "./side.css"
import Reel from '../tpost/Tpost'
import { gallery } from '../../../../dummyData'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from 'react-router-dom'

function Side() {

    const settings={
        dots:false,
        infinite:false,
        speed:500,
        slidesToShow:1,
        slidesToSchroll:1,
    }

    const category=["Business","Entertainment","General","Health","Science","Sports","Technology"]
  return (
    <>
        <Heading title="Stay Connected"/> 
        <Socialmedia/> 
        <Heading title="Help"/> 
        <section className="Help">
            <h1 className="title">For any help email me:</h1>
            <form action="">
                <input type="email" name='email' placeholder='Email address...' />
                <button><i className='fa fa-paper-plane'></i>Submit</button>
            </form>
        </section>

        <section className="banner">
            <img src="https://pbs.twimg.com/profile_images/1307473631535136768/UlwPRJwv_400x400.png" alt="" />
        </section>

        <Reel/>

        <section className="catgeorys">
            <Heading title="Category" />
            {
                category.map((val)=>
                {
                    return (
                        <div className="category box shadow category1">
                            <span><Link className="nav-link text-light" to={val}>{val}</Link></span>
                        </div>
                    )
                })
            }
        </section>

        <section className="gallery">
            <Heading title="Gallery"/>
            <Slider {...settings}>
            {
                gallery.map((val)=>
                {
                    return (
                        <div className="img">
                            <img src={val.cover} alt="" />
                        </div>
                    )
                })
            }
            </Slider>
        </section>
    </>
  )
}

export default Side;