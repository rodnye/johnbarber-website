import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import faviconImg from "@/assets/favicon.jpeg";
import "@/styles/index.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

if (!process.env.NEXT_PUBLIC_APP_URL) throw new Error("No APP URL provided");

const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "TheBlessed Style website",
  description: "Servicio de barbería en el Rpt. Eléctrico. Arroyo Naranjo.",
  keywords:
    "barbero, barberia, cortes de cabello, cuba, la habana, arroyo naranjo",
  authors: [{ name: "Rodny Estrada", url: "mailto:rrodnyestrada1@gmail.com" }],
  openGraph: {
    title: "TheBlessed Style",
    description: "Servicio de barbería en el Rpt. Eléctrico. Arroyo Naranjo.",
    images: [faviconImg.src],
    url: baseUrl,
  },
  icons: {
    icon: faviconImg.src,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
