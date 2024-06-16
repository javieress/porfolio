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
          href="github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer_link"
        >
          Github
        </a>

        {/* linkedin */}
        <a
          href="linkedin.com"
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
