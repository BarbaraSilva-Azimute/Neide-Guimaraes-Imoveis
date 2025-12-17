import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloating } from "@/components/WhatsAppFloating";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Neide Guimarães Imóveis",
  description: "Especialista nos melhores endereços de Manaus.",
};

import { getSettings } from "@/lib/content";

// ... other imports

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSettings();

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${dmSans.variable} ${playfair.variable} font-sans antialiased min-h-screen flex flex-col bg-background text-primary`}
      >
        <Header settings={settings} />
        <main className="flex-grow">
          {children}
        </main>
        <WhatsAppFloating settings={settings} />
        <Footer settings={settings} />
      </body>
    </html>
  );
}
