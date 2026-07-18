import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Pusat Bantuan - AI Resume Analyzer",
  description:
    "Temukan jawaban atas pertanyaan umum tentang cara menggunakan AI Resume Analyzer, mengunggah resume, dan memahami hasil analisis.",
  alternates: {
    canonical: "/help",
  },
};

const faqs = [
  {
    question: "Bagaimana cara menggunakan AI Resume Analyzer?",
    answer:
      "Cukup unggah resume Anda dalam format PDF atau DOCX, lalu tempelkan deskripsi pekerjaan yang Anda inginkan (opsional). AI akan menganalisis resume Anda dan memberikan skor ATS beserta rekomendasi perbaikan dalam hitungan detik.",
  },
  {
    question: "Format file apa yang didukung?",
    answer:
      "Kami mendukung format PDF dan DOCX. Pastikan file tidak lebih dari 5MB. Untuk hasil terbaik, gunakan format PDF karena menjaga formatting tetap konsisten.",
  },
  {
    question: "Apakah data resume saya aman?",
    answer:
      "Ya. Resume Anda hanya diproses untuk analisis dan tidak disimpan secara permanen di server kami. Kami tidak membagikan data Anda kepada pihak ketiga mana pun.",
  },
  {
    question: "Apa itu skor ATS?",
    answer:
      "Skor ATS adalah penilaian dari 0-100 yang menunjukkan seberapa kompatibel resume Anda dengan sistem Applicant Tracking System (ATS) yang digunakan oleh perusahaan. Semakin tinggi skor, semakin besar kemungkinan resume Anda lolos filter otomatis.",
  },
  {
    question: "Bagaimana cara meningkatkan skor ATS saya?",
    answer:
      "Perhatikan rekomendasi yang diberikan setelah analisis. Tips umumnya meliputi: gunakan format yang bersih, sertakan kata kunci dari deskripsi pekerjaan, hindari tabel dan grafik, dan gunakan judul section yang standar.",
  },
  {
    question: "Apakah analisis ini gratis?",
    answer:
      "AI Resume Analyzer menyediakan analisis dasar secara gratis. Untuk analisis mendalam dengan rekomendasi lengkap, Anda dapat menggunakan paket Premium kami.",
  },
];

export default function HelpPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-gradient-to-b from-blue-50/40 to-white pb-24 pt-32">
        <Container className="max-w-3xl">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground transition hover:text-foreground"
          >
            &larr; Kembali ke Beranda
          </Link>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Pusat Bantuan
          </h1>
          <p className="mt-4 text-muted-foreground">
            Pertanyaan yang sering ditanyakan tentang AI Resume Analyzer.
          </p>

          <div className="mt-12 space-y-6">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <h2 className="text-lg font-semibold">{faq.question}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-gray-100 bg-gray-50 p-8 text-center">
            <h2 className="text-lg font-bold">Masih Punya Pertanyaan?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Hubungi kami melalui email di{" "}
              <a
                href="mailto:support@airesumeanalyzer.com"
                className="text-blue-600 underline"
              >
                support@airesumeanalyzer.com
              </a>
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
