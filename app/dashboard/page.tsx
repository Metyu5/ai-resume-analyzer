import type { Metadata } from "next";
import DashboardClient from "./DashboardClient";

export const metadata: Metadata = {
  title: "Dashboard - AI Resume Analyzer",
  description:
    "Kelola riwayat analisis resume Anda, lihat skor ATS sebelumnya, dan akses rekomendasi perbaikan yang tersimpan.",
  alternates: {
    canonical: "/dashboard",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function DashboardPage() {
  return <DashboardClient />;
}
