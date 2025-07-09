import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer-container'>
    <div className='footer-image-container'>
    <img src='/coverphoto.png' className='footer-image'/>
    <p className='connect-text'>Connect with Saksham Arora</p>
    <button className='download-btn'>Download My Resume</button>
    </div>
<div className='footer-contact-sec'>
<div className='left-sec'>
<p>Email</p>
<p>Phone</p>
</div>

<div className='right-sec'>
<p>Github</p>
<p>Linkedin</p>
</div>

</div>

<hr style={{color:'black'}}/>
<p>®2024 MAHE B'LRU</p>
    </div>
  )
}

export default Footer