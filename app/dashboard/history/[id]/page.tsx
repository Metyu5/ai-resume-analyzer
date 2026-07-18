import { Metadata } from "next";
import HistoryDetailClient from "./HistoryDetailClient";

export const metadata: Metadata = {
  title: "Detail Analisis — ResumeAI",
  description: "Lihat detail lengkap hasil analisis resume Anda.",
  robots: { index: false, follow: false },
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function HistoryDetailPage({ params }: PageProps) {
  const { id } = await params;
  return <HistoryDetailClient id={id} />;
}
