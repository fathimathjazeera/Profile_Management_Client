import React from 'react'
import './visualresume.css'


const VisualResume = ({profile}) => {
  return (
    <div className="visual-resume-container">
    <p className="visual-resume-title">Visual Resume</p>
    <img src={profile.avatar} className="visual-image"/>
  </div>
  )
}

export default VisualResume