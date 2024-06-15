import { Button } from "@nextui-org/react";
import "../../styles/Welcome/Welcome.css";
import Image from "next/image";
export default function Welcome() {
  return (
    <section className="welcome">
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
          Contacto
        </Button>
        <Button color="default" className="welcome_button">
          {/* ! todo: add linkedin icon */}
          Linkedin
        </Button>
      </span>
    </section>
  );
}
