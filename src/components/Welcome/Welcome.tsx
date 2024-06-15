import { Button } from "@nextui-org/react";
import "../../styles/Welcome/Welcome.css";
export default function Welcome() {
  return (
    <section>
      {/* title */}
      <h1>Hola, soy Javier Rojas</h1>
      {/* description */}
      <p>
        <strong>Ingeniero Civil en Computación e Informática</strong> de la
        Universidad Católica del Norte especializado en desarrollo web y
        análisis de datos.
      </p>
      {/* buttons */}
      <span>
        <Button isDisabled color="default">
          Button
        </Button>
        <Button isDisabled color="default">
          Button
        </Button>
      </span>
    </section>
  );
}
