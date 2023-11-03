import React from 'react'
import Banner from './banner/banner'
import Platforms from './platforms/platforms'
import Results from './results/results'
import Services2 from "./services2/services2"
import Engangment from "./engangment/Engangment"
import Spliter from './spliter/spliter'


const Home = () => {
  return (
    <div>
      <Banner/>
      <Engangment/>
      <Spliter/>
      <Services2/>
      <Results/>
      <Platforms/>
    </div>
  )
}

export default Home