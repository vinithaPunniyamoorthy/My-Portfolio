import React from 'react'
import SkillCard from '../components/skillCard';

const skills = [
    {"name":"HTML", image:"html.svg"},
    {"name":"CSS", image:"css.svg"},
    {"name":"JavaScript", image:"js.svg"},
    {"name":"Pyhton", image:"python.svg"},
    {"name":"Java", image:"java.svg"},
    {"name":"Node.js", image:"nodejs.svg"},
    {"name":"PHP", image:"php.svg"},
    {"name":"React", image:"reactjs.svg"},
    {"name":"MongoDB", image:"mongodb.svg"},
    {"name":"Git+GutHub", image:"git.svg"},
];

function Skills() {
  return (
    <div id="skills" className='py-[60px] flex flex-col items-center'>
      <h1 className='text-4xl text-center mb-12 '>MY SKILLS</h1>
      <div className='w-full flex justify-center'>
        <div className='grid grid-cols-5 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-4'>
          {skills.map(item => (
            <SkillCard key={item.name} skillName={item.name} image={"img/" + item.image} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
