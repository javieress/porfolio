import "../../styles/Experience/ExperienceItem.css";

type ExperienceItemProps = {
  title: string;
  company: string;
  date: string;
  descriptions: string[];
};

export default function ExperienceItem({
  title,
  company,
  date,
  descriptions,
}: ExperienceItemProps) {
  return (
    <section className="experience_item">
      <section className="experience_item_left">
        {/* title */}
        <h2 className="experience_item_title">{title}</h2>
        {/* company */}
        <p className="experience_item_company">{company}</p>
        {/* date */}
        <p className="experience_item_date">{date}</p>
      </section>
      <section className="experience_item_right">
        {/* description */}
        {/* mostrar punto de ul */}
        <ul className="experience_item_description">
          {descriptions.map((description, index) => (
            <li key={index}>{description}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}
