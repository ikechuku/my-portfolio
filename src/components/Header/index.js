import React, { useState } from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import { FaCloudDownloadAlt } from "react-icons/fa";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal p-6 sticky">
      <a href="/">
        <div className="flex items-center flex-no-shrink rainbow text-blue-800 mr-6">
          {/* <span className="font-semibold text-xl tracking-tight ">ikechuku</span> */}
          <svg id="svg" viewBox="0 0 960 300">
            <symbol id="s-text">
              <text text-anchor="middle" x="50%" y="80%">
                t3chkn1ght
              </text>
            </symbol>

            <g class="g-ants">
              <use href="#s-text" class="text-copy"></use>
              <use href="#s-text" class="text-copy"></use>
              <use href="#s-text" class="text-copy"></use>
              <use href="#s-text" class="text-copy"></use>
              <use href="#s-text" class="text-copy"></use>
            </g>
          </svg>
        </div>
      </a>
      <div className="text-white lg:hidden">
        <button
          onClick={handleToggle}
          className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white"
        >
          <svg
            className="h-3 w-3 text-white bg-white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            // style="background:white;"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="to-be-hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div
          className={
            toggle
              ? " lg:w-full text-center"
              : "hidden lg:flex lg:justify-center w-full "
          }
        >
          <NavLink
            activeClassName="opacity-75"
            onClick={handleToggle}
            exact
            to="/home"
            className="scale-105 hover:text-white block mt-4 opacity-50 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white lg:mr-4 text-center mr-0"
          >
            Home
          </NavLink>
          <NavLink
            onClick={handleToggle}
            activeClassName="opacity-75"
            exact
            to="/projects"
            className="scale-105 hover:text-white block mt-4 opacity-50 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white lg:mr-4 text-center mr-0"
          >
            Projects
          </NavLink>
          <NavLink
            onClick={handleToggle}
            activeClassName="opacity-75"
            exact
            to="/contact"
            className="scale-105 hover:text-white block mt-4 opacity-50 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white text-center mr-0"
          >
            About
          </NavLink>
        </div>
        <div className={toggle ? "flex justify-center" : "hidden lg:flex"}>
          <a
            href="https://docs.google.com/document/d/1Dl__hvtr6n1rEFpYaq51uuIkI4of04Dk8-xM7BfkqA4/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-auto opacity-75 hover:opacity-100 text-inline-block px-4 py-2 leading-none  rounded text-white border-white hover:bg:blue-900 hover:opacity-75 hover:text-teal mt-4 lg:mt-0"
          >
            <FaCloudDownloadAlt /> &nbsp;
            <span className="my-auto">CV</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default App;
