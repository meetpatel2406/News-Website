import React from 'react'
import Heading from '../../../common/heading/Heading'
import { tpost } from "../../../../dummyData"
import "./tpost.css"

function Reel() {
  return (
    <>
        <section className="tpost">
            <Heading title="Twitter Post"/>
            {
                tpost.map((val)=>
                {
                    return <div className="box shadow flexSB">
                        <div className="img">
                            <img src={val.cover} alt="" />
                        </div>
                        <div className="text">
                            <h1 className='title'>{val.title}</h1>
                            <span>a year ago</span>
                        </div>
                    </div>
                })
            }
        </section>
    </>
  )
}

export default Reel