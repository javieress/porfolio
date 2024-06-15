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
        maxWidth: "700px",
      }}
    >
      {/* Welcome */}
      <Welcome />
      {/* Experience */}
      {/* Projects */}
      {/* About me */}
    </main>
  );
}
