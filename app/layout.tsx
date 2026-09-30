import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thimira Nirmal — AI Engineer & Machine Learning Developer",
  description:
    "Explore Thimira Nirmal’s work in artificial intelligence, machine learning, and full stack development. Building useful intelligence from complex ideas.",
  openGraph: {
    title: "Thimira Nirmal — AI Engineer",
    description:
      "AI systems, machine learning experiments, and thoughtful digital experiences.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Thimira Nirmal — AI Engineer",
    description:
      "AI systems, machine learning experiments, and thoughtful digital experiences.",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
