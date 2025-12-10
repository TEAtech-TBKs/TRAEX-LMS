import React from 'react'
import OurCompanies from '../../images/TRAEXNAME.png'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className='flex md:flex-row flex-col-reverse items-center justify-center w-full md:pt-36 pt-20 px-7 py- md:py-8 md:px-0 space-y-7 text-center bg-gradient-to-b from-secondary/70'>
    <div className="cta text-left md:w-1/2 w-full">
      <h1 className='md:text-home-heading-large text-home-heading-small relative hero-base-text-big py-4 text-text max-w-3xl mx-auto'>
        Build your web development skills with courses designed to <span className='text-primary'>match your learning goals</span>
      </h1>
      
      <p className="md:block hidden text-gray-500 max-w-2xl my-3">
        Learn from expert web developers, get hands-on experience, and join a community that supports your growth as a <span className='font-semibold '>Proficient Web developer</span>.
      </p>
      
      <p className="md:hidden text-gray-500 max-w-sm my-2">
        Learn from expert web developers and join a community that supports your growth as a <span className='font-semibold '>Proficient Web developer</span>.
      </p>
    </div>
    <img className=' w-128 h-64 rounded mt-1' src={OurCompanies} alt="Powering The Next Digital Wave" />

      {/* <SearchBar/> */}
    </div>
  )
}

export default Hero