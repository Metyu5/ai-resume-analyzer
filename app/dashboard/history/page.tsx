import { Metadata } from "next";
import HistoryClient from "./HistoryClient";

export const metadata: Metadata = {
  title: "Riwayat Analisis — ResumeAI",
  description: "Lihat riwayat analisis resume Anda di ResumeAI.",
  robots: { index: false, follow: false },
};

export default function HistoryPage() {
  return <HistoryClient />;
}
