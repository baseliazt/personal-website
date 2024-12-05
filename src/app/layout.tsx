import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"], // Adjust subsets if needed
  weight: ["400", "500", "700"], // Include desired font weights
  variable: "--font-manrope", // Optional: CSS variable for font family
});

export const metadata: Metadata = {
  title: "Ilyas Arya",
  description:
    "Ilyas Arya is a software engineer who builds accessible, inclusive products and digital experiences for the web, application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
