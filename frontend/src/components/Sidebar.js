import React, { useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import "./Sidebar.css";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const onToggleSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IoIosArrowDropright
        className={
          sidebar ? "outer-toggle-icon-visible" : "outer-toggle-icon-hidden"
        }
        onClick={onToggleSidebar}
      />

      <div className={sidebar ? "sidebar-visible hidden" : "sidebar-visible"}>
        <IoIosArrowDropleft
          className="inner-toggle-icon"
          onClick={onToggleSidebar}
        />
        <h1>TerraViz</h1>

        <section className="">
          <h2>The problem</h2>
          <span>Where is our project grounded?</span>
          <p>
            Climate change is THE largest problem of humanity. Making the future
            of our planet tangible is one of the psychological barriers that
            have made climate change into an elusive problem.
          </p>
        </section>
        <section className="">
          <h2>Our product</h2>
          <span>What we built</span>
          <p>
            We visualize the impact climate change has on our planet with a
            web-application that makes planet data easily accessible and
            visually attractive for users.
          </p>
        </section>
        <section className="">
          <h2>How To</h2>
          <span>How the app works</span>
          <p>
            We visualize the impact climate change has on our planet with a
            web-application that makes planet data easily accessible and
            visually attractive for users.
          </p>
          <p>
            We visualize the impact climate change has on our planet with a
            web-application that makes planet data easily accessible and
            visually attractive for users.
          </p>
          <p>
            We visualize the impact climate change has on our planet with a
            web-application that makes planet data easily accessible and
            visually attractive for users.
          </p>
        </section>
      </div>
    </>
  );
}

export default Sidebar;
