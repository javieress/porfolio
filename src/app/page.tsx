import Experience from "@/components/Experience/Experience";
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
      {/* About me */}
    </main>
  );
}
