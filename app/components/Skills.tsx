import { useState } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const stacks = [
    "All",
    "Main Stack",
    "Backend",
    "Frontend",
    "Database",
    "Tools",
    "Other",
    "Cloud",
    "Deployment"
  ]
  
  const mainStack = [
    {
      name: "React",
      picture: <i className="devicon-react-original-wordmark colored"></i>,
    },
    {
      name: "Angular",
      picture: <i className="devicon-angularjs-plain colored"></i>,
    },
    {
      name: "TypeScript",
      picture: <i className="devicon-typescript-plain colored"></i>,
    },
    {
      name: "JavaScript",
      picture: <i className="devicon-javascript-plain colored"></i>,
    },
    {
      name: "Python",
      picture: <i className="devicon-python-plain colored"></i>,
    }, {
      name: "C#",
      picture: <i className="devicon-csharp-plain colored"></i>,
    }, {
      name: "NodeJS",
      picture: <i className="devicon-nodejs-plain colored"></i>,
    }, {
      name: "React Native",
      picture: <i className="devicon-react-original-wordmark colored"></i>,
    }
  ]
  
  const backendStack = [
    {
      name: "Python",
      picture: <i className="devicon-python-plain colored"></i>,
    }, {
      name: "C#",
      picture: <i className="devicon-csharp-plain colored"></i>,
    }, {
      name: "NodeJS",
      picture: <i className="devicon-nodejs-plain colored"></i>,
    }, {
      name: "Java",
      picture: <i className="devicon-java-plain colored"></i>,
    }, {
      name: "Rust",
      picture: <i className="devicon-rust-plain colored"></i>,
    }, {
      name: "Bun",
      picture: <i className="devicon-bun-plain colored"></i>,
    }, {
      name: "zig",
      picture: <i className="devicon-zig-plain colored"></i>,
    }, {
      name: "FastAPI",
      picture: <i className="devicon-fastapi-plain colored"></i>,
    }, {
      name: "C++",
      picture: <i className="devicon-cplusplus-plain colored"></i>,
    }
  ]
  
  const frontendStack = [
    {
      name: "React",
      picture: <i className="devicon-react-original colored"></i>,
    }, {
      name: "Vue",
      picture: <i className="devicon-vuejs-plain colored"></i>,
    }, {
      name: "Angular",
      picture: <i className="devicon-angularjs-plain colored"></i>,
    }, {
      name: "Svelte",
      picture: <i className="devicon-svelte-plain colored"></i>,
    }, {
      name: "Tailwind",
      picture: <i className="devicon-tailwindcss-plain colored"></i>,
    }, {
      name: "Bootstrap",
      picture: <i className="devicon-bootstrap-plain colored"></i>,
    }, {
      name: "HTML",
      picture: <i className="devicon-html5-plain colored"></i>,
    }, {
      name: "CSS",
      picture: <i className="devicon-css3-plain colored"></i>,
    }
  ]
  
  const databaseStack = [
    {
      name: "Oracle",
      picture: <i className="devicon-oracle-original colored"></i>,
    }, {
      name: "MySQL",
      picture: <i className="devicon-mysql-plain colored"></i>,
    }, {
      name: "PostgreSQL",
      picture: <i className="devicon-postgresql-plain colored"></i>,
    }, {
      name: "MongoDB",
      picture: <i className="devicon-mongodb-plain colored"></i>,
    }, {
      name: "SQLServer",
      picture: <i className="devicon-microsoftsqlserver-plain colored"></i>,
    }
  ]
  
  const toolStack = [
    {
      name: "Git",
      picture: <i className="devicon-git-plain colored"></i>,
    }, {
      name: "Docker",
      picture: <i className="devicon-docker-plain colored"></i>,
    }, {
      name: "Android Studio",
      picture: <i className="devicon-androidstudio-plain colored"></i>,
    }, 
    {
      name: "Bash",
      picture: <i className="devicon-bash-plain colored"></i>,
    }, 
    {
      name: "Canva",
      picture: <i className="devicon-canva-plain colored"></i>, 
    }
  ]
  
  const otherStack = [
    {
      name: "Figma",
      picture: <i className="devicon-figma-plain colored"></i>,
    }, {
      name: "Postman",
      picture: <i className="devicon-postman-plain colored"></i>,
    }, {
      name: "VS Code",
      picture: <i className="devicon-vscode-plain colored"></i>,
    }, {
      name: "IntelliJ IDEA",
      picture: <i className="devicon-intellij-plain colored"></i>,
    }, {
      name: "Android Studio",
      picture: <i className="devicon-androidstudio-plain colored"></i>,
    }, 
    {
      name: "Json",
      picture: <i className="devicon-json-plain colored"></i>,
    }, 
    {
      name: "Unity",
      picture: <i className="devicon-unity-plain colored"></i>,
    }
  ]
  
  const cloudStack = [
    {
      name: "Google Cloud",
      picture: <i className="devicon-googlecloud-plain colored"></i>,
    },
    {
      name: "Oracle Cloud",
      picture: <i className="devicon-oracle-plain colored"></i>,
    },
    {
      name: "Azure",
      picture: <i className="devicon-azure-plain colored"></i>
    }
  ]
  
  const deployStack = [
    {
      name: "Heroku",
      picture: <i className="devicon-heroku-plain colored"></i>,
    },
    {
      name: "Vercel",
      picture: <i className="devicon-vercel-plain colored"></i>
    }
  ]
  
  const All = [
    mainStack,
    backendStack,
    frontendStack,
    databaseStack,
    toolStack,
    otherStack,
    cloudStack,
    deployStack
  ]
  
  const allUniqueStacks = All.flat().filter((skill, index, self) =>
    index === self.findIndex((t) => t.name === skill.name)
  );
  
  const [selectedStack, setSelectedStack] = useState(stacks[0]);
  
  return (
    <div className="main-bg w-full h-full flex-col flex items-center justify-start">
      <div className="main-bg w-full h-1/6 justify-end flex flex-col self-center justify-self-center ml-6">
        <h2 className="text-xl lg:text-3xl">Skills</h2>
        <p className='text-sm lg:text-lg mb-3'> Here you can will find some of my skills</p>
      </div>
      <div className="main-bg w-full h-5/6 flex self-start justify-self-start">
        <div className="h-full bg-base-200 rounded-t-lg w-2/6 lg:w-1/6 flex items-start justify-center">
          <ul className="menu bg-base-200 rounded-box md:w-56 *:text-sm *:md:text-lg">
              <h2 className='!menu-title'>Stacks</h2>
              {stacks.map((stack, index) => (
                <li key={index} onClick={() => setSelectedStack(stack)}><a className={`${selectedStack === stack ? 'menu-active' : ''}`}>{stack}</a></li>
              ))}
          </ul>
        </div>
        <div key={selectedStack} className='w-5/6 overflow-scroll lg:p-8 p-4 second-bg flex items-center justify-center flex-wrap gap-4'>
          {
            selectedStack == "Main Stack"
              ? (
                mainStack.map((skill, index) => (
                  <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} key={index} className="flex hover:scale-105 flex-col items-center justify-center">
                    {skill.picture}
                    <p className="text-sm lg:text-lg text-center text-md">{skill.name}</p>
                  </motion.div>
                ))
              ) : 
              selectedStack == "Backend"
              ? (
                backendStack.map((skill, index) => (
                  <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} key={index} className="flex hover:scale-105 flex-col items-center justify-center">
                    {skill.picture}
                    <p className="text-sm lg:text-lg text-center text-md">{skill.name}</p>
                  </motion.div>
                ))
              ) : 
              selectedStack == "Frontend"
              ? (
                frontendStack.map((skill, index) => (
                  <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} key={index} className="flex hover:scale-105 flex-col items-center justify-center">
                    {skill.picture}
                    <p className="text-sm lg:text-lg text-center text-md">{skill.name}</p>
                  </motion.div>
                ))
              ) : 
              selectedStack == "Database"
              ? (
                databaseStack.map((skill, index) => (
                  <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} key={index} className="flex hover:scale-105 flex-col items-center justify-center">
                    {skill.picture}
                    <p className="text-sm lg:text-lg text-center text-md">{skill.name}</p>
                  </motion.div>
                ))
              ) : 
              selectedStack == "Tools"
              ? (
                toolStack.map((skill, index) => (
                  <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} key={index} className="flex hover:scale-105 flex-col items-center justify-center">
                    {skill.picture}
                    <p className="text-sm lg:text-lg text-center text-md">{skill.name}</p>
                  </motion.div>
                ))
              ) : 
              selectedStack == "Other"
              ? (
                otherStack.map((skill, index) => (
                  <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} key={index} className="flex hover:scale-105 flex-col items-center justify-center">
                    {skill.picture}
                    <p className="text-sm lg:text-lg text-center text-md">{skill.name}</p>
                  </motion.div>
                ))
              )
              : 
              selectedStack === "Cloud"
              ? (
                cloudStack.map((skill, index) => (
                  <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} key={index} className="flex hover:scale-105 flex-col items-center justify-center">
                    {skill.picture}
                    <p className="text-sm lg:text-lg text-center text-md">{skill.name}</p>
                  </motion.div>
                ))
              ) :
              selectedStack === "Deployment"
              ? (
                deployStack.map((skill, index) => (
                  <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} key={index} className="flex hover:scale-105 flex-col items-center justify-center">
                    {skill.picture}
                    <p className="text-sm lg:text-lg text-center text-md">{skill.name}</p>
                  </motion.div>
                ))
              ) :
              selectedStack === "All" ? (
                allUniqueStacks.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex hover:scale-105 flex-col items-center justify-center overflow-scroll"
                  >
                    {skill.picture}
                    <p className="text-sm lg:text-lg text-center text-md">{skill.name}</p>
                  </motion.div>
                ))
              ):
              selectedStack
          }
        </div>
      </div>
    </div>
  )
}

export default Skills;