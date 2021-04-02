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
      title: "9to5chick",
      description: "Online community for  professionals/working class women",
      stack: ["React, Redux"],
      github: "https://github.com/ikechuku",
      site: "https://app.9to5chick.com",

      image:
        "https://res.cloudinary.com/techknight/image/upload/v1617329643/Featured%20Projects/9to5chick.webp",
      alt: "Screenshot of 9to5chick",
    },

    {
      title: "StandardLife EMS",
      description: "EMS Web Application for Standardlife Organization",
      stack: ["React, Redux"],
      github: "https://github.com/ikechuku/",
      site: "https://standardlifeems.com",
      image:
        "https://res.cloudinary.com/techknight/image/upload/v1617329608/Featured%20Projects/SLO.png",
      alt: "Screenshot of standardlifeems.com",
    },
    {
      title: "Syarpa",
      description: "Fast and secure way to transfer money",
      stack: ["React, Redux"],
      github: "https://github.com/ikechuku",
      site: "https://syarpa.com",
      image:
        "https://res.cloudinary.com/techknight/image/upload/v1617329607/Featured%20Projects/Syarpa-white.png",
      alt: "Screenshot of Syarpa.com",
    },

    {
      title: "Ugeo",
      description:
        "Introducing a new geo-social platform to engage with your community in real time",
      stack: ["React Native", "GraphQL"],
      github: "https://github.com/ikechuku",
      site: "https://ugeo.webflow.io",
      image:
        "https://res.cloudinary.com/techknight/image/upload/v1617329703/Featured%20Projects/Ugeo.png",
      alt: "Screenshot of Ugeo website",
    },
    {
      title: "Ping Cash",
      description: "Send money to anyone with by Phone Number",
      stack: ["React, PWA"],
      github: "https://github.com/ikechuku",
      site: "https://pingcash.me",
      image:
        "https://res.cloudinary.com/techknight/image/upload/v1617332035/Featured%20Projects/pingcash.webp",
      alt: "Screenshot of PingCash",
    },
  ],
};
