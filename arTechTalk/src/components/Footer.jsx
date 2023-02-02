import React from 'react'
// import "./FooterStyles.css"
import {FaHome, FaBeer, FaBacon, FaMailBulk, FaLinkedin, FaGithub} from "react-icons/fa"


function Footer() {
  return (
<div className="footer">
        <div className="footer-container">
            <div className="left"></div>
                <div className="location">
                <div className="linkedin">
                        <h4>
                        <FaBacon size={30} style={{color: "white", marginRight: "1rem"}}/>
                        </h4>
                    </div>
                    <div className="beer">
                        <h4>
                        <FaBeer size={30} style={{color: "gold", marginRight: "1rem"}}/>
                        </h4>
                    </div>
                    {/* <FaSiVite size={20} style={{color: "white", marginRight: "2rem"}}/>
                    <div>
                    SiVite
                        <p>Prescott, Arizona</p>
                    </div> */}
                    {/* <div className="phone">
                        <h4>
                        <FaPhone size={20} style={{color: "white", marginRight: "2rem"}}/>
                        </h4>
                    </div> */}
                    {/* <div className="email">
                        <h4>
                        <FaMailBulk size={20} style={{color: "white", marginRight: "2rem"}}/>
                        mcruzen89@gmail.com
                        </h4>
                    </div> */}
                </div>
            <div className="right">
                <div className="social">
                         {/* <div>
                <FaHome size={20} style={{color: "#fff", marginLeft: "3rem"}}/>
                        <p>Prescott, Arizona</p>
                    </div> */}
                <div className="email">
                        <h4>
                        <FaMailBulk size={30} style={{color: "white", marginRight: "1rem"}}/>
                        mcruzen89@gmail.com
                        </h4>
                    </div>
                <div className="linkedin">
                        <h4>
                        <FaLinkedin size={30} style={{color: "white", marginRight: "1rem"}}/>
                        www.linkedin.com/in/mike-santacruz
                        </h4>
                    </div>
                <div className="github">
                        <h4>
                        <FaGithub size={30} style={{color: "white", marginRight: "1rem"}}/>
                        MikeSC27
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer