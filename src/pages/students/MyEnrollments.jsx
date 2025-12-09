import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { Line } from 'rc-progress'
import Footer from '../../components/students/Footer'

const MyEnrollments = () => {

  const {EnrolledCourses, calculateCourseDuration,navigate} = useContext(AppContext)
  const [progressArray, setProgressArray] = useState([
    {lectureCompleted: 2, totalLectures: 4},
    {lectureCompleted: 1, totalLectures: 5},
    {lectureCompleted: 3, totalLectures: 6},
    {lectureCompleted: 4, totalLectures: 4},
    {lectureCompleted: 0, totalLectures: 3},
    {lectureCompleted: 5, totalLectures: 7},
    {lectureCompleted: 6, totalLectures: 8},
    {lectureCompleted: 2, totalLectures: 6},
    {lectureCompleted: 4, totalLectures: 10},
    {lectureCompleted: 3, totalLectures: 5},
    {lectureCompleted: 7, totalLectures: 7},
    {lectureCompleted: 1, totalLectures: 4},
    {lectureCompleted: 2, totalLectures: 4},
    
 ]);

  return (
    <>
     <div className='md:px-36 px-8 pt-10 bg-background text-text'> 
  <h1 className='text-2xl font-semibold mb-6'>My Enrollments</h1>

  <table className='md:table-auto table-fixed w-full overflow-hidden border mt-10 border-gray-300'>
    <thead className='text-text border-b border-gray-300 text-sm text-left max-sm:hidden'>
      <tr>
        <th className='px-4 py-3 font-semibold truncate'>Course</th>
        <th className='px-4 py-3 font-semibold truncate'>Duration</th>
        <th className='px-4 py-3 font-semibold truncate'>Completed</th>
        <th className='px-4 py-3 font-semibold truncate'>Status</th>
      </tr>
    </thead>

    <tbody className='text-text'>
      {EnrolledCourses.map((course, index) => (
        <tr key={index} className='border-b border-gray-300/20'>
          <td className='md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3'>
            <img className='w-14 sm:w-24 md:w-28' src={course.courseThumbnail} alt="" />
            <div className='flex-1'>
              <p className='mb-1 max-sm:text-sm'>{course.courseTitle}</p>
              <Line
                strokeWidth={2}
                strokeColor={
    progressArray[index]
      ? (() => {
          const percent = (progressArray[index].lectureCompleted * 100) / progressArray[index].totalLectures;
          if (percent === 100) return '#00C800'; // green
          if (percent < 25) return '#fb0505d0'; // red
          if (percent < 50) return '#FCDD4A'; // yellow
          return '#050DFB'; // blue
        })()
      : '#050DFB'
  }
                percent={progressArray[index] ? (progressArray[index].lectureCompleted * 100) / progressArray[index].totalLectures : 0}
                className='bg-gray-200 rounded-full'
              />
            </div>
          </td>

          <td className='px-4 py-3 max-sm:hidden'>
            {calculateCourseDuration(course)}
          </td>

          <td className='px-4 py-3 max-sm:hidden'>
            {progressArray[index] && `${progressArray[index].lectureCompleted} / ${progressArray[index].totalLectures}`} <span>Lectures</span>
          </td>

          <td className='px-4 py-3 max-sm:text-right'>
            <button
              onClick={() => navigate('/player/' + course._id)}
              className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded max-sm:text-xs text-background ${
                progressArray[index] && progressArray[index].lectureCompleted / progressArray[index].totalLectures === 1
                  ? 'bg-green-600'
                  : 'bg-primary'
              }`}
            >
              {progressArray[index] && progressArray[index].lectureCompleted / progressArray[index].totalLectures === 1 ? 'Completed' : 'Ongoing'}
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      <Footer/>
    </>
  )
}

export default MyEnrollments