import React from 'react'
import Banner from './banner/banner'
import Platforms from './platforms/platforms'
import Results from './results/results'
import Services2 from "./services2/services2"
import Engangment from "./engangment/Engangment"
import Spliter from './spliter/spliter'
import Form from "./form/form"
import Faqs from './faqs/faqs'
import Newsletter from './newsletter/newsletter'
import Industries from './industries/industries'


const Home = () => {
  return (
    <div>
      <Banner/>
      <Engangment/>
      <Industries/>
      <Services2/>
      <Newsletter/>
      <Platforms/>
      <Faqs/>
      <Form/>
    </div>
  )
}

export default Home