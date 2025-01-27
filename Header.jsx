import React from 'react'

const Header = () => {
    return(
        <div className='flex px-5 py-2 rounded-[8px] justify-between items-center bg-[#171717]'>
            <a href="#">
                <img src="img/logo.svg" alt="Logo" className='w-8'/>
            </a>
            <nav className='hidden md:flex gap-12 text-xl'>
                <a href="">Projects</a>
                <a href="#about">About Me</a>
                <a href="#skill">Contact</a>
            </nav>
            <button className='h-10 bg-primaryBlue hover:bg-blue-400 text-white font-bold py-2 px-4 rounded text-slate-800'>Say Hi.</button>
        </div>
    )
}
export default Header;
