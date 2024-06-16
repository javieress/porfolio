import ExperienceItem from "./ExperienceItem";

import "../../styles/Experience/Experience.css";

const experiences = [
  {
    title: "Desarrollador Web",
    company: "Empresa",
    date: "2020 - 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget urna et nulla consectetur.",
  },
  {
    title: "Desarrollador Web",
    company: "Empresa",
    date: "2020 - 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget urna et nulla consectetur.",
  },
];

export default function Experience() {
  return (
    <section className="experience">
      {/* title */}
      <h1 className="experience_title">Experiencia</h1>
      {/* experience items */}
      {experiences.map((experience, index) => (
        <ExperienceItem key={index} {...experience} />
      ))}
    </section>
  );
}
