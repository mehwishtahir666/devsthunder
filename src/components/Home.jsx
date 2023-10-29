import React from 'react'
import Header from './header/header'
import { BsAlignCenter } from 'react-icons/bs'
import Banner from './banner/banner'
import Engangment from './engangment/engangment'

const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Engangment/>
    </div>
  )
}

export default Home