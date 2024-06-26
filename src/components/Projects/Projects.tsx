import "../../styles/Projects/Projects.css";
import ProjectItem from "./ProjectItem";
import fs from "fs";
import path from "path";

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
  const filePath = path.join(process.cwd(), "src/data", "projects.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const projects: ProjectItem[] = JSON.parse(jsonData);

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
