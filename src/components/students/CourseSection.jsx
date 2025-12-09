import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CourseCard from './CourseCard';
import { AppContext } from '../../context/AppContext';

const Coursesection = () => {

const {allCourses} = useContext(AppContext);

// Safely handle undefined or empty state
  if (!allCourses || allCourses.length === 0) {
    return (
      <div className="py-16 md:px-41 px-6 text-center">
        <h2 className="text-3xl font-medium text-gray-800">Learn from the best</h2>
        <p className="text-sm md:text-base text-gray-500 mt-3">
          Discover our top-rated courses across various categories. From coding and design to business and wellness, our courses are crafted to deliver results.
        </p>
        <p className="text-gray-400 mt-6">Loading courses...</p>
      </div>
    );
  }

  return (
    <div className='py-16 md:px-41 px-6'> 
      <h2 className='text-3xl font-medium text-gray-800'>Learn from the best</h2>
      <p className='text-sm md:text-base text-gray-500 mt-3'>Discover our top-rated courses across various categories. From coding  and design to business and wellness, our courses are crafted to deliver results</p>

      <div className='grid grid-cols-auto px-4 md:px-0 md:my-16 my-10 gap-4'>
        {allCourses.slice(0,4).map((course,index)=> <CourseCard key={index} course={course}/>)}
      </div>
      <Link to={"/course-list"} onClick={()=> scrollTo(0,0)} className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded'>Show all courses</Link>
     
    </div>
  )
}

export default Coursesection