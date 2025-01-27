import React from 'react'
import '../App.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from './Skills'import About from './About'
import Footer from './Footer'
import Gradient from '../components/Gradient'

function Home() {
  return (
    <div className='px-10 lg:px-[100px] bg-bgPrimary text-white scroll-smooth overflow-x-hidden'>
        <div className="max-w-[1150px] m-auto pt-[50px] relative z-20">
          <Header/>
          <Hero/>
        </div>
        <Gradient styleId={0}/>
        <Gradient styleId={1}/>
        <div className="lineStyle2 border-primaryBlue"></div>
        <div className="relative z-30">
          <About/>
        </div>
        <Gradient styleId={2}/>
        <div className="lineStyle3 border-primaryBlue"></div>
        <div className="relative z-20">
          <Skills/>
        </div>
        <div className="lineStyle2 border-primaryBlue z-20"></div>
        <Footer/>
      </div>

  )
}

export default Home
