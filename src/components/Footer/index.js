import React from "react"
import { FiInstagram } from "react-icons/fi";

function Footer(){
  return (
  <div className="footer">
    <a href="https://www.instagram.com/blooming.visions/">
    <FiInstagram size={50}/>
    </a>
    <h2 className ="footerreact">Built with React 2022</h2>
  </div>
  )
}

export default Footer; 