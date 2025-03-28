import  ProjectCard  from "./ProjectCard";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [language, setLanguage] = useState("");
  const handleLanguageChange = (currentLanguage:string) => {
    if(language == currentLanguage){ 
      setLanguage("")
    }else {
      setLanguage(currentLanguage)
    }
  }
  
  useEffect(() => {
    console.log("Language selected ", language)
  }, [language])
  
  const projects = [
    {
      title: "SpotiPlaying",
      description: "An embedded SVG that displays the currently playing song on Spotify.",
      image: "https://spoti-playing.vercel.app/api/svg?userId=31yzahwadeqrj7t3znaogbz63vjm&compact=true",
      link: "https://github.com/NexWan/SpotiPlaying",
      languages: ["TypeScript", "Spotify API", "NextJS", "PostgreSQL", "Vercel"]
    },
    {
      title: "MindScrap",
      description: "Web scrapper made with Python that scrapes data from Mindbox and generates schedules for ITS students.",
      image: "/media/minds.png",
      link: "https://github.com/NexWan/MindScrap",
      languages: ["Python", "BeautifulSoup"]
    }, 
    {
      title: "EuroScrapper",
      description: "A web application that scrapes data from Eurogamer and generates a JSON file with info from videogames.",
      image: "/media/euro1.png",
      link: "https://github.com/NexWan/euroscrapper",
      languages: ["Python", "BeautifulSoup"]
    }, 
    {
      title: "Database Administrator",
      description: "Database administrator made for a school project, a CRUD application for managing birth certificates.",
      image: "/media/bd1.png",
      link: "https://github.com/NexWan/ProyectoAdminBD",
      languages: ["C#", "SQLServer", "WPF"]
    }, 
    {
      title: "SQL Script generator",
      description: "An SQL Script generator for creating inserts with random data. (This is my first project)",
      image: "/media/sql1.png",
      link: "https://github.com/NexWan/Generador-de-datos",
      languages: ["Java", "JavaFX"]
    }, 
    {
      title: "School chapter webpage",
      description: "A webpage created for my school chapter where we share information about our chapter and events.",
      image: "/media/capitulo0.png",
      link: "https://github.com/CapituloSistemasITS/capitulo-sistemas-its",
      languages: ["TypeScript", "CSS", "React", "Vercel", "Tailwind", "Nextjs"]
    }, 
    {
      title: "Marketplace demo", 
      description: "A marketplace web page created for a school project implenting AI to categorize products.", 
      image: "/media/mp.png",
      link: "https://github.com/NexWan/ciencia-datos-project-front",
      languages: ["TypeScript", "React", "ReactRouter", "Tailwind"]
    }, 
    {
      title: "Marketplace demo Backend",
      description: "Backend for the marketplace demo",
      image: "/media/mp.png",
      link: "https://github.com/NexWan/ciencia-datos-project-front",
      languages: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "Docker", "TensorFlow"]
    }, {
      title: "IoT container", 
      description: "An IoT implementation utilizing ESP32 to control a container sending data to a server on Oracle Cloud (Made for the Oracle Cloud Challenge)",
      image: "/media/iot.png",
      link: "https://github.com/RamMaths/iot-container",
      languages: ["Rust", "Oracle", "OracleDB", "APEX"]
    }, 
    {
      title: "Zig Server Handler",
      description: "On development, this is a Zig server to serve web pages with static routes",
      image: "/media/ziguana.png",
      link: "https://github.com/NexWan/Zig-server-handler",
      languages: ["Zig"]
    },
    {
      title: "Postgresql Zig Wrapper and Inner Join Queries",
      description: "On development, this is a Zig wrapper for PostgreSQL utilizing libpq and the interoperability between C and Zig",
      image: "/media/ziguana.png",
      link: "https://github.com/NexWan/zig-postgresql-wrapper",
      languages: ["Zig"]
    }
  ];
  
  const programmingLanguages = ["TypeScript", "Python", "Java", "C#", "Zig", "Rust"];

  return (
    <div className="w-full h-full main-bg flex flex-col  justify-end">
      <div className="flex flex-col second-bg w-full h-1/4 justify-end pb-2">
        <div className="flex flex-col justify-end max-w-2xl pl-5">
          <h3 className="text-xl lg:text-3xl mb-2">Projects</h3>
          <p className="text-sm lg:text-lg">Here you can find some of my projects. You can sort them by programming language!<br></br>
          You can click on the project card and it will take you to the project page.
          </p>
        </div>
      </div>
      <div className="flex flex-row w-full justify-center h-3/4">
        <div className="flex flex-col justify-start w-2/5 lg:w-1/4 third-bg h-full self-start items-center">
          <h3 className="text-xl lg:text-2xl pt-20 pb-5 text-center">Programming Languages</h3>
          <div className="flex flex-row md:pl-3 items-center md:justify-start justify-center flex-wrap gap-3 *:hover:cursor-pointer *:hover:scale-105 *:!text-white *:!badge *:!badge-secondary">
            {
              programmingLanguages.map((language) => {
                return (
                  <div key={language} onClick={() => handleLanguageChange(language)} className="badge badge-secondary">{language}</div>
                )
              })
            }
          </div>
        </div>
        <div className="flex flex-row items-center justify-center w-3/4 overflow-scroll">
          <motion.div key={language} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 items-center h-full">
            {
              projects.filter(project => language === "" || project.languages.includes(language)).map((project, key) => {
                return (
                  <ProjectCard
                    key={key}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    link={project.link}
                    languages={project.languages}
                  />
                )
              })
            }
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
