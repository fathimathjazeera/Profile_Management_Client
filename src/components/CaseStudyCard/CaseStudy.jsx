import React from 'react'
import './casestudy.css'
const CaseStudy = () => {
  return (
    <div className='case-study-container'>
    <div className='case-study-flexbox'>
    <p className='case-study-title'>Case Insights & Key Projects</p> 
    <div>
        <button>Case Studies</button>
        <button>Projects</button>
    </div>
    
    </div>
    <div className='case-image-flexbox'>
        <img src='/casestudy1.jpg'/>
        <img src='/casestudy2.jpg'/>
        <img src='/casestudy3.jpg'/>
    </div>
        </div>
  )
}

export default CaseStudy