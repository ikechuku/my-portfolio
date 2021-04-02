import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./style.scss";
const App = ({ item }) => {
  const [code, setCode] = useState(false);
  const location = useLocation().pathname;
  useEffect(() => {
    location === "/other-projects" ? setCode(true) : setCode(code);
  });

  return (
    <div className="project-item container box-border text-white container h-full w-full ">
      <div className="main max-w-4xl flex flexed  items-center h-auto lg:h-screen flex-wrap mx-auto my-12 lg:my-0 lg:mx-auto ">
        {/* <!--Main Col--> */}
        <div
          id="profile"
          className=" w-full lg:w-2/5 rounded-sm shadow-2xl bg-  mx-6 lg:mx-0 "
        >
          <div className="x relative z-40 p-4 md:p-12 text-center  lg:-mx-20">
            <a
              title={item.site}
              href={item.site}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="text-left my-4 text-lg font-bold ">
                {item.title}
              </h2>
              {/* <!-- Image for mobile view--> */}

              <div className="block lg:hidden rounded-full shadow-xl h-48 w-full bg-cover bg-center">
                <img
                  alt="project screenshot"
                  src={item.image}
                  className=" w-full h-full lg:rounded-lg shadow-2xl  lg:hidden"
                />
              </div>
            </a>
            <p className="relative hover:opacity-100 lg:text-center z-40 shadow-xl opacity-75 py-2 px-2 text-sm rounded-sm shadow-lg bg-gray-800 border-white leading-loose text-md ">
              {item.description}
            </p>

            <div className="tech mt-6 lg:pb-0 w-4/5 mx-auto flex flex-wrap">
              {item.stack.map((i) => (
                <div className="link pr-2">{i}</div>
              ))}
              <div className="text-left lg:mx-0 w-4/5 pt-3 border-b-2 border-teal-500 opacity-25"></div>
              {code ? (
                <a
                  title="view code"
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="fab text-xs text-gray-500">{item.github}</p>
                </a>
              ) : (
                ""
              )}
              {/* <div className=" bg-red-400 w-12 h-12">
                {" "}
                <a
                  title="view code"
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github w-full"></i>
                </a>
                &nbsp;
                <a
                  href={item.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="view site"
                >
                  <i className="fas fa-eye"></i>
                </a>
              </div> */}
            </div>
          </div>
        </div>

        {/* <!--Img Col--> */}
        <div className="relative z-0 pic hidden lg:flex w-full lg:w-3/5 bg-black -ml-8 opacity-75 hover:opacity-100 hover:z-50">
          <div className="bg-green-800 w-full h-full"></div>
          {/* <!-- Big profile image for side bar (desktop) --> */}
          <img
            alt=""
            src={item.image}
            className="rounded-none lg:rounded-sm  w-full h-full shadow-2xl hidden lg:block"
          />
          {/* <!-- Image from: http://unsplash.com/photos/MP0IUfwrn0A --> */}
        </div>
      </div>
    </div>
  );
};

export default App;
