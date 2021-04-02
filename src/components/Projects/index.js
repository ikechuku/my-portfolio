import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
      <div className="w-full justify-center flex text-blue-100 opacity-25 font-semibold p-2 ">
        <Link
          to="/featured-projects"
          className="m-5 "
          onClick={() => setState("featured")}
        >
          Featured Projects{" "}
        </Link>
        <Link
          to="/other-projects"
          className="m-5 px-3"
          onClick={() => setState("others")}
        >
          Other Projects{" "}
        </Link>
      </div>
      <div className="item-grid shadow-md">
        {state === "/other-projects" ? (
          <OtherProjects featured={false}/>
        ) : (
          <Featured  />
        )}
      </div>
    </>
  );
};

export default App;
