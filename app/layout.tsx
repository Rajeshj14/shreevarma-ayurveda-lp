import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "@/component/Navbar";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-family",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shreevarma's Wellness | Online Ayurveda Consultation",
  description:
    "Book secure online Ayurveda and Siddha consultations with Shreevarma doctors for personalized treatment guidance from home.",
  icons: {
    icon: [
      { url: "/icons.webp", sizes: "any", type: "image/webp" },
      { url: "/icons.webp", sizes: "512x512", type: "image/webp" },
    ],
    apple: [{ url: "/icons.webp", sizes: "180x180", type: "image/webp" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
