import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-text md:px-36 text-left w-full'>
  <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30'>
    
    {/* Logo & Description */}
    <div className='flex flex-col md:items-start items-center w-full'>
      <img src={assets.logo_dark} alt="logo" />
      <p className='mt-6 text-center md:text-left text-sm text-background/80'>
        Learn web development with expert-led courses, interactive content, and a community that supports your growth.
      </p>
    </div>

    {/* Company Links */}
    <div className='flex flex-col md:items-start items-center w-full text-background/80'>
      <h2 className='font-semibold text-accent mb-5'>Company</h2>
      <ul className='flex md:flex-col w-full justify-between text-sm md:space-y-2'>
        <li><a href="#" className='hover:text-primary transition-colors'>Home</a></li>
        <li><a href="#" className='hover:text-primary transition-colors'>About us</a></li>
        <li><a href="#" className='hover:text-primary transition-colors'>Contact us</a></li>
        <li><a href="#" className='hover:text-primary transition-colors'>Privacy Policy</a></li>
      </ul>
    </div>

    {/* Newsletter */}
    <div className='hidden md:flex flex-col items-start w-full'>
      <h2 className='font-semibold text-accent mb-5'>Subscribe to newsletter</h2>
      <p className="text-sm text-background/80">
        Get the latest web development news, articles, and resources delivered to your inbox weekly.
      </p>
      <div className='flex items-center gap-2 pt-4'>
        <input
          className='border border-gray-500/50 bg-background text-text placeholder-text/50 outline-none w-64 h-9 rounded px-2 text-sm'
          type="email"
          placeholder='Enter your email'
        />
        <button className='bg-primary w-24 h-9 text-background rounded hover:bg-primary/80 transition-colors'>
          Subscribe
        </button>
      </div>
    </div>

  </div>

  <p className='text-background/60 text-center py-4 text-xs md:text-sm'>
    Copyright 2025 © Traextech. All Rights Reserved
  </p>
</footer>

  )
}

export default Footer