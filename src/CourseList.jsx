import Course from "./Course";
import { useState, useEffect } from "react";

function CourseList() {
  const [courses, setCourses] = useState(null);

  const [dummy, setDummy] = useState(true);

  useEffect(() => {
    // console.log('useEffect called');
    // console.log(dummy);

    // fetch('https://jsonplaceholder.typicode.com/posts')
    fetch("http://localhost:3000/courses")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setCourses(data);
      });
  }, [dummy]);

  function handleDelete(id) {
    console.log(id);
    const newCourses = courses.filter((course) => course.id != id);
    setCourses(newCourses);
  }

  // courses.sort((x, y) => y.price - x.price);

//   courses.sort((x, y) => y.rating - x.rating);

  // const vfmCourses = courses.filter((course)=>course.price < 500);

  if(!courses){
    return <></>
  }

  const coursesList = courses.map(
    // const coursesList = vfmCourses.map(
    (course) => (
      <Course
        key={course.id}
        name={course.name}
        image={course.image}
        price={course.price}
        rating={course.rating}
        delete={handleDelete}
        id={course.id}
      />
    )
  );
  return (
    <>
      {coursesList}
      <button
        onClick={() => {
          setDummy(false);
        }}
      >
        Dummy Bawa
      </button>
    </>
  );
}

export default CourseList;

// npx json-server --watch data/dummyData.json --port 3000 --static ./data
