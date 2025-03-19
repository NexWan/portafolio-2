import React from "react";
import {Element} from 'react-scroll';
import Welcome from "./Welcome";
//@ts-ignore
import { AnimatedBackground } from 'animated-backgrounds';
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Main() {
  return (
    <>
    <Element name="main" className="w-screen h-screen">
      <AnimatedBackground animationName="matrixRain" blendMode="normal" />
      <Welcome/>
    </Element>
    <Element name="about" className="w-screen h-screen overflow-y-scroll">
      <About />
    </Element>
    <Element name="projects" className="w-screen h-screen overflow-y-scroll">
      <Projects />
    </Element>
    <Element name="skills" className="w-screen h-screen overflow-y-scroll">
      <Skills />
    </Element>
    </>
  );
}
