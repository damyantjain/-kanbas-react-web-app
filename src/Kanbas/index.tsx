import { Link, Navigate, Route, Routes } from "react-router-dom";
import Nav from "../Nav";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import store from "./store";
import { Provider } from "react-redux";
import { courses } from "./Database";
import { useState, useEffect } from "react";
import axios from "axios";

function Kanbas() {
  const [courseList, setCourses] = useState<any[]>([]);
  const COURSES_API = "http://localhost:4000/api/courses";

  const [course, setCourse] = useState({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "webdev.jpg",
    description: "New Description",
  });
  const addNewCourse = async () => {
    const response = await axios.post(COURSES_API, course);
    setCourses([...courseList, response.data]);
  };

  const findAllCourses = async () => {
    const response = await axios.get(COURSES_API);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const deleteCourse = async (courseId: string) => {
    const response = await axios.delete(`${COURSES_API}/${courseId}`);
    setCourses(courseList.filter((course) => course._id !== courseId));
  };
  const updateCourse = async () => {
    const response = await axios.put(
      `${COURSES_API}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
  };

  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route
              path="Dashboard"
              element={
                <Dashboard
                  courses={courseList}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              }
            />
            <Route
              path="Courses/:courseId/*"
              element={<Courses />}
            />{" "}
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
