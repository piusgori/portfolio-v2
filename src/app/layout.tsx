import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { font } from "@/utils/config";

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
      <body className={font.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
