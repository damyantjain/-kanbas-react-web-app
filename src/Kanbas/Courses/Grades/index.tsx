import { FaCaretLeft, FaCaretSquareDown, FaCaretSquareLeft, FaCaretSquareRight, FaCog, FaFilter } from "react-icons/fa";
import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);

  return (
    <div className="col">
      <div className="row">
        <div className="float-end me-5">
          <div className="wd-button float-end">
            <a className="btn btn-secondary btn-sm" href="#" role="button">
              <FaCog />
            </a>
          </div>

          <div className="wd-button float-end">
            <a className="btn btn-secondary btn-sm" href="#" role="button">
              <FaCaretSquareLeft className="me-1" />
              Export</a>
          </div>

          <div className="wd-button float-end">
            <a className="btn btn-secondary btn-sm" href="#" role="button">
              <FaCaretSquareRight className="me-1" />
              Import</a>
          </div>
        </div>
      </div>

      <div className="row mt-1">
        <div className="col">
          <label className="fw-bold" style={{ width: "100%" }}>
            Student Names
            <input className="form-control mt-2" id="studname" placeholder="Search Students" />
          </label>
        </div>
        <div className="col">
          <label className="fw-bold" style={{ width: "100%" }}>
            Assignment Names
            <input className="form-control mt-2" id="assignname" placeholder="Search Assignments" />
          </label>
        </div>
      </div>

      <div className="row">
        <div className="float-end mt-3">
          <a className="btn btn-secondary btn-sm" href="#" role="button">
            <FaFilter className="me-1" />
            Apply Filter</a>
        </div>
      </div>

      <div className="row mt-4 ms-2 me-4 pe-5">
        <table className="table table-striped table-responsive table-bordered">
          <thead>
            <tr>
              <th>Student Name</th>
              {as.map((assignment) => (<th>{assignment.title}</th>))}
            </tr>
          </thead>
          <tbody>
            {es.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user)
              return (
                <tr>
                  <th scope="row" style={{ color: "red" }}>{user?.firstName} {user?.lastName}</th>
                  {as.map((assignment) => {
                    const grade = grades.find((grade) =>
                      grade.student === enrollment.user && grade.assignment === assignment._id)
                    return (
                      <td>{grade?.grade || ""}</td>
                    );
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>);
}
export default Grades;
