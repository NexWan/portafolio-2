import  ProjectCard  from "./ProjectCard";

const Projects = () => {
  return (
    <div className="w-full h-full main-bg flex flex-col  justify-center">
      <div className="flex flex-col second-bg w-full h-1/4 justify-center">
        <div className="flex flex-col justify-center max-w-2xl pl-5">
          <h3 className="text-4xl mb-5">Projects</h3>
          <p>Here you can find some of my projects. You can sort them by programming language!<br></br>
          You can click on the project card and it will take you to the project page.
          </p>
        </div>
      </div>
      <div className="container flex flex-row w-full justify-center h-3/4">
        <div className="flex flex-col justify-start w-1/4 third-bg h-full self-start pl-5">
          <h3 className="text-2xl pt-20 pb-5">Programming Languages</h3>
          <ul className="list-disc pl-5">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Python</li>
            <li>Java</li>
            <li>C++</li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProjectCard title="SpotiPlaying" description="An embedded SVG that displays the currently playing song on Spotify." image="https://spoti-playing.vercel.app/api/svg?userId=31yzahwadeqrj7t3znaogbz63vjm&compact=true" link="/project1" languages={["TypeScript", "Spotify API", "NextJS", "PostgreSQL"]} />
            <ProjectCard title="MindScrap" description="Web scrapper made with Python that scrapes data from Mindbox and generates schedules for ITS students." image="image2.jpg" link="/project2" languages={["Python", "Java"]} />
            <ProjectCard title="Project 3" description="Description of Project 3" image="image3.jpg" link="/project3" languages={["C++", "JavaScript"]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
