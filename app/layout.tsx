import type { Metadata } from "next";
 
import "./globals.css";
import { Mona_Sans } from "next/font/google";
import { Toaster } from "sonner";

const mona_Sans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Skill Scanner",
  description: "AI-powered interview assistant that conducts, evaluates, and scores candidates with real-time insights — helping you hire smarter and faster.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${mona_Sans.className} antialiased pattern`}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
