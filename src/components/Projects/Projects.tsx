import "../../styles/Projects/Projects.css";
import ProjectItem from "./ProjectItem";

type Project = {
  id: string;
};

type ProjectItem = {
  title: string;
  technologies: string[];
  description: string;
  image: string;
  github: string;
  demo: string;
};

export default function Projects({ id }: Project) {
  const projects: ProjectItem[] = [
    {
      title: "Proyecto 1",
      technologies: ["React", "Node.js", "MongoDB"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget urna et nulla consectetur.",
      image: "https://via.placeholder.com/150",
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Proyecto 2",
      technologies: ["React", "Node.js", "MongoDB"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget urna et nulla consectetur.",
      image: "https://via.placeholder.com/150",
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ];
  return (
    <section className="projects" id={id}>
      {/* title */}
      <h1 className="projects_title">Proyectos</h1>
      {/* projects */}
      {projects.map((project, index) => (
        <ProjectItem key={index} {...project} />
      ))}
    </section>
  );
}
