import React from 'react'
import "./.\\footer.css"

function Footer() {
    console.log("errr")
  return (
    <>
        <footer className='footer'>
            <div className='container'>
                <div className="footer-left">
                    <img src="https://pbs.twimg.com/profile_images/1307473631535136768/UlwPRJwv_400x400.png" alt="" />
                    <p className='footer-company-name'>Copyright @ 2023 <strong>Meet Patel</strong></p>
                </div>

                <div className="footer-center">
                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span>Gujarat,</span>India</p>
                    </div>
                    <div>
                        <i className="fa fa-phone"></i>
                        <p>+91 8200227843</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="/">meetbpatel2406@gmail.com</a></p>
                    </div>
                </div>

                <div className="footer-right">
                    <p className="about-me">
                        <span>About Me--</span>
                        <strong>I am meet patel and I made this aussom newsnet website to read daily news!</strong>
                    </p>
                    <div className="footer-icons">
                        <a href="/"><i class="fa-brands fa-facebook"></i></a>
                        <a href="/"><i class="fa-brands fa-instagram"></i></a>
                        <a href="/"> <i class="fa-brands fa-x-twitter"></i></a> 
                    </div>
                </div>

            </div>
        </footer>
    </>
  )
}

export default Footer;