import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CodingCar — Kodowanie i Programowanie Samochodów | Ełk",
  description:
    "Profesjonalne kodowanie, programowanie i doposażenie samochodów. Kamil Pstrągowski — ekspert w dziedzinie adaptacji pojazdów. Obsługa całej Polski Wschodniej i Centralnej.",
  keywords:
    "kodowanie samochodu, programowanie auta, adaptacja europejska, doposażenie pojazdu, Ełk, warmińsko-mazurskie",
  openGraph: {
    title: "CodingCar — Ekspert w Kodowaniu Samochodów",
    description:
      "Kodowanie, programowanie i doposażenie pojazdów. Dostosowujemy Twoje auto do Twoich indywidualnych potrzeb.",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${syne.variable} ${outfit.variable}`}>
      <body className="font-body antialiased">
        <div className="noise-layer" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
