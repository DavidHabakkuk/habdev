import Media from "./component/media";
import Hero from "./component/Hero";
import About from "./component/About"
import Project from "./component/project";
import Skill from "./component/skill";
import Contact from "./component/contact"
// import Nav from "./component/Navbar";
import Footer from "./component/Footer"

export default function Home() {
  return (
   <>
      <Hero/>
      <About/>
      <Project/>
      <Skill />
      <Contact/>  
      <Media/>
      <Footer/>
      {/* <Nav/> */}
     
   </>
   
   
  
  );
}
