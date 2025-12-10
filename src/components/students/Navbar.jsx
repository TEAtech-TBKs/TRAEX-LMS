import React, { useContext } from 'react'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { AppContext } from '../../context/AppContext'

const Navbar = () => {
  const {navigate, isEducator} = useContext(AppContext);

  const isCourseListPage = location.pathname.includes('/course-list');

  const { openSignIn} = useClerk();
  const { user } = useUser();

  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-20 border-b border-gray-500/50 py-4 ${isCourseListPage ? 'bg-primary/20 w-full border-none ' : 'bg-secondary/70'}`}>
      <img onClick={()=>navigate('/')} src={assets.logo} alt="logo" className='w-30 lg:w-50 cursor-pointer' />
      <div className='hidden md:flex item-center gap-5 text-background'>
        <div className='flex items-center gap-5'>
          {user && 
          <> 
              <button className=' bg-red-50  text-primary rounded py-2 px-3' onClick={()=> {navigate('/educator')}}> {isEducator ? 'Educator Dashboard' : 'Become Educator'} </button>
         <Link className=' text-red-50  bg-primary rounded py-2 px-3' to='/my-enrollment'>My Enrollments</Link>
          </>
           }
          </div>
          {user ? <UserButton  appearance={{
    elements: {
      userButtonAvatarBox: "w-10 h-10",   
      userButtonPopoverCard: "shadow-lg", 
      userButtonTrigger: "rounded-full border border-gray-300" 
    }
  }}/> :
            <button onClick={()=>openSignIn()} className='bg-blue-700 text-gray-50 px-5 py-2 rounded' >Login / signup</button>}
      </div>

        {/* For phone screens */}
      <div className='md:hidden flex items-center gap-4 sm:gap-5 '>
        <div className='flex items-center gap-2 sm:gap-2 max-sm:text-xs'>
          {user &&
          <>
            <button className=' bg-red-50  text-primary rounded text-sm py-1 px-2' onClick={()=> {navigate('/educator')}}> {isEducator ? 'Educator Dashboard' : 'Become Educator'} </button>
           <Link className=' bg-primary/70 text-red-50 rounded text-sm py-1 px-2' to='/my-enrollment'>My Enrollments</Link> 
          </>
          }
        </div>
        {
          user ? <UserButton  appearance={{
    elements: {
      userButtonAvatarBox: "w-10 h-10",  
      userButtonPopoverCard: "shadow-lg",
      userButtonTrigger: "rounded-full border border-gray-300" 
    }
  }}/> :
        <button  onClick={()=>openSignIn()}><img src={assets.user_icon} alt="" /></button>
        }
      </div>
    </div>
  )
}

export default Navbar