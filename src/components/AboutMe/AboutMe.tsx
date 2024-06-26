import "../../styles/AboutMe/AboutMe.css";

type AboutMeProps = {
  id: string;
};

export default function AboutMe({ id }: AboutMeProps) {
  return (
    <section className="about_me" id={id}>
      <h1 className="about_me_title">Sobre mi</h1>
      <p className="about_me_description">
        <strong>Ingeniero Civil en Computación e Informática</strong> de la
        Universidad Católica del Norte y Licenciado en Ciencias de la
        Ingeniería. Experiencia en proyectos de{" "}
        <strong>desarrollo web con React, Angular y Node.js.</strong>
      </p>
      <p className="about_me_description">
        Conocimientos en{" "}
        <strong>analítica de datos y Machine Learning con Python</strong>, y uso
        de bases de datos relacionales <strong>(SQL)</strong>.
      </p>
      <p className="about_me_description">
        Manejo de versiones en <strong>Git</strong> y gestión de proyectos con
        la metodología <strong>Scrum</strong>.
      </p>
      <p className="about_me_description">
        Interesado en aprender nuevas tecnologías. Capaz de trabajar en equipos
        multidisciplinarios, con actitud de{" "}
        <strong>liderazgo y proactividad</strong>, y con disposición para
        aprender y enseñar.
      </p>
    </section>
  );
}
