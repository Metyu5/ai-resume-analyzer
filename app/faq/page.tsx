import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

const faqData = [
  {
    category: "Tentang Layanan",
    items: [
      {
        question: "Apa itu AI Resume Analyzer?",
        answer:
          "AI Resume Analyzer adalah platform analisis resume berbasis kecerdasan buatan yang membantu pencari kerja menilai kualitas resume mereka. Kami memberikan skor ATS (Applicant Tracking System), analisis kecocokan kata kunci, serta rekomendasi perbaikan yang spesifik dan dapat langsung diterapkan.",
      },
      {
        question: "Bagaimana cara kerja AI Resume Analyzer?",
        answer:
          "Cukup unggah resume Anda dalam format PDF atau DOCX, lalu masukkan deskripsi pekerjaan yang Anda inginkan (opsional). AI kami akan menganalisis struktur, isi, format, dan kata kunci resume Anda, lalu menghasilkan skor ATS beserta laporan lengkap berisi temuan, kata kunci yang belum terpenuhi, serta saran perbaikan.",
      },
      {
        question: "Apakah AI Resume Analyzer gratis?",
        answer:
          "Kami menyediakan analisis dasar secara gratis. Untuk analisis mendalam dengan rekomendasi lengkap, laporan detail, dan fitur premium lainnya, tersedia paket Premium dengan harga Rp49.000 (sekali bayar).",
      },
    ],
  },
  {
    category: "Teknis & Format",
    items: [
      {
        question: "Format file apa yang didukung?",
        answer:
          "Kami mendukung format PDF dan DOCX. Pastikan ukuran file tidak lebih dari 5MB. Untuk hasil terbaik, kami merekomendasikan format PDF karena menjaga formatting tetap konsisten saat diproses oleh AI.",
      },
      {
        question: "Apa itu skor ATS dan bagaimana cara membacanya?",
        answer:
          "Skor ATS adalah penilaian dari 0-100 yang menunjukkan seberapa kompatibel resume Anda dengan sistem Applicant Tracking System (ATS) yang digunakan oleh perusahaan. Skor 80 ke atas dianggap sangat baik. Skor 50-79 perlu beberapa perbaikan. Skor di bawah 50 menunjukkan ada banyak hal yang perlu diperbaiki agar resume Anda lolos filter ATS.",
      },
      {
        question: "Mengapa saya perlu memasukkan deskripsi pekerjaan?",
        answer:
          "Deskripsi pekerjaan membantu AI kami memahami posisi spesifik yang Anda lamar. Dengan informasi ini, analisis menjadi lebih akurat karena AI dapat membandingkan resume Anda dengan persyaratan aktual pekerjaan, termasuk kata kunci, skill, dan kualifikasi yang dicari oleh perusahaan.",
      },
      {
        question: "Apakah resume saya disimpan di server?",
        answer:
          "Tidak. Resume Anda hanya diproses untuk analisis dan tidak disimpan secara permanen. Data Anda dihapus secara otomatis dalam waktu 30 hari. Kami tidak membagikan data Anda kepada pihak ketiga mana pun. Privasi Anda adalah prioritas kami.",
      },
    ],
  },
  {
    category: "Hasil Analisis",
    items: [
      {
        question: "Apa yang ditampilkan dalam laporan analisis?",
        answer:
          "Laporan analisis mencakup: (1) Skor ATS keseluruhan, (2) Jumlah kata kunci yang cocok dari deskripsi pekerjaan, (3) Temuan detail (kekuatan dan kelemahan resume), (4) Daftar kata kunci yang belum terpenuhi, dan (5) Saran perbaikan yang dapat langsung diterapkan.",
      },
      {
        question: "Bagaimana cara meningkatkan skor ATS saya?",
        answer:
          "Beberapa tips utama: (1) Gunakan format yang bersih tanpa tabel atau kolom, (2) Sertakan kata kunci dari deskripsi pekerjaan secara natural, (3) Gunakan judul section yang standar (Pengalaman Kerja, Pendidikan, Skills), (4) Hindari penggunaan grafik atau ikon, (5) Simpan dalam format PDF. Gunakan rekomendasi spesifik dari laporan analisis kami untuk perbaikan yang tepat sasaran.",
      },
      {
        question: "Apakah analisis ini bisa diandalkan 100%?",
        answer:
          "AI Resume Analyzer dirancang untuk memberikan analisis yang akurat dan membantu. Namun, kami menyarankan untuk menggunakan hasil analisis sebagai panduan, bukan satu-satunya acuan. Kombinasikan dengan pertimbangan profesional Anda dan, jika memungkinkan, minta feedback dari mentor atau perekrut di bidang Anda.",
      },
    ],
  },
  {
    category: "Akun & Pembayaran",
    items: [
      {
        question: "Apakah saya perlu membuat akun?",
        answer:
          "Untuk menggunakan analisis dasar, Anda tidak perlu membuat akun. Cukup unggah resume dan langsung dapatkan hasilnya. Untuk fitur premium dan menyimpan riwayat analisis, Anda perlu membuat akun.",
      },
      {
        question: "Metode pembayaran apa yang diterima?",
        answer:
          "Kami menerima pembayaran melalui berbagai metode yang populer di Indonesia, termasuk transfer bank, e-wallet (GoPay, OVO, Dana, ShopeePay), dan kartu kredit/debit. Semua transaksi diproses melalui payment gateway yang aman dan terenkripsi.",
      },
      {
        question: "Apakah ada jaminan uang kembali?",
        answer:
          "Ya. Kami menawarkan jaminan uang kembali dalam waktu 7 hari setelah pembelian jika Anda tidak puas dengan layanan Premium kami. Hubungi kami melalui email untuk proses pengembalian dana.",
      },
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    }))
  ),
};

export const metadata: Metadata = {
  title: "FAQ - Pertanyaan Umum tentang AI Resume Analyzer",
  description:
    "Temukan jawaban atas pertanyaan umum tentang AI Resume Analyzer: cara kerja, format yang didukung, skor ATS, privasi data, pembayaran, dan tips optimasi resume.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-gradient-to-b from-blue-50/40 to-white pb-24 pt-32">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Container className="max-w-3xl">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground transition hover:text-foreground"
          >
            &larr; Kembali ke Beranda
          </Link>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Pertanyaan Umum (FAQ)
          </h1>
          <p className="mt-4 text-muted-foreground">
            Jawaban atas pertanyaan yang paling sering ditanyakan tentang AI
            Resume Analyzer. Tidak menemukan jawaban? Hubungi kami melalui{" "}
            <Link href="/help" className="text-blue-600 underline">
              Pusat Bantuan
            </Link>
            .
          </p>

          <div className="mt-14 space-y-14">
            {faqData.map((category) => (
              <section key={category.category}>
                <h2 className="mb-6 text-lg font-semibold text-foreground">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <details
                      key={item.question}
                      className="group rounded-2xl border border-gray-100 bg-white shadow-sm [&[open]]:shadow-md"
                    >
                      <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 text-base font-medium text-foreground select-none marker:hidden">
                        {item.question}
                        <svg
                          className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </summary>
                      <div className="border-t border-gray-50 px-6 pb-6 pt-4 text-muted-foreground leading-relaxed">
                        {item.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-blue-100 bg-blue-50 p-8 text-center">
            <h2 className="text-xl font-bold">Punya Pertanyaan Lain?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Tim kami siap membantu Anda. Kirim email ke{" "}
              <a
                href="mailto:support@airesumeanalyzer.com"
                className="text-blue-600 underline"
              >
                support@airesumeanalyzer.com
              </a>{" "}
              atau kunjungi{" "}
              <Link href="/help" className="text-blue-600 underline">
                Pusat Bantuan
              </Link>{" "}
              kami.
            </p>
            <Link
              href="/analyze"
              className="mt-6 inline-block rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700"
            >
              Coba Sekarang Gratis
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
