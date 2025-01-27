import React from 'react'


function Hero() {
  return (
    <div className="min-h-[70vh] md:min-h-[80vh] flex gap-12 flex-col md:flex-row">
      <div className="flex flex-1 justify-center items-start flex-col">
        <h1 className="text-4xl md:text-6xl mt-10 mb-10">Hi, I’m Dinuranga,<br/>a <span className='font-advent-pro'>software developer.</span></h1>
        <button className='btn py-1 md:py-2 px-5 text-lg text-primaryBlue border-2 border-primaryBlue rounded'>Contact me</button>
      </div>
      <div className="flex flex-1 justify-end  md:justify-center items-center relative">
        {/* <div className="profile -mx-4 w-[150px] md:w-[260px] lg:w-[280px] lg:[280px] h-[220px] md:h-[340px] lg:h-[400px]"></div> */}
        <img src="https://i.gifer.com/1VB6.gif" alt="" className="w-full md:w-full lg:w-2/3 lg:[280px] h-2/3"/>
        <div className="hidden lg:flex links flex-col items-center gap-5">
          <div className='lineStyle1
          border-primaryBlue'></div>
          <a href="">
            <img src="img/github.svg" alt="Github" className='w-12'/>
          </a>
          <a href="">
            <img src="img/linkedin.svg" alt="LinkedIn" className='w-12'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
