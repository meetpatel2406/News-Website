import React from 'react'


function Socialmedia() {
  return (
    <>
        <section className="social">
            <div className="socBox">
                <i class="fa-brands fa-facebook"></i>
                <a href="/">
                    <span>12,998 Likes</span>
                </a>
            </div>
            <div className="socBox">
                <i class="fa-brands fa-pinterest"></i>
                <a href="/">
                    <span>1,298 Fans</span>
                </a>
            </div>
            <div className="socBox">
                <i class="fa-brands fa-instagram"></i>
                <a href="/">
                    <span>12k folowers Likes</span>
                </a>
            </div>
            <div className="socBox">
                <i class="fa-brands fa-x-twitter"></i>
                <a href="/">
                    <span>8,900 followrs</span>
                </a>
            </div>
            <div className="socBox">
                <i class="fa-brands fa-youtube"></i>
                <a href="/">
                    <span>50k subscribers</span>
                </a>
            </div>
        </section>   
    </>
  )
}

export default Socialmedia