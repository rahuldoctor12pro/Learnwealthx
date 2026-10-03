import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learnwealthx",
  description: "Learn • Grow • Earn with AI Skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
