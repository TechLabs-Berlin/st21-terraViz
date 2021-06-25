import React, { useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import "./Sidebar.css";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const onToggleSidebar = () => setSidebar(!sidebar);
  return (
 
    <>
    
      <IoIosArrowDropright
        className={sidebar ? "nav-open" : "hidden"}
        onClick={onToggleSidebar}
      />
      <h3 className="mobile-only toMap" onClick={onToggleSidebar}>  ⬅︎  To the Map </h3>
      <div className="Sidebar">
        <nav className={sidebar ? "nav active" : "nav"}>
          <ul className="nav-items">
          <div className="title">
          <h1>TerraViz</h1>
           
            {/* <div className="icon-scroll"></div> */}
          
            <li className="nav-toggle">
              <IoIosArrowDropleft className="mobile-hidden" onClick={onToggleSidebar} />
            </li>
            </div>
       
            <div className="mobile-only scroll">Scroll Down ⬇︎ </div>
            <div className="nav-list">
              <li>Story</li>
              <span>Where is our project grounded?</span>
              <p>
              Climate change is THE largest problem of humanity.
              Making the future of our planet tangible is one of the psychological barriers that have made climate change into an elusive problem.  
              </p>
            </div>
            <div className="nav-list">
              <li>Our product</li>
              <span>What we built</span>
              <p>
              We visualize the impact climate change has on our planet with a web-application that makes planet data easily accessible and visually attractive for users.
              </p>
            </div>
            <div className="nav-list">
              <li>How To</li>
              <span>How the app works</span>
              <p>
              We visualize the impact climate change has on our planet with a web-application that makes planet data easily accessible and visually attractive for users.
              </p>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
