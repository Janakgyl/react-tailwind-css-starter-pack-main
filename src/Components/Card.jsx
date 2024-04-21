import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card(props) {
  const courseData = props.course;

  function likeHandler() {
    if (props.likedCourses.includes(props.course.id)) {
      props.setLikedCourses((prev) =>
        prev.filter((cid) => cid !== props.course.id)
      );
      toast.warning("Like removed");
    } else {
      if (props.likedCourses.length === 0) {
        props.setLikedCourses([props.course.id]);
      } else {
        props.setLikedCourses((prev) =>[...prev, props.course.id])
      }
      toast.success("Liked Succesfully");
    }
  }

  return (
    <div className="bg-bgDark bg-opacity-80 w-[300px] rounded-md overflow-hidden">
      <div className="relative">
        <img src={courseData.image.url} alt={courseData.image.alt} />

        <div className="h-[40px] w-[40px] rounded-full bg-white absolute right-2 bottom-[-12px] grid place-items-center">
          <button onClick={likeHandler}>{
            !props.likedCourses.includes(props.course.id) ? 
            <FcLikePlaceholder fontSize="1.75rem" /> :
            <FcLike fontSize="1.75rem" />
            }</button>
        </div>
      </div>

      <div className="p-4">
        <p>{courseData.title}</p>
        <p className="mt-2">
          {courseData.description.length > 100
            ? courseData.description.substring(0, 100) + "..."
            : courseData.description}
        </p>
      </div>
    </div>
  );
}

export default Card;
