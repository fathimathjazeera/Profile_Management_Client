import React from 'react'
import './profilecard.css'
import Link from 'next/link'
const ProfileCard = ({profiles}) => {
  return (
    <div className="profile-card">
    {profiles.map((data) => (
      <Link href={`/profiledetail/${data._id}`} key={data.id} passHref>
      <div key={data.id} className="profile-list" >
      <div className="top-profile">
      <img src={data.avatar} className="profile-pic"/>
      </div>
      <div className="bottom-profile">
      <p className="name">{data.name}</p>
      <div className="bio-container">
      <p className="gender">{data.gender} </p> |
      <p className="age"> {data.age} </p>|
      <p className="pronoun">{data?.gender === "Male" ? "He/Him" : "She/Her"} </p>
      </div>
    
      </div>
      </div>
      </Link>
    ))}
  </div>
  )
}

export default ProfileCard