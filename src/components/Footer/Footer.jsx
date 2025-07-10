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
<button>Github</button>
<button>Linkedin</button>
</div>

</div>

<hr style={{color:'black'}}/>
<p style={{color: '#8E8E93'}}>®2024 MAHE B'LRU</p>
    </div>
  )
}

export default Footer