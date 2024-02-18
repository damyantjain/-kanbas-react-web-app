import { FaBan, FaBell, FaCalendarCheck, FaCaretRight, FaChartBar, FaCheckCircle, FaCrosshairs, FaEllipsisH, FaEllipsisV, FaFileImport, FaNewspaper, FaPlus } from "react-icons/fa";
import ModuleList from "./List";
import { moduleCalendar } from "../../Database";
import Calender from "./Calendar";
function Modules() {
  return (
    <div className="row">
      <div className="col">
        <div className="flex-fill">
          <div className="d-flex justify-content-end gap-1 ">

            <a className="btn btn-secondary btn-sm wd-button" href="#" role="button">

              Collapse All</a>

            <a className="btn btn-secondary btn-sm wd-button" href="#" role="button">

              View Progress</a>

            <div className="dropdown">
              <a className="btn btn-secondary btn-sm dropdown-toggle wd-button" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown">
                <i className="fa fa-check-circle-o" style={{ color: "green" }}></i>
                Publish All</a>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a className="dropdown-item" href="#">None</a></li>
              </ul>
            </div>

            <a className="btn btn-danger btn-sm" href="#" role="button">
              <FaPlus />
              Modules</a>

            <a className="btn btn-secondary btn-sm wd-button" href="#" role="button">
              <FaEllipsisV />

            </a>
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
              <li><a href="#"><FaFileImport /> Import Existing Content</a></li>
              <li><a href="#"><FaCaretRight /> Import from Commons</a></li>
              <li><a href="#"><FaCrosshairs />  Choose Home Page</a></li>
              <li><a href="#"><FaChartBar /> View Course Stream</a></li>
              <li><a href="#"><FaNewspaper /> Announcement</a></li>
              <li><a href="#"><FaChartBar /> New Analytics</a></li>
              <li><a href="#"><FaBell /> View Course Notification</a></li>
            </ul>
          </div>

          <h5 className="wd-to-do"><strong>To Do </strong> </h5>
          <hr />
          <ul className="list-group">
            <li className="d-flex justify-content-between align-items-start">
              <div>
                <div><a href="#" className="wd-coming-up-color-red " style={{ textDecoration: "none" }}>
                  <i className="fa fa-info-circle wd-coming-up-color-red pe-2"></i>  A1 - ENV + HTML</a></div>
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