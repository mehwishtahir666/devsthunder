import React from 'react'
import Banner from './banner/banner'
import Platforms from './platforms/platforms'
import Services2 from "./services2/services2"
import Engangment from "./engangment/Engangment"
import Form from "./form/form"
import Faqs from './faqs/faqs'
import Newsletter from './newsletter/newsletter'
import Industries from './industries/industries'
import Nextstory from './nextstory/nextstory'
import Reviews from './reviews/reviews'


const Home = () => {
  return (
    <div>
      <Banner/>
      <Industries/>
      <Engangment/>
      <Services2/>
      <Newsletter/>
      <Platforms/>
      <Reviews/>
      <Nextstory/>
      <Faqs/>
      <Form/>
    </div>
  )
}

export default Home