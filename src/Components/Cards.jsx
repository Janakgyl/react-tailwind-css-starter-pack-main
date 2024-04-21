import React, { useState } from "react";
import Card from "./Card";

function Cards(props) {
  const courses = props.courses;
  const category = props.category;
  console.log(category)
 const [likedCourses, setLikedCourses] = useState([]);

  function getCourses() {
    const allCourses = [];
    if(category === "All")
    {
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course)=>{
          allCourses.push(course);
        })
      });
      return allCourses;
    }
    else{
      return props.courses[category];
    }
    
  }

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
          getCourses().map((course)=>{
           return <Card course={course} key={course.id} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
          })
        }
      </div>

     
    </>
  );
}

export default Cards;
