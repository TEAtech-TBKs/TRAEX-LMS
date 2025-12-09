import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import { ClerkLoaded } from '@clerk/clerk-react'
import Loading from '../../components/students/Loading'
import { assets } from '../../assets/assets'
import humanizeDuration from 'humanize-duration'
import Footer from '../../components/students/Footer'
import YouTube from 'react-youtube'

const CourseDetails = () => {
const {id} = useParams()
const [courseData, setCourseData] = useState(null)
const [openSections, setOpenSections] = useState({})
const [isAlreadyEnrolled, setisAlreadyEnrolled] = useState(true)
const [playerData, setplayerData] = useState(null)
// want to add previe functionality

const {allCourses,currency, CalculateRating,calculateChapterTime,
    calculateCourseDuration,
    calculateNoOfLectures} = useContext(AppContext)

  const fetchCourseData =  async () => {
  const findCourse = allCourses.find(course=>  course._id === id)
  setCourseData(findCourse);

  }
    useEffect(()=>{
      fetchCourseData()
    },[allCourses])

    const toggleSection = (index) => {
      setOpenSections((prev) => ({
        ...prev,
        [index]: !prev[index],
      }));
    }

  return courseData ? (
    <>
    <div className='flex md:flex-row flex-col-reverse bg-text/95 gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left '>

       <div className="absolute top-0 left-0 w-full h-section-height -z-1 bg-gradient-to-b from-primary/30"></div>

       {/* left column */}
       <div className='max-w-xl z-10 text-gray-200'>
        <h1 className='md:text-course-details-heading-large text-course-details-heading-small font-semibold text-red-50'>Course Details</h1>
       {courseData.courseTitle}
       <p className='pt-4 md:text-base text-sm'
        dangerouslySetInnerHTML= {{__html: courseData.courseDescription.slice(0,200)}} ></p>
       

        {/* ratings */}
        <div className='flex items-center space-x-2 pt-4 text-sm'>
          <p>{CalculateRating(courseData)}</p>
          <div className='flex'>
            {[...Array(5)].map((_, i)=>(
          <img className='w-3.5 h-3.5' src={i < Math.floor (CalculateRating(courseData)) ? assets.star : assets.star_blank} key={i} alt="" />)
          )}
          </div>
          <p className='text-gray-500'>({courseData.courseRatings.length} {courseData.courseRatings.length > 1 ? "ratings" : 'rating'})</p>
          
          <p>{courseData.enrolledStudents.length}{courseData.enrolledStudents.length > 1 ? "student" : "student"}</p>
        </div>

        <p className='text-sm'>course by <span className='text-blue-600 underline'>Traextech</span></p>
        <div className="pt-8 text-gray-100">
          <h2 className="text-xl font-semibold">Course Structure</h2>
          <div className="pt-5  ">
            {courseData.courseContent.map((chapter, index)=>(
              <div key={index} className='border border-gray-600 bg-slate-700/50 mb-2 bg-text/50 rounded'>
                <div className='flex items-center justify-between px-4 py-3 cursor-pointer select-none  ' onClick={()=> toggleSection(index)}>
                  <div className='flex item-center gap-2'>
                    <img className={`transform transition-transform ${openSections[index] ? 'rotate-180' : ''}`}
                    src={assets.down_arrow_icon} alt="arrow icon" />
                    <p className='font-medium md:text-base text-sm'>{chapter.chapterTitle}</p>
                  </div>
                <p className='text-sm md:text-default'>{chapter.chapterContent.length} lectures - {calculateChapterTime(chapter)}</p>
                </div>
                <div className={`overflow-hidden transition-all duration-300  ${openSections[index] ? 'max-h-96' : 'max-h-0'}`}>
                  <ul className='list-disc md:pl-10 pl-4 pr-4 py-2  border-t border-gray-500'>
                    {chapter.chapterContent.map((lecture, i)=>(
                      <li className='flex items-start gap-2 py-1' key={i}>
                        <img className='w-4 h-4 mt-1' src={assets.play_icon} alt="play" />
                        <div className='flex items-center justify-between w-full text-background/80  text-xs md:text-default'>
                          <p>{lecture.lectureTitle}</p>
                          <div className='flex gap-2'>
                            {lecture.isPreviewFree && <p 
                            onClick= {() => setplayerData({VideoId: lecture.lectureUrl.split('/').pop()})}
                            className='text-blue-500 cursor-pointer'>Preview</p> }
                            <p>{humanizeDuration(lecture.lectureDuration * 60 * 1000,{units: ["h", "m"]})}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='py-20 text-sm md:text-default'>
          <h3 className='text-5xl font-semibold text-background'>Course Description</h3>
          <p className='pt-3 rich-text'
        dangerouslySetInnerHTML= {{__html: courseData.courseDescription}} ></p>
        </div>
</div>

       {/* right column */}
       <div className="max-w-course-card z-10 shadow-custom-card rounded-t md:rounded-none overflow-hidden bg-white min-w-[300px] sm:min-w-[420px]">
        {

            playerData ? 
            <YouTube videoId= {playerData.VideoId} opts={{playerVars: { autoplay: 1}}} iframeClassName='w-full  aspect-video' /> :
            <img src={courseData.courseThumbnail} alt="" />
            
          }
            
        <div className="p-5">
          <div className='flex items-center gap-2'>
            <img className='w-3.5' src={assets.time_left_clock_icon} alt="" />
            <p className="text-red-500"><span className='font-medium'>5 days</span> left at this price!</p>
          </div>
          {/* percent off */}
          <div className='flex-gap-3 items-center pt-2'>
            <p className='text text-gray-800 md:text-4xl text-2xl font-semibold'>{currency}{(courseData.coursePrice - courseData.discount * courseData.coursePrice / 100).toFixed(2)}</p>
            <p className='md:text-lg text-gray-500 line-through'>{currency}{courseData.coursePrice}</p>
            <p className='md:text-lg text-gray-500'> {courseData.discount}% off</p>
          </div>

          {/* rating */}
          <div className="flex items-center text-sm md:text-default gap-4 pt-2 md:pt-4 text-gray-500">
            <div className="flex items-center gap-1">
              <img src={assets.star} alt="icon" />
              <p>{CalculateRating(courseData)}</p>
            </div>

            <div className="h-4 w-px bg-gray-500/40"></div>
            
            <div className="flex items-center gap-1">
              <img src={assets.time_clock_icon} alt="icon" />
              <p> {calculateCourseDuration(courseData)} </p>
            </div>
            
            

            <div className="h-4 w-px bg-gray-500/40"></div>

            <div className="flex items-center gap-1">
              <img src={assets.lesson_icon} alt="icon" />
              <p> {calculateNoOfLectures(courseData)} Lessons </p>
            </div>
            
         
          </div>
            <button className='md:mt-6 mt-4 w-full py-3 rounded bg-blue-600 text-white font-medium'>{isAlreadyEnrolled ? 'Already Enrolled' : 'Enroll Now'}</button>

            <div className="pt-6">
              <p className='md:text-xl text-lg font-medium text-gray-800'>What's in this course?</p>
              <ul className='list-none ml-4 pt-2 text-sm md:text-default text-gray-500'>
                <li className='relative pl-6 before:absolute before:left-0 before:content-["✓"] before:text-green-500 before:font-semibold'>
                  Lifetime access with free course updates
                </li>
                <li className='relative pl-6 before:absolute before:left-0 before:content-["✓"] before:text-green-500 before:font-semibold'>
                  Step-by-step, hands-on project guidance
                </li>
                <li className='relative pl-6 before:absolute before:left-0 before:content-["✓"] before:text-green-500 before:font-semibold'>
                  Downloadable resources and source code
                </li>
                <li className='relative pl-6 before:absolute before:left-0 before:content-["✓"] before:text-green-500 before:font-semibold'>
                  Interactive quizzes to reinforce your learning
                </li>
                <li className='relative pl-6 before:absolute before:left-0 before:content-["✓"] before:text-green-500 before:font-semibold'>
                  Certificate of completion to showcase your skills
                </li>
              </ul>

            </div>
        </div>
       </div>
    </div>
    <Footer/>
    </>
  ) : <Loading/>
}

export default CourseDetails