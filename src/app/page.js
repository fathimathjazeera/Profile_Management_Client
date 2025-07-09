'use client'
import Navbar from "../components/Navbar/Navbar";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import { useEffect, useState } from "react";
import axios from 'axios'

export default function Home() {

  const [allProfiles,setAllprofiles] =useState([])

const fetchAllProfiles=async()=>{
 
const response = await axios.get('https://profile-management-server.onrender.com/api/allprofiles')
const {data,status}=response.data
if(status=="success"){
  console.log(data);
setAllprofiles([...data])
}else{
  console.log("failed to fetch")
}
}
useEffect(() => {
  fetchAllProfiles()
}, [])

  return (
    <main >
    <Navbar />
    <ProfileCard profiles={allProfiles} />

    </main>
  );
}
