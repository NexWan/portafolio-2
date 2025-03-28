import React from "react";
import { motion } from "framer-motion";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const About = () => {
  const images = [
    {
      original: "/media/daimler.jpg"
    }, 
    {
      original: "/media/icpc.jpg"
    },
    {
      original: "/media/hackatec1.jpg"
    },
    {
      original: "/media/hackatec2.jpg"
    }
  ]
  const [currentSection, setCurrentSection] = React.useState("bio");
  return (
    <motion.div initial={{x: -200}} animate={{x: 0}} transition={{duration: 0.5}} className="w-full h-full main-bg flex items-center justify-center">
      <div className="lg:w-1/6 w-2/6 min-h-screen overflow-y-auto flex items-center second-bg">
        <nav className="">
          <ul className="menu second-bg rounded-box w-24 md:w-56 p-0 md:p-8  *:md:text-lg">
            <li onClick={() => setCurrentSection("bio")}>
              <a
                href="#bio"
                className={`text-white ${
                  currentSection === "bio" ? "menu-active" : ""
                }`}
              >
                Bio
              </a>
            </li>
            <li onClick={() => setCurrentSection("experience")}>
              <a
                href="#experience"
                className={`text-white ${
                  currentSection === "experience"
                    ? "menu-active"
                    : ""
                }`}
              >
                Experience
              </a>
            </li>
            <li onClick={() => setCurrentSection("awards")}>
              <a href="#awards"
                className={`text-white ${
                  currentSection === "awards"
                    ? "menu-active"
                    : ""
                }`}
              >Awards</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-3/4 h-screen overflow-y-scroll mx-auto px-4 py-8 flex flex-col items-center justify-center md:justify-center">
        {currentSection === "bio" && (
          <motion.div
            className="flex flex-col justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="lg:text-3xl text-xl font-bold mb-4 text-start self-start">
              About Me
            </h1>
            <p className="text-justify text-sm md:text-lg">
              My name is Leonardo, I'm a computer systems engineering student at
              the Instituto Tecnologico de Saltillo.<br></br>
              I'm passionate about technology and I love to learn new things.
              I'm always looking for new challenges and opportunities to grow as
              a developer.<br></br>I got lot's of experience working with
              different technologies and frameworks, specially web development,
              React, Node.js, and Express.js. I've worked with GUI frameworks
              like React Native and Flutter and Native desktop development using
              tools such as WPF, JavaFX, and Electron.
            </p>
            <p className="text-justify text-sm mt-5 mb-2">
              Here you can see what I'm listening to. (This is a project I made
              using React and Spotify API)
            </p>
            <img
              src="https://spoti-playing.vercel.app/api/svg?userId=31yzahwadeqrj7t3znaogbz63vjm&compact=true"
              alt="Spotify Playing"
            />
          </motion.div>
        )}
        {currentSection === "experience" && (
          <motion.div
            className="flex flex-col items-center justify-center w-full h-5/6 md:h-screen overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="lg:text-3xl text-xl font-bold mb-4 text-start self-start">
              Experience
            </h1>
            <p className="text-justify text-sm md:text-lg">
              I've worked for several companies as a software developer, where
              I've had the opportunity to work on a variety of projects using
              different technologies and frameworks. I've also worked on
              personal projects, where I've learned and applied new skills and
              technologies.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 w-full h-4/6 overflow-y-auto">
              <div className="card second-bg shadow-sm rounded-xl md:w-md">
                <figure>
                  <img
                    src="/media/zflogo.svg"
                    alt="ZF"
                    className="w-32 h-32 md:w-40 md:h-40 object-contain"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">ZF Group Saltillo</h2>
                  <p >Automation Engineering Intern</p>
                  <p>Duration: 4 months (AGO 2024 - DEC 2024)</p>
                  <p>
                    During my internship, I worked on a variety of projects,
                    from developing paperless solutions to implementing
                    digitalization tools for the plant, improving efficiency and
                    reducing costs.
                  </p>
                  <p>
                    I also worked on improving the company's internal processes,
                    automating repetitive tasks and streamlining workflows.
                  </p>
                  <p>Technologies used:</p>
                  <ul className="flex flex-wrap gap-2 items-center flex-row *:bg-pink-300 *:rounded-xl *:px-4 *:py-1 *:shadow-xl text-center">
                    <li>Power Apps</li>
                    <li>Power Automate</li>
                    <li>Dataverse</li>
                    <li>Python</li>
                    <li>C#</li>
                  </ul>
                </div>
              </div>
              <div className="card second-bg shadow-sm rounded-xl md:w-md">
                <figure>
                  <img
                    src="/media/softtek.webp"
                    alt="Softtek"
                    className="object-cover w-32 h-32 md:w-full md:h-40"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Softtek</h2>
                  <p>Software Engineer Intern</p>
                  <p>Duration: Current</p>
                  <p>
                    I'm currently working on a variety of automation projects,
                    including automating repetitive tasks and streamlining
                    workflows. I'm also learning new technologies and frameworks
                    to improve my skills.
                  </p>
                  <p>Technologies used:</p>
                  <ul className="flex flex-row flex-wrap gap-2 *:bg-pink-300 *:rounded-xl *:px-4 *:py-1 *:shadow-xl text-center">
                    <li>Power Apps</li>
                    <li>Power Automate</li>
                    <li>Sharepoint</li>
                    <li>Python</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        {currentSection === "awards" && (
        <motion.div
          className="flex flex-col items-center justify-start w-full h-5/6 md:h-screen overflow-y-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full items-center flex justify-center md:justify-center flex-col h-full overflow-scroll">
            <h1 className=" text-xl lg:text-3xl self-start">Awards</h1>
            <p className="text-sm lg:text-lg">During my time as a student, I've participated in several hackathons and coding competitions, winning multiple awards.
              I've also been part of the computer systems chapter at my university, where I've organized events and workshops to promote computer science education.
            </p>
            <div className="flex flex-col items-center w-full">
              <h2 className=" text-xl lg:text-2xl self-start">Hackathons</h2>
              <ul className="flex flex-col *:ml-5 justify-center w-full h-full list-disc">
                <li className="text-sm lg:text-lg">Winner of regional hackaton organized by the TECNM</li>
                <li className="text-sm lg:text-lg">Winner of Daimler's truck hackaton organized by Daimler</li>
              </ul>
            </div>
            <div className="flex flex-col items-center w-full ">
              <h2 className="text-xl lg:text-2xl self-start">Coding Competitions</h2>
              <ul className="flex flex-col *:ml-5 justify-center w-full h-full list-disc *:text-sm *:lg:text-lg">
                <li>Participant at the Oracle Cloud Challenge organized by Oracle</li>
                <li>Participant at the ICPC locals organized by ICPC</li>
              </ul>
            </div>
            <div className="flex justify-center items-center ">
              <ImageGallery 
                items={images.map(image => ({
                  ...image,
                  renderItem: (item) => (
                    <img 
                      src={item.original} 
                      style={{ objectFit: 'cover' }}
                      alt={item.originalAlt}
                      className="rounded-lg shadow-md w-32 h-32 md:w-48 md:h-48"
                    />
                  )
                }))}
                showNav={false}
                showPlayButton={false}
                infinite={true}
                lazyLoad={true}
                showFullscreenButton={false}
                autoPlay={true}
                additionalClass="mt-4 hidden md:block"
              />
            </div>
          </div>
        </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default About;
