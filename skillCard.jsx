import React from 'react';

function SkillCard({ skillName, image }) {
  return (
    <div className='border-[1px] hover:border-[2px] transistion delay-20 border-solid border-slate-500 w-14 md:w-24 lg:w-[120px] h-14 md:h-24 lg:h-[120px] relative bg-bgSecondary rounded-xl hover:shadow-glow hover:shadow-cyan-500/50'>
        <div className='w-full h-full flex items-center justify-center'>
          <img src={image} alt={skillName} className='w-[40%] h-[40%] mb-2' />
        </div>
      
        <p className="absolute left-1/2 transform -translate-x-1/2 bottom-1 md:bottom-2 text-white text-[.5rem] md:text-[.8rem]">{skillName}</p>
    </div>
  );
}

export default SkillCard;
