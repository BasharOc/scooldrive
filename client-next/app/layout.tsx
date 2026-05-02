import type { Metadata } from "next";
import CookieBanner from "@/components/CookieBanner/CookieBanner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fahrschule LG München - Führerschein, Auto, Motorrad | Scooldrive",
  description:
    "Professionelle Fahrschule in München. Auto-, Motorrad- und Anhängerführerschein mit innovativer Methode. ✓ Flexible Kurse ✓ Top-Bestehensquote",
  keywords: "Fahrschule München, Führerschein, Auto, Motorrad, Anhänger",
  icons: {
    icon: "/logo-icon.jpg",
    shortcut: "/logo-icon.jpg",
    apple: "/logo-icon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full antialiased">
      <body className=" min-h-full">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
