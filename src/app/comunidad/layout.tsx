import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comunidad y Territorio | COLBREW™",
  description: "Más allá de una taza de café, COLBREW apoya iniciativas educativas, culturales y musicales en las regiones productoras de Colombia.",
};

export default function ComunidadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
