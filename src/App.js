import React from "react";
import Home from "./components/home/Home";
import AboutUs from "./components/about/About";
import Resume from "./components/resume/Resume";
import Scroll from "./components/extras/Scroll";
import Contact from "./components/contact/Contact";
import Footer from "./components/extras/footer";
import "./App.css";
export default function App() {
  return (
    <>
      <Home />
      <AboutUs />
      <Resume />
      <Contact/>
      <Scroll />
      <Footer/>
    </>
  )
}