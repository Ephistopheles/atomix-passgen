import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "@/styles/global.css";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PassGen | AtomixTools",
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
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon-120x120.png", sizes: "120x120", type: "image/png" },
    ],
  },
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
