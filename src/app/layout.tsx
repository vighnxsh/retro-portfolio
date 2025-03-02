import type { Metadata } from "next";
import localFont from "next/font/local";
import { Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const arrayFont = localFont({
  src: "./fonts/Array-Regular.woff",
  variable: "--font-array",
  weight: "100 900",
});

// Add the pixel font - Press Start 2P (more authentic but heavier)
const pixelFont = Press_Start_2P({
  subsets: ["latin"],
  variable: "--font-pixel",
  weight: ["400"],
});

// Add VT323 as an alternative pixel font (more readable)
const pixelFontAlt = VT323({
  subsets: ["latin"],
  variable: "--font-pixel-alt",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "My Resume",
  description: "Personal resume and portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${arrayFont.variable} ${pixelFont.variable} ${pixelFontAlt.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
