import React from 'react'
import Banner from './banner/banner'
import Footer from './footer/footer'
import About from './about/about'
import Platforms from './platforms/platforms'

const Home = () => {
  return (
    <div>
      <Banner/>
      <About/>
      <Platforms/>
    </div>
  )
}

export default Home