import Course from "./Course";
import useFetch from "./useFetch";
// import { useState, useEffect } from "react";

function CourseList() {
  const [courses, dummy, error, setDummy, setCourses] = useFetch(
    "http://localhost:3000/courses"
  );

  if (!courses) {
    return (
      <>
        {!error && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </>
    );
  }

  function handleDelete(id) {
    const newCourses = courses.filter((course) => course.id !== id);
    setCourses(newCourses);
  }

  return (
    <>
      {courses.map((course) => (
        <Course
          key={course.id}
          {...course}
          delete={handleDelete}
        />
      ))}

      <button onClick={() => setDummy(false)}>Dummy Bawa</button>
    </>
  );
}

export default CourseList;


// npx json-server --watch data/dummyData.json --port 3000 --static ./data





