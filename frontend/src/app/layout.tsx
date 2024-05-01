import type { Metadata } from "next";
import "./globals.css";
import { Footer, NavBar } from "../../components";

export const metadata: Metadata = {
  title: "PrizePicks ParlayProwl",
  description: "A tool for generating more optimal PrizePicks parlays.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
