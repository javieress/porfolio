"use client";
import { Button } from "@nextui-org/react";
import "../../styles/Welcome/Welcome.css";
import Image from "next/image";

type WelcomeProps = {
  id: string;
};

export default function Welcome({ id }: WelcomeProps) {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "assets/Javier_Rojas_CV.pdf";
    link.download = "Javier_Rojas_CV.pdf";
    link.click();
  };

  return (
    <section className="welcome" id={id}>
      {/* title */}
      <h1 className="welcome_title">Hola, soy Javier Rojas</h1>
      {/* description */}
      <p className="welcome_description">
        <strong>Ingeniero Civil en Computación e Informática</strong> de la
        Universidad Católica del Norte especializado en desarrollo web y
        análisis de datos.
      </p>
      {/* buttons */}
      <span className="welcome_buttons">
        <Button color="default" className="welcome_button">
          {/* ! todo add email icon */}
          <a href="mailto:javier.est.rojas@gmail.com">Contacto</a>
        </Button>
        <Button color="default" className="welcome_button">
          {/* ! todo: add linkedin icon */}
          <a
            href="https://www.linkedin.com/in/javieres/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </Button>
        <Button color="default" className="welcome_button" onClick={downloadCV}>
          Descargar CV
        </Button>
      </span>
    </section>
  );
}
