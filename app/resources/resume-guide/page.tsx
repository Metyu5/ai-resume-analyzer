import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Panduan Lengkap Membuat Resume yang Lolos ATS",
  description:
    "Pelajari cara membuat resume yang kompatibel dengan sistem ATS (Applicant Tracking System). Tips format, kata kunci, dan struktur resume yang efektif.",
  alternates: {
    canonical: "/resources/resume-guide",
  },
};

const sections = [
  {
    title: "Apa Itu ATS?",
    content:
      "ATS (Applicant Tracking System) adalah perangkat lunak yang digunakan perusahaan untuk mengelola dan memfilter lamaran kerja. Sebagian besar perusahaan besar menggunakan ATS untuk memindai resume sebelum dilihat oleh manusia. Jika resume Anda tidak kompatibel dengan ATS, kemungkinan besar tidak akan pernah dilihat oleh perekrut.",
  },
  {
    title: "Format Resume yang Benar",
    content:
      "Gunakan format yang sederhana dan bersih. Hindari tabel, kolom, grafik, atau header/footer. ATS membaca dokumen dari atas ke bawah, dari kiri ke kanan. Gunakan format standar: nama di atas, diikuti kontak, pengalaman kerja, pendidikan, dan skills. Format PDF atau DOCX adalah yang paling aman.",
  },
  {
    title: "Penggunaan Kata Kunci",
    content:
      "Perhatikan deskripsi pekerjaan yang Anda lamar. Identifikasi kata kunci penting seperti skill teknis, gelar, atau sertifikasi yang disebutkan. Masukkan kata-kata ini secara natural ke dalam resume Anda, terutama di bagian pengalaman kerja dan skills. Jangan melakukan keyword stuffing — cukup sebutkan secara relevan.",
  },
  {
    title: "Struktur yang Direkomendasikan",
    content:
      "1. Header: Nama lengkap, email, telepon, LinkedIn, portofolio\n2. Ringkasan: 2-3 kalimat tentang profil profesional Anda\n3. Pengalaman Kerja: Judul posisi, nama perusahaan, tanggal, dan pencapaian terukur\n4. Pendidikan: Gelar, institusi, tahun lulus\n5. Skills: Daftar skill relevan yang sesuai dengan deskripsi pekerjaan",
  },
  {
    title: "Kesalahan Umum yang Harus Dihindari",
    content:
      "Menggunakan tabel atau kolom yang rumit. Menambahkan foto (kecuali diminta). Menggunakan ikon atau grafik sebagai pengganti teks. Menulis dalam bentuk paragraf panjang tanpa poin-poin. Menggunakan format yang tidak umum seperti CV Eropa untuk lamaran di perusahaan Indonesia.",
  },
];

export default function ResumeGuidePage() {
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
            Panduan Lengkap Membuat Resume yang Lolos ATS
          </h1>
          <p className="mt-4 text-muted-foreground">
            Tips dan strategi untuk membuat resume Anda tidak hanya terbaca oleh
            mesin, tetapi juga menarik bagi perekrut.
          </p>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <article key={section.title}>
                <h2 className="text-xl font-semibold">{section.title}</h2>
                <p className="mt-3 whitespace-pre-line text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-blue-100 bg-blue-50 p-8 text-center">
            <h2 className="text-xl font-bold">Sudah Siap Menganalisis Resume Anda?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Gunakan AI Resume Analyzer untuk mengetahui seberapa kompatibel
              resume Anda dengan sistem ATS.
            </p>
            <Link
              href="/analyze"
              className="mt-6 inline-block rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700"
            >
              Analisis Resume Sekarang
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
