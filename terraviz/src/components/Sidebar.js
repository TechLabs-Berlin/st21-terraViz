import React from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import "./Sidebar.css";

function Sidebar(props) {
  return (
    <>
      <IoIosArrowDropright
        className={props.sidebar ? "nav-open" : "hidden"}
        onClick={props.onToggleSidebar}
      />
      <div className="Sidebar">
        <nav className={props.sidebar ? "nav active" : "nav"}>
          <ul className="nav-items">
            <li className="nav-toggle">
              <IoIosArrowDropleft onClick={props.onToggleSidebar} />
            </li>
            <h1>Terraviz</h1>
            <div className="nav-list">
              <li>Legend</li>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
            </div>
            <div className="nav-list">
              <li>Chart</li>
            </div>
            <div className="nav-list">
              <li>Summary</li>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
