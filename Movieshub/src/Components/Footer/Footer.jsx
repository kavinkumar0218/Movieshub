import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='Footer'>
      <center>
      <div className="footer-icons">
     <a href="https://www.youtube.com/watch?v=I_8afk7CvUo"> <img src={youtube_icon} alt=""/></a>
      <a href ="https://x.com/?lang=en&mx=2&failedScript=vendor"><img src={twitter_icon} alt=""/></a>
     <a href="https://www.instagram.com/accounts/login/?hl=en"> <img src={instagram_icon} alt=""/></a>
      <a href ="https://www.facebook.com/"><img src={facebook_icon} alt=""/></a>

      </div>
      </center>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
       
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        
        <li>Contact Us</li>
      </ul>
      <center>
      <p className='copyright-text'>@ 1997-2023 Stream spot, Inc

      </p>
      </center>
    </div>
  )
}

export default Footer