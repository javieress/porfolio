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
      title: "Expenses Tracker",
      technologies: ["Vue", "JavaScript"],
      description:
        "App para llevar un control de tus gastos. Puedes agregar, eliminar y editar gastos.",
      image: "/images/expense-tracker.webp",
      github: "https://github.com/javieress/vue-expense-tracker",
      demo: "https://vue-expense-tracker-6zf.pages.dev",
    },
    {
      title: "Proyecto 2",
      technologies: ["React", "Node.js", "MongoDB"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget urna et nulla consectetur.",
      image: "/images/project-2.png",
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
