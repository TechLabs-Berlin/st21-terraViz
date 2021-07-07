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
              <h2>Problem</h2>
              <span>Where is our project grounded?</span>
              <p>
              Climate change is the largest problem of humanity.
              Making the future of our planet tangible is one of the psychological barriers 
              that have made climate change into an elusive problem. 
              Since one of the major effects of climate change is temperature change, approaching with temperature change was decided for the project.
              </p>
            </section>
              <div className="arrow"></div>
            <section className="nav-list">
              <h2>Legend</h2>
              <span>A color circle point map that marks cities in the world</span>
              <div className="legend">
              <div className="legend-title">The temperature change on our map (1902-2013)</div>
              <div className="legend-scale">
               <ul className="legend-labels">
                <li><span className="circle-1"></span>-7.5%</li>
                <li><span className="circle-2"></span>-2.5%</li>
                <li><span className="circle-3"></span>-1%</li>
                <li><span className="circle-4"></span>0% (Base)</li>
                <li><span className="circle-5"></span>1%</li>
                <li><span className="circle-6"></span>2.5%</li>
                <li><span className="circle-7"></span>7.5%</li>
               </ul>
              </div>

                 <p>The temperature changes are displayed as a percentage change of the yearly temperatures starting from 1902 to a base that is always the same for each city. 
               The base value is calculated as the average temperature of each city from 1892 to 1901.</p>
                 <p>Displaying different color circles with the percentage of the temperature change.
               The bigger the radius, the bigger the temperature change. </p> 
              </div>
            </section>
            <section className="nav-list">
              <h2>About us</h2>
              <span>We are TerraViz</span>
              <p>
              TerraViz is an interactive map visualization web-app that shows the immediate effects of climate change. 
              We visualize the impact of climate change with a web-application 
              that makes planet data easily accessible and visually attractive for users.
              Our vision is to make climate change tangible!
              </p>
            </section>
            <section className="nav-list">
            <div class="copyright">
                <p>© TerraViz 2021</p>  
            </div>
            </section>
         </div>
        </div>
     
    </>
  );
}

export default Sidebar;
