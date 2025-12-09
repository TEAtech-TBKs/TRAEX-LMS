import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";
// import { Rating } from "react-simple-star-rating";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY; // corrected spelling
  const navigate = useNavigate();

  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setisEducator] = useState(true);
  const [EnrolledCourses, setEnrolledCourses] = useState([]);

  // Fetch all courses
  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };

  //function to calculat5e avaerage rating of courses
  const CalculateRating = (course)=>{
    if(course.courseRatings.length === 0) {
        return 0;
    }
    let totalRating = 0 
    course.courseRatings.forEach(rating =>{
      totalRating += rating.rating;
    })
    return totalRating / course.courseRatings.length;
  }

  const calculateChapterTime = (chapter) => {
    let time  = 0;
    chapter.chapterContent.map((lecture)=> time += lecture.lectureDuration)
    return humanizeDuration(time * 60 * 1000, { unit: ["h", "m"]});
  }
  const calculateCourseDuration = (course) => {
    let time = 0;
    course.courseContent.map((chapter) => chapter.chapterContent.map(
      (lecture) => time += lecture.lectureDuration
  ))
  return humanizeDuration(time * 60 * 1000, { unit: ["h", "m"]});

}

// calc to no of lectures in the course
const calculateNoOfLectures = (course)=>{
  let totalLectures = 0;
  course.courseContent.forEach(chapter => {
    totalLectures += chapter.chapterContent.length;
  
  })
  return totalLectures;
}

//user enrollment functions can be added here
  const fetchUserEnrolledCourses = async () => {
setEnrolledCourses(dummyCourses);
  }

  useEffect(() => {
    fetchAllCourses()
    fetchUserEnrolledCourses()
  }, []);

  const value = {
    currency,
    allCourses,
    navigate,
    CalculateRating,
    isEducator,
    setisEducator,
    calculateChapterTime,
    calculateCourseDuration,
    calculateNoOfLectures,
    EnrolledCourses,
    fetchUserEnrolledCourses
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
