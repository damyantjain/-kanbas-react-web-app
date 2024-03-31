import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import NavBar from "./NavBar";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaBars, FaChevronDown } from "react-icons/fa";

const API_BASE = process.env.REACT_APP_API_BASE;

function Courses() {
  const { courseId } = useParams();
  const COURSES_API = `${API_BASE}/api/courses`;
  const [course, setCourse] = useState<any>({ _id: "" });
  const findCourseById = async (courseId?: string) => {
    const response = await axios.get(
      `${COURSES_API}/${courseId}`
    );
    setCourse(response.data);
  };

  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  return (
    <div className="mx-3 my-3">
      <div className="row">
        <NavBar />
      </div>
      <hr></hr>
      <div className="row">
        <div className="col-auto">
          <CourseNavigation />
        </div>


        <div className="col">
          <div>
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Piazza" element={<h1>Piazza</h1>} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/Editor" element={<AssignmentEditor />} />
              <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
              <Route path="Grades" element={<Grades />} />
            </Routes>
          </div>
        </div>
      </div>

    </div>
  );
}
export default Courses;