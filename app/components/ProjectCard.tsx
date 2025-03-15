type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  languages: string[];
};

const ProjectCard = ({ title, description, image, link, languages }: ProjectCardProps) => {
  return (
    <div className="card bg-base-100 w-96 h-max shadow-sm hover:cursor-pointer hover:scale-105 transition-all" onClick={() => {open(link)}}>
      <figure>
        <img
          src={image}
          alt="project" 
          className="m-2 object-fit h-32 self-center"
          />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
        </h2>
        <p>{description}</p>
        <div className="flex flex-row flex-wrap gap-2">
          {languages.map((language, index) => (
            <div key={index} className="!badge !badge-primary !text-white">{language}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;