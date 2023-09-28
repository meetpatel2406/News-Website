import React from 'react'
import "../heading/Heading.css"

function Heading({title}) {
  return (
    <>
        <div className="heading">
            <h6>{title}</h6>
        </div>   
    </>
  )
}

export default Heading