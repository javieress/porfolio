import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Welcome from "@/components/Welcome/Welcome";
import Image from "next/image";

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
      <Welcome />
      {/* Experience */}
      <Experience />
      {/* Projects */}
      <Projects />
      {/* About me */}
    </main>
  );
}
