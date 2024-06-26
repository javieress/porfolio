import "../../styles/Footer/Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer_text">
        © {year} javieress. Todos los derechos reservados.
      </p>
      <span className="footer_links">
        {/* github */}
        <a
          href="https://github.com/javieress"
          target="_blank"
          rel="noopener noreferrer"
          className="footer_link"
        >
          Github
        </a>

        {/* linkedin */}
        <a
          href="https://www.linkedin.com/in/javieres/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer_link"
        >
          Linkedin
        </a>

        {/* email */}
      </span>
    </footer>
  );
}
