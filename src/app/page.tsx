import React from "react";
import Media from "./component/media";
import Hero from "./component/Hero";
import About from "./component/About";
import Team from "./component/Team";
import Project from "./component/project/project";
import Skill from "./component/skill";
import Contact from "./component/contact";
import Footer from "./component/Footer";

const Page = () => {
  return (
    <div>
      <Hero />
      <About />
      <Team />
      <Project />
      <Skill />
      <Contact />
      <Media />
      <Footer />
    </div>
  );
};

export default Page;
