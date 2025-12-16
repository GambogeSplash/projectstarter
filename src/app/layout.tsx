/**
 * Root Layout for Next.js App Router
 */

import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "CHIDI - Business Management Platform",
  description: "Conversational business management for storefronts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
