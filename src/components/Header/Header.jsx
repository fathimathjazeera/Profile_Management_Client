import React from 'react'
import './header.css'
const Header = ({profile}) => {
  return (
    <div className='background-container'>
    <img src='/coverphoto.png' className='cover-image'/>
    <div className='cover-photo-container'>
<div className='left-cover-image'>
  <div className='contact-box'>
  <p>Email</p>
  <p>Phone</p>
  </div>

</div>
<div className='middle-cover-image'>
  
 <img src={profile.avatar} className='avatar'/>
</div>
<div className='right-cover-image'>
  
<button className='resume-button'>Download My Resume</button>
</div>
</div>

    </div>
  )
}

export default Header