"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AdmissionsComingSoonBanner from "@/components/AdmissionsComingSoonBanner";
import AnnouncementBar from "@/components/layout/AnnouncementBar";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <div className="sticky top-0 left-0 right-0 z-50 flex flex-col">
        <AnnouncementBar />
        <Navbar />
      </div>
      <AdmissionsComingSoonBanner />
      <main className="flex-1 min-h-[100vh]">{children}</main>
      <Footer />
    </>
  );
}
