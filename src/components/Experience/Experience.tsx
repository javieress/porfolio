import "../../styles/Experience/Experience.css";
import ExperienceItem from "./ExperienceItem";
import fs from "fs";
import path from "path";

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
  const filePath = path.join(process.cwd(), "src/data", "experiences.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const experiences: ExperienceItem[] = JSON.parse(jsonData);

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
