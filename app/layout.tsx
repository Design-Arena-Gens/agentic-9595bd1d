import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BLDC Motor - Comprehensive Presentation",
  description: "An in-depth presentation on Brushless DC Motors - technology, applications, and advantages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {children}
      </body>
    </html>
  );
}
