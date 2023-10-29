import React from 'react'
import Header from './header/header'
import Banner from './banner/banner'
import Footer from './footer/footer'
import Engangment from './engangment/engangment'
import About from './about/about'
import Platforms from './platforms/platforms'

const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <About/>
      <Platforms/>
      <Footer/>
    </div>
  )
}

export default Home