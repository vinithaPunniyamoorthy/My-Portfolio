import React from 'react'

function About() {
  return (
    <div id="about" className='py-[60px] flex flex-col items-center relative z-31'>
      <h1 className='text-4xl text-center mb-12 '>ABOUT ME</h1>
      <div className='pt-[30px] flex flex-col md:justify-center md:flex-row w-full'>
        <div className='p-5 flex justify-center items-center'>
          <div className='w-[220px] md:w-[250px]  h-[280px] md:h-[350px] profile'></div>
        </div>
        <div className='flex items-center md:px-5 py-5'>
          <div className="w-full md:w-[300px] lg:w-[500px] flex flex-col px-6 py-12 bg-bgSecondary text-sm rounded-xl gap-3">
            <p className='text-justify md:text-md md:text-[1rem] md:leading-6'>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. </p>
            <p className='italic'>Please refer enclosed cv for further details.</p>
            <button className='px-4 w-44 py-1 border-2 border-primaryBlue text-primaryBlue'>Download CV</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
