import React from 'react'
import Members from './members/members'
import Aboutbanner from './aboutbanner/aboutbanner'
import AboutCompany from './about/about'
import Spliter from "./spliter/spliter"
import Results from './results/results'

const About = () => {
  return (
    <>
 <Aboutbanner/>
 <AboutCompany/>
<Results/>
  <Members/>
    </>
  )
}

export default About