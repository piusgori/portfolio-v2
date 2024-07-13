import type { Metadata } from "next";
import { Roboto_Serif } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Serif({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ian Pius | Software Developer & CIO | Expert in React, NodeJS, MongoDB",
  description: "Ian Pius is a seasoned software developer and Chief Information Officer at The Tech Band Originals. Specializing in frontend and backend development, Ian has expertise in React JS, React Native, NextJS, AngularJS, NodeJS, MongoDB, SQL, and Django. Explore Ian's portfolio to see his innovative projects, professional experience, and insightful tech articles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
