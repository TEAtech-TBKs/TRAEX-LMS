import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';

const CourseCard = ({course}) => {

  const {currency, CalculateRating} = useContext(AppContext)  

  return (
    
    <Link to={'/course/' + course._id}
     onClick={()=> scrollTo(0,0)} className='border border-grey-500 pb-6 overflow-hidden rounded-lg'>
        <img className='w-full rounded' src={course.courseThumbnail} alt="" />
        <div className='p-3 text-left'>
          <h3 className='text-base font-semibold'>{course.courseTitle}</h3>
          <p className='text-gray-500'>TraexTech</p>
          <div className='flex items-center space-x-2'>
            <p>{CalculateRating(course)}</p>
            <div className='flex'>
              {[...Array(5)].map((_, i)=>(
            <img className='w-3.5 h-3.5' src={i < Math.floor (CalculateRating(course)) ? assets.star : assets.star_blank} key={i} alt="" />)
            )}
            </div>
            <p className='text-gray-500'>{course.courseRatings.length}</p>
          </div>
          <p className='text-base font-semibold text-gray-800'>{currency}{(course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2)}</p>
        </div>
    </Link>
  )
}

export default CourseCard