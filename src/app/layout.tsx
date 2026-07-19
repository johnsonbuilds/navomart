import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NAVO — Premium Cross-Border E-Commerce",
  description: "Discover premium products curated from around the world. Duty-free pricing, express international shipping, and 30-day free returns.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
