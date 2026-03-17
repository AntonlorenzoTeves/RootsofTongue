import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Roots of the Tongue",
  description: "Indigenous languages of BC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Remove Sidebar and main padding here */}
      <body className={`${geistSans.variable} ${geistMono.variable}`} style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}