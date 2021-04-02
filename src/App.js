import React, { Suspense, lazy } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./styles/app.css";
import "./App.scss";
import { ClipLoader } from "react-spinners";
import Navbar from "./components/Header";
import Footer from "./components/Footer";

const Home = lazy(() => import("./components/Home"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Details = lazy(() => import("./components/Projects/ProjectCard"));

const App = () => (
  <BrowserRouter>
    <div className="container mx-auto ">
      <div className="overlay "></div>
      <Navbar />
      <Suspense
        fallback={
          <div className="flex justify-center align-center pt-40 transparent h-screen">
            <ClipLoader size={120} color="aqua" />
          </div>
        }
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/other-projects" component={Projects} />
          <Route exact path="/featured-projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="details" component={Details} />
        </Switch>
      </Suspense>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
