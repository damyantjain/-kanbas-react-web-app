import { FaBan, FaBell, FaCalendarCheck, FaCaretRight, FaChartBar, FaCheckCircle, FaCrosshairs, FaEllipsisH, FaEllipsisV, FaFileImport, FaNewspaper, FaPlus } from "react-icons/fa";
import ModuleList from "./List";
import { moduleCalendar } from "../../Database";
import Calender from "./Calendar";
import { Link } from "react-router-dom";
function Modules() {
  return (
    <div className="row">
      <div className="col">
        <div className="flex-fill">
          <div className="d-flex justify-content-end gap-1 ">

            <Link to={"#"} className="btn btn-secondary btn-sm wd-button">

              Collapse All</Link>

              <Link to={"#"} className="btn btn-secondary btn-sm wd-button" role="button">

              View Progress</Link>

            <div className="dropdown">
            <Link to={"#"}  className="btn btn-secondary btn-sm dropdown-toggle wd-button" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown">
                <i className="fa fa-check-circle-o" style={{ color: "green" }}></i>
                Publish All</Link>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><Link to={"#"}  className="dropdown-item" >None</Link></li>
              </ul>
            </div>

            <Link to={"#"}  className="btn btn-danger btn-sm"  role="button">
              <FaPlus />
              Modules</Link>

              <Link to={"#"}  className="btn btn-secondary btn-sm wd-button" role="button">
              <FaEllipsisV />

            </Link>
          </div>
          <hr />
          <ModuleList />
        </div>
      </div>

      <div className="col-auto">
        <div
          className="flex-grow-0 me-2 d-none d-lg-block"
          style={{ width: "250px" }}
        >
          <h5>Course Status</h5>
          <div style={{ marginLeft: "4px" }}>
            <button type="button">
              <FaBan style={{ color: "gray" }} /> Unpublished
            </button>
            <button style={{marginLeft: "4px"}} type="button" className="btn-green">
              <FaCheckCircle />
              Published
            </button>
          </div>
          <div>
            <ul className="list-group wd-course-status">
              <li><Link to={"#"}><FaFileImport /> Import Existing Content</Link></li>
              <li><Link to={"#"}><FaCaretRight /> Import from Commons</Link></li>
              <li><Link to={"#"}><FaCrosshairs />  Choose Home Page</Link></li>
              <li><Link to={"#"}><FaChartBar /> View Course Stream</Link></li>
              <li><Link to={"#"}><FaNewspaper /> Announcement</Link></li>
              <li><Link to={"#"}><FaChartBar /> New Analytics</Link></li>
              <li><Link to={"#"}><FaBell /> View Course Notification</Link></li>
            </ul>
          </div>

          <h5 className="wd-to-do"><strong>To Do </strong> </h5>
          <hr />
          <ul className="list-group">
            <li className="d-flex justify-content-between align-items-start">
              <div>
                <div><Link to={"#"} className="wd-coming-up-color-red " style={{ textDecoration: "none" }}>
                  <i className="fa fa-info-circle wd-coming-up-color-red pe-2"></i>  A1 - ENV + HTML</Link></div>
                <div className="wd-fg-color-gray"> 100 points - Sept 18 at 11:59pm</div>
              </div>
              <i className="fa fa-times wd-fg-color-gray"></i>
            </li>
          </ul>
          <Calender />
        </div>
      </div>
    </div>
  );
}
export default Modules;