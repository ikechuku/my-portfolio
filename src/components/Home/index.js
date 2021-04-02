import React from "react";
import "./style.scss";
const App = () => {
  return (
    <div className="container h-screen">
      <div className="container-inner my-auto mx-auto">
        <div className="main-content  my-auto mx-auto p-8 lg:p-20">
          <div
            className="main-headings block text-white  "
            id="main-headings-js"
          >
            <p
              id="by-line"
              className="italic border-b border-white w-3/4 lg:w-1/5"
            >
              Hello, my name is
              <strong> Ikechuku,</strong>
            </p>

            <div className="heading">
              <h3 id="heading1">I am a Full Stack </h3>
              <h3 id="heading2">Software</h3>
              <h1 id="heading3">Engineer</h1>
            </div>

            <div className="short-bio text-white ">
              <p>
                I'm a software engineer based in Lagos, Nigeria. I enjoy
                building everything from Landing pages for small businesses to
                complex and interactive web/mobile applications.
                <br />I am passionate about learning new technologies and
                collaborating in tech communities. I’m Success-driven,
                goal-oriented and fully committed to developing innovative
                solutions to analytical problems. I love emerging technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
