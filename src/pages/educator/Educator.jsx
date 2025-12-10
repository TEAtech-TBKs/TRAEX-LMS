import React from 'react'
import { Outlet } from 'react-router-dom'

const Educator = () => {
  return (
    <div className='flex flex-row justify-center border w-full items-center text-center text-primary'>
  <div className="edupage">
    <h1>Instructors Page</h1>
    <div>
      <Outlet />
    </div>

    <div className="underconst flex fixed left-8 bottom-1/2 w-full">
      <h1 className='text-gray-300 bg-violet-50 border-4 py-3 px-5 font-semibold mx-auto my-auto rounded text-5xl'>
          Work in progress... <br /> This page is still being developed
      </h1>
    </div>
  </div>
</div>

  )
}

export default Educator