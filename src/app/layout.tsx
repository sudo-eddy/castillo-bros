import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Castillo's Auto Service",
  description:
    "Trusted auto diagnostics and repair serving Joliet and the greater Chicagoland area.",
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