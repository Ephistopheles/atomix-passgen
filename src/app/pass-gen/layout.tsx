import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generar contraseña",
  description: "Generate a strong password.",
};

const PasswordGeneratorLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => <>{children}</>;

export default PasswordGeneratorLayout;
