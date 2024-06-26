import AboutMe from "@/components/AboutMe/AboutMe";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Welcome from "@/components/Welcome/Welcome";

export const runtime = "edge";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Welcome */}
      <Welcome id="welcome" />
      {/* Experience */}
      <Experience id="experience" />
      {/* Projects */}
      <Projects id="projects" />
      {/* About me */}
      <AboutMe id="about-me" />
    </main>
  );
}
