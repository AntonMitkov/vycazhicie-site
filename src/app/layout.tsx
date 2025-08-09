import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Выкажыце",
  description: '(Вы)кажыце - праект, які быў створаны 7 гадоў таму, але праіснаваў нядоўга, і вось 4 гады таму яго вырашылі аднавіць. "(Вы)кажыце" развіваўся и рабіўся маштабней. Гэта мерапрыемства, на якім вы можаце падзяліцца тэмай, якая цікавіць вас, бо наш слоган гэта "Выкажыся і будзь пачутым".',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="by" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
        />
        
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
