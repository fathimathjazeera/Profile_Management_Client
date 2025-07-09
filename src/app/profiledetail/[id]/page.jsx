'use client'
import Navbar from '@/components/Navbar/Navbar';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Bio from '@/components/Bio/Bio';
import ProgrammingCard from '@/components/ProgrammingCard/ProgrammingCard';
import CaseStudy from '@/components/CaseStudyCard/CaseStudy';
import VisualResume from '@/components/VisualResumeCard/VisualResume';
import Footer from '@/components/Footer/Footer';
import axios from 'axios';

const page = ({params}) => {

  const {id} = params
  console.log(params,"params");
  const [singleProfile,setSingleProfile] = useState('')
  const fetchSingleProfile=async()=>{
 
    const response = await axios.get(`https://profile-management-server.onrender.com/api/singleprofile/${id}`
    )
    const {data,status}=response.data
    if(status=="success"){
      console.log(data,"single data");
    setSingleProfile(data)
    }else{
      console.log("failed to fetch")
    }
    }

    useEffect (() => {
 fetchSingleProfile()
 console.log(singleProfile,"single");
    }, [])
    

  return (
    <>
    <Navbar />
 <Header profile={singleProfile}/>
 <Bio profile={singleProfile}/>
 <ProgrammingCard profile={singleProfile}/>
 <CaseStudy profile={singleProfile}/>
 <VisualResume profile={singleProfile} />
 <Footer profile={singleProfile}/>
    </>
  )
}


export default page