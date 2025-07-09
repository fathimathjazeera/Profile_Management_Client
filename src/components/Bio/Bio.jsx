import React from 'react'
import './bio.css'


const Bio = ({profile}) => {
  return (
    <div className='bio-section'>
 <div className='name-section'>
 <p className='name'>{profile.name}</p>
 <p className='sub-bio'>{profile.gender| profile.age | profile.gender == "Male" ? "He/Him" : "She/Her"}</p>
 </div>
 <button className='visual-btn'>Watch my Visual Resume Now</button>
<div className='skills-container'>
  <p>Core Skills & Technical Proficiencies</p>
  <p>Professional Journey & Internship Roles</p>
  <p>Case Insights & Key Projects</p>
  <p>Learning & Academic Milestones</p>
  <p>Endorsements from Mentors & Peers</p>
</div>
<div className='biography'>
<p>{profile.bio}</p>
</div>
 </div>
  )
}

export default Bio