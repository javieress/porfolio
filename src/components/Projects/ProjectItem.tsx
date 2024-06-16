import Image from "next/image";

import "../../styles/Projects/ProjectItem.css";

type ProjectItemProps = {
  title: string;
  technologies: string[];
  description: string;
  image: string;
  github: string;
  demo: string;
};

export default function ProjectItem({
  title,
  technologies,
  description,
  image,
  github,
  demo,
}: ProjectItemProps) {
  return (
    <div className="project_item">
      <div className="project_image">
        {/* <Image src={image} alt={title} /> */}
      </div>
      <div className="project_content">
        <h2 className="project_title">{title}</h2>
        <ul className="project_technologies">
          {technologies.map((technology, index) => (
            <li className="project_technology" key={index}>
              {technology}
            </li>
          ))}
        </ul>
        <p className="project_description">{description}</p>
        <div className="project_links">
          <a href={github} target="_blank" rel="noopener noreferrer">
            Github
          </a>
          <a href={demo} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}
