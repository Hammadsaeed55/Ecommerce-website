import React from 'react'
import Carousel from '../components/Carousel'
import Product from '../pages/Product'
import OurPolicy from '../components/OurPolicy'
import NewLetterBox from '../components/NewLetterBox'

const Home = () => {
  return (
    <div className='w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] '>
      <Carousel/>
      <Product/>
      <OurPolicy/>
      <NewLetterBox/>
    </div>
  )
}

export default Home
