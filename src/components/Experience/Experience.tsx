import "../../styles/Experience/Experience.css";
import ExperienceItem from "./ExperienceItem";

type Experience = {
  id: string;
};

type ExperienceItem = {
  title: string;
  company: string;
  date: string;
  descriptions: string[];
};

export default function Experience({ id }: Experience) {
  const experiences: ExperienceItem[] = [
    {
      title: "Ingeniero de Software (Memorista)",
      company: "ME Elecmetal",
      date: "septiembre 2023 – enero 2024",
      descriptions: [
        "Desarrollo de una plataforma para manejar datos operacionales de molinos SAG en la industria minera",
        "Desarrollo full-stack utilizando Angular en el frontend, Node.js y Django en el backend, y MySQL para el manejo de datos, desde el diseño hasta la implementación",
        "Análisis de datos operacionales siguiendo la metodología CRISP-DM, y desarrollo de modelos de Machine Learning con Python (Pandas, Numpy, Scikit-learn)",
        "Aplicación de la metodología ágil Scrum y uso de GitLab para el manejo de versiones del sistema",
      ],
    },
    {
      title: "Ingeniero de Software (Practicante)",
      company: "WOM S.A",
      date: "diciembre 2022 – marzo 2023",
      descriptions: [
        "Desarrollo de una plataforma de visualización de incidencias en antenas de telefonía",
        "Desarrollo full-stack con React en el frontend, API en AWS para el backend y MySQL para el manejo de datos, desde el diseño hasta el desarrollo",
        "Optimización de procedimientos almacenados en MySQL para incrementar el rendimiento y la eficiencia de las operaciones internas",
        "Realización de consultas SQL para su posterior uso en Dashboards",
      ],
    },
  ];

  return (
    <section className="experience" id={id}>
      {/* title */}
      <h1 className="experience_title">Experiencia</h1>
      {/* experience items */}
      {experiences.map((experience, index) => (
        <ExperienceItem key={index} {...experience} />
      ))}
    </section>
  );
}
