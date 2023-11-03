import React from 'react'
import Members from './members/members'
import Aboutbanner from './aboutbanner/aboutbanner'
import AboutCompany from './about/about'
import Spliter from "./spliter/spliter"

const About = () => {
  return (
    <>
 <Aboutbanner/>
 <AboutCompany/>
<Spliter/>
  <Members/>
    </>
  )
}

export default About