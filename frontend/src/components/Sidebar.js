import React, { useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import "./Sidebar.css";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const onToggleSidebar = () => setSidebar(!sidebar);
  
  return (
    <>
     
      <div className={sidebar ? "nav-open" : "hidden"}>
       <IoIosArrowDropright className="nav-toggle" onClick={onToggleSidebar}  />
       <span>Story</span>
      </div>
       
        <div className={sidebar ? "nav-close" : "nav"}>
          <div className="nav-container">
         
            {/* To the map toggle icon (mobile) */}
            <div className="toMap mobile-only">
              <IoIosArrowDropleft className="nav-toggle" onClick={onToggleSidebar} />
              <span>Map</span>
            </div>

            <div className="title">
              <h1>TerraViz</h1>
              <IoIosArrowDropleft className="mobile-hidden nav-toggle" onClick={onToggleSidebar} />
            </div>
         
            <section className="nav-list">
              <h2>The problem</h2>
              <span>Where is our project grounded?</span>
              <p>
              Climate change is THE largest problem of humanity.
              Making the future of our planet tangible is one of the psychological barriers 
              that have made climate change into an elusive problem.  
              </p>
            </section>
              <div className="arrow"></div>
            <section className="nav-list">
              <h2>Legend</h2>
              <span>A color circle point map that marks cities in the world</span>
              <div className="legend">
              <div className="legend-title">The temperature change on our map</div>
              <div className="legend-scale">
               <ul className="legend-labels">
                <li><span className="span-1"></span>0 - 20%</li>
                <li><span className="span-2"></span>40%</li>
                <li><span className="span-3"></span>60%</li>
                <li><span className="span-4"></span>80%</li>
                <li><span className="span-5"></span>100%</li>
               </ul>
              </div>
              </div>
            </section>
            <section className="nav-list">
              <h2>How To</h2>
              <span>How the app works</span>
              <p>
              We visualize the impact climate change has on our planet with a web-application 
              that makes planet data easily accessible and visually attractive for users.
              We visualize the impact climate change has on our planet with a web-application 
              that makes planet data easily accessible and visually attractive for users.
              </p>
            </section>
         </div>
        </div>
     
    </>
  );
}

export default Sidebar;
