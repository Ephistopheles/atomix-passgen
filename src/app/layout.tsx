import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "@/styles/global.css";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Generar contraseña | AtomixTools",
  description:
    "Generate strong and secure passwords instantly with AtomixTools.",
  keywords: [
    "password",
    "generator",
    "password generator",
    "secure password",
    "AtomixTools",
    "utility",
    "contraseña",
    "generador",
    "generador de contraseñas",
  ],
  authors: [{ name: "Johan Amed", url: "https://github.com/Ephistopheles" }],
  applicationName: "PassGen",
  generator: "Next.js",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="es">
      <body className={`${rubik.variable} antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
