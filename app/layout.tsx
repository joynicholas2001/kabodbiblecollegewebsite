import type { Metadata } from "next";
import { Cinzel, Plus_Jakarta_Sans, Poppins, Ramabhadra } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/layout/ScrollToTop";
import SiteLayout from "@/components/layout/SiteLayout";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700", "800", "900"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const ramabhadra = Ramabhadra({
  weight: "400",
  subsets: ["telugu"],
  variable: "--font-telugu",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kabod Bible College",
    template: "%s | Kabod Bible College",
  },
  description:
    "Kabod Bible College — Equipping believers with biblical knowledge, spiritual wisdom, and ministry skills for a life of purpose and service.",
  keywords: [
    "Bible College",
    "Christian Education",
    "Theology",
    "Ministry Training",
    "Kabod",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Kabod Bible College",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${cinzel.variable} ${poppins.variable} ${ramabhadra.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "if('scrollRestoration' in history) history.scrollRestoration='manual';",
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col font-sans">
        <ScrollToTop />
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
