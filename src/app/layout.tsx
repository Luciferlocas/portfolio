import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./context/providers";
import { ProjectProvider } from "./context/ProjectContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rohit Somvanshi",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-tr from-50% from-[#d6e3f8] to-pink-100`}
      >
        <Providers>
          <ProjectProvider>{children}</ProjectProvider>
        </Providers>
      </body>
    </html>
  );
}
