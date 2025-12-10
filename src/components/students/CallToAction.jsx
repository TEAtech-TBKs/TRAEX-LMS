import React from 'react'
import { assets } from '../../assets/assets'

const CallToAction = () => {
  return (
    <div className='sticky flex flex-col bg-accent w-full rounded items-center gap-4 pt-10 pb-24 py-20 px-10 md:px-5'>
  <h1 className='text-4xl md:text-4xl text-text font-semibold text-left'>
    Master Web Development at Your Own Pace
  </h1>

  <p className='text-background sm:text-xl text-text/70 text-center md:max-w-xl'>
    Access expertly crafted courses, hands-on projects, and real-world exercises designed to take you from beginner to professional web developer. Learn anytime, anywhere, and join a community that supports your growth.
  </p>

  <div className='flex items-center font-medium gap-6 mt-6'>
    <button className='bg-primary text-background px-10 py-3 rounded-md hover:bg-primary/80 transition-colors'>
      Start Learning
    </button>
    <button className='flex items-center gap-2 text-primary hover:text-primary/80 transition-colors'>
      Explore Courses <img src={assets.arrow_icon} alt="Explore courses" />
    </button>
  </div>
</div>

  )
}

export default CallToAction