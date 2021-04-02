import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Featured from "./Featured";
import OtherProjects from "./OtherProjects";

import "./style.scss";

const App = () => {
  const [state, setState] = useState("/featured-projects");
  const location = useLocation().pathname;

  useEffect(() => {
    setState(location);
  });
  return (
    <>
      <div className="w-full justify-end flex text-blue-100 opacity-25 font-semibold p-2 ">
        <NavLink
          to="/featured-projects"
          className="m-5 text-red"
          activeClassName="border-b-2 border-white"
        >
          Featured Projects
        </NavLink>
        <NavLink
          to="/other-projects"
          activeClassName="border-b-2 border-white"
          className="m-5 px-3"
        >
          Other Projects{" "}
        </NavLink>
      </div>
      <div className="item-grid shadow-md">
        {state === "/other-projects" ? (
          <OtherProjects featured={false} />
        ) : (
          <Featured />
        )}
      </div>
    </>
  );
};

export default App;
