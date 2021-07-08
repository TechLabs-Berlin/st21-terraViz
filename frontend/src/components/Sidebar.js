import React, { useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import data_graph from "../assets/sidebar_graph.png"

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
              <h2>Analysis</h2>
              <span>The result of data analysis</span>
              <h4>Heating up</h4>
              <p>
             Sliding through the time from 1900 until 2013 shows the immersive effects of climate change already present in todays world - and especially, how they’re getting more severe by time. </p>
             <p>In the first half of the twentieth century, warmer periods are followed by colder ones in quite a constant exchange. With the end of WWII, the situation begins to worsen. Less colder periods occur. 
             Warmer periods start to dominate. The last period of cooling temperatures ends somewhat around 1942. From that point onwards, there’s only one way on the temperature scale: upwards. </p>
             <p>By 2013, there are only very few blue dots left, somewhere in continental Asia. 
             The rest appears in dark red, signalling a temperature increase of more than 7.5% over the course of 100 years. In fact, the average temperature increase across all locations in 2013 is at almost 14%. 
             Only in 7 years of the 113 year timespan, the world is cooling down on average. All of these years occur before 1942. There’s an alarming trend apparent.
              </p>
            <img className="data_graph" src={data_graph} alt="data_graph" />
            <h4>Different areas, different heat</h4>
            <p>The closer one gets to the equator, the more stable the climate is. Temperature is more volatile at locations of higher proximity to the poles. While this means that there are more periods of cooling down here, it also means that the heat is more severe - with enormous consequences for world climate. </p>
            <p>The poles act as a natural air conditioning - their faster disappearance causes severe damage to the balance of the worldwide climate system. </p>
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
            <div className="copyright">
                <p>© TerraViz 2021</p>  
            </div>
            </section>
         </div>
        </div>
     
    </>
  );
}

export default Sidebar;
