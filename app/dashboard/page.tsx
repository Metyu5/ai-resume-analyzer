import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

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
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-gradient-to-b from-blue-50/40 to-white pb-24 pt-32">
        <Container className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Dashboard
          </h1>
          <p className="mt-4 text-muted-foreground">
            Kelola riwayat analisis resume Anda di sini.
          </p>

          <div className="mt-12 rounded-2xl border border-gray-100 bg-white p-10 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
              <svg
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0"
                />
              </svg>
            </div>

            <h2 className="mt-6 text-xl font-semibold">Masuk untuk Melihat Dashboard</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Anda perlu masuk ke akun Anda untuk mengakses dashboard dan melihat
              riwayat analisis resume.
            </p>

            <div className="mt-8 flex justify-center gap-3">
              <Link
                href="/analyze"
                className="rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700"
              >
                Analisis Resume Sekarang
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
