import React from 'react'
import FindDoctorSection from '../components/Home/FindDoctorSection'
import Clientbar from '../components/Home/Clientbar'
import Explore from '../components/Home/Explore'
import Introbanner from '../components/Home/Introbanner'
import DoctorInfo from '../components/Home/DoctorInfo'
const Home = () => {
  return (
    <>
    <FindDoctorSection/>
    <Clientbar/>
    <Explore/>
    <Introbanner/>
    <DoctorInfo/>
    </>
  )
}

export default Home