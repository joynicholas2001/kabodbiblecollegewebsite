import type { Metadata } from "next";
import { Source_Sans_3, Plus_Jakarta_Sans, Poppins, Ramabhadra } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/layout/ScrollToTop";
import SiteLayout from "@/components/layout/SiteLayout";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
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
    <html lang="en" className={`${sourceSans.variable} ${plusJakarta.variable} ${poppins.variable} ${ramabhadra.variable}`}>
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
