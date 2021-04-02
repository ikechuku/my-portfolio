import React from "react";
import ProjectCard from "./ProjectCard";
import "./style.scss";

const App = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <ProjectCard item={item} />
      ))}
    </>
  );
};

export default App;

App.defaultProps = {
  data: [
    {
      title: "Minsystems",
      description:
        "Minsystems is a technology company that aims to provide solutions that will connect people and businesses to modern software solutions that will improve their daily lives.",
      stack: ["React"],
      github: "https://github.com/ikechuku/",
      site: "https://minsystems.netlify.app",
      image:
        "https://res.cloudinary.com/techknight/image/upload/v1617329668/Featured%20Projects/Minsystems.png",
      alt: "Screenshot of minsystems.ng",
    },
    {
      title: "Automart",
      description:
        "Automart is an online automobile marketplace. It's full Stack Node Application built with Node, Express,HTML, JavaScript and Pure CSS(No CSS frameworks). Deployed using Netlify. The project is managed using Pivotal Tracker. Configured with Travis CI",
      stack: ["Node", "Express", "MongoDB", "HTML", "JS", "CSS"],
      github: "https://github.com/ikechuku/automart",
      site: "https://automart.netlify.com",
      image:
        "http://res.cloudinary.com/decagonbouncer/image/upload/v1580948954/portfolio/automart.webp",
      alt: "Screenshot of Automart Website",
    },

    {
      title: "Bouncer Ecommerce",
      description:
        "Bouncer is an Electronics ecommerce application. It uses REST API endpoints at the backened built using Python (Django) and Django REST Framework and in the Frontend the API is consumed using React and Redux (Thunk). Deployed using Heroku and Hosted on Netlify. Continuous Delivery and configured to automatically trigger Deployment pipeline. Configured with Travis CI. Containerization with Docker and searches and filters managed using Algolia, The project was managed using Jira",
      stack: ["Django REST", "Django", "Algolia", "React", "Redux"],
      github: "https://github.com/ikechuku/bouncer",
      site: "https://bouncerapp.netlify.com/",
      image:
        "https://res.cloudinary.com/decagonbouncer/image/upload/q_auto/v1580914471/portfolio/bouncer_wzspca.webp",
      alt: "Screenshot of Bouncer website",
    },
    {
      title: "Decatuts",
      description:
        "A full stack application built with python and Flask. MVC framework. Front end built with Bootstrap CSS framework. Database written in SQLite. The app was deployed on Heroku.",
      stack: ["Flask", "Python", "Bootstrap, SQLite"],
      github: "https://github.com/ikechuku/decatuts",
      site: "https://decatuts-app.herokuapp.com/",
      image:
        "http://res.cloudinary.com/decagonbouncer/image/upload/q_auto/v1580914472/portfolio/decatutshome_mectbp.webp",
      alt: "Screenshot of Decatuts website",
    },

    {
      title: "Decastock Inventory Management",
      description:
        "Decastock is a product inventory management system. Deployed using Netlify. Continuous Delivery and configured to automatically trigger Deployment to pipeline. Configured with Travis CI",
      stack: ["HTML", "CSS", "JavaScript", "JQuery", "JSON", "Ajax"],
      github: "https://github.com/ikechuku/decastock",
      site: "http://ikechuku.me/decastock/",
      image:
        "http://res.cloudinary.com/decagonbouncer/image/upload/q_auto/v1580914470/portfolio/decastock_womhbh.webp",
      alt: "Screenshot of Decastore website",
    },
    {
      title: "Movie Trooper",
      description:
        "A React application built with JavaScript and React.JS. The Front end Design was built using Bootstrap CSS framework.  SQLite for database and deployed on Heroku. Continuous Delivery and configured to automatically trigger Deployment to pipeline. Configured with Travis CI",
      stack: ["React", "Bootstrap", "SQLite", "TMDB api"],
      github: "https://github.com/ikechuku/React-RMDB",
      site: "https://movietrooper.netlify.com",
      image:
        "https://res.cloudinary.com/decagonbouncer/image/upload/q_auto/v1580914471/portfolio/movies_j3cxld.webp",
      alt: "Screenshot of Movie Trooper website",
    },
    {
      title: "Zeekara Store",
      description:
        "A full stack application built with python and django. MVC framework. Front end built with Bootstrap CSS framework. SQLite for database and deployed on Heroku. Continuous Delivery and configured to automatically trigger Deployment to pipeline. Configured with Travis CI",
      stack: ["Django", "Python", "Bootstrap", "SQLite"],
      github: "https://github.com/ikechuku/zeekara",
      site: "https://zeekara.netlify.com/",
      image:
        "https://res.cloudinary.com/decagonbouncer/image/upload/q_auto/v1580940840/portfolio/zeekara_qqj5co.webp",
      alt: "Screenshot of Zeekara website",
    },
    {
      title: "Tener Minds",
      description:
        "A Mentorship social platforms where mentors meet mentees built for developers.Frontend Design implementation built with React. REST API consumption with Axios, React Redux(Redux Thunk) ",
      stack: ["React", "Redux", "Axios", "Redux Thunk"],
      github: "https://github.com/ikechuku",
      site: "https://tener.netlify.com/",
      image:
        "https://res.cloudinary.com/decagonbouncer/image/upload/q_auto/v1582697430/portfolio/tener.webp",
      alt: "Screenshot of Tener Minds website",
    },

    {
      title: "Tillit Data Visualization",
      description:
        "Data Visualization site built with Tailwind CSS framework and ChartJS. Deployed using Netlify. Continuous Delivery and configured to automatically trigger Deployment to pipeline. Configured with Travis CI",
      stack: ["HTML", "Chart JS", "JavaScript", "Tailwind"],
      github: "https://github.com/ikechuku/tillit",
      site: "https://tillit.netlify.com/",
      image:
        "https://res.cloudinary.com/decagonbouncer/image/upload/q_auto/v1582692608/portfolio/Tillit.webp",
      alt: "Screenshot of Tillit website",
    },
    {
      title: "Puma Store",
      description:
        "Advert for Puma X Stampd. Fully Responsive Advertisement card built with Tailwind CSS framework, HTML. Deployed using Netlify. Continuous integrations, testing and delivery configured with Circle CI",
      stack: ["Django", "Python", "Bootstrap, SQLite"],
      github: "https://github.com/ikechuku/puma-advert",
      site: "https://product-advert.netlify.com/",
      image:
        "https://res.cloudinary.com/decagonbouncer/image/upload/q_auto/v1582692893/portfolio/puma.webp",
      alt: "Screenshot of Puma Advertisement",
    },
  ],
};
