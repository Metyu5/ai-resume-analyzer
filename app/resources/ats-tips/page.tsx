import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Tips ATS: Cara Optimasi Resume untuk Sistem Tracking",
  description:
    "Ketahui cara kerja ATS dan bagaimana mengoptimalkan resume Anda agar lolos filter otomatis. Tips praktis yang bisa langsung diterapkan.",
  alternates: {
    canonical: "/resources/ats-tips",
  },
};

const tips = [
  {
    title: "Gunakan Judul yang Jelas",
    description:
      "Setiap bagian resume harus menggunakan judul standar yang mudah dikenali ATS. Gunakan 'Pengalaman Kerja' bukan 'Perjalanan Karier'. Gunakan 'Pendidikan' bukan 'Riwayat Akademik'. ATS mencari kata kunci spesifik untuk mengategorikan informasi.",
  },
  {
    title: "Hindari Fitur Visual",
    description:
      "Tabel, kolom, grafik, ikon, dan header/footer sering kali tidak terbaca oleh ATS. Gunakan format teks biasa dengan poin-poin (bullet points). Jika Anda ingin tampil menarik, buat versi desain untuk perekrut manusia dan versi ATS-friendly untuk upload ke sistem.",
  },
  {
    title: "Sertakan Kata Kunci dari Deskripsi Pekerjaan",
    description:
      "Baca deskripsi pekerjaan dengan saksama. Catat kata kunci seperti nama software, skill teknis, atau sertifikasi yang disebutkan. Masukkan kata-kata ini ke dalam resume Anda, terutama di bagian skills dan pengalaman kerja. Ini adalah cara paling efektif untuk lolos ATS.",
  },
  {
    title: "Gunakan Format Tanggal yang Konsisten",
    description:
      "ATS bisa bingung dengan format tanggal yang berbeda-beda. Pilih satu format dan gunakan secara konsisten. Format yang direkomendasikan: 'Januari 2020 - Sekarang' atau '2020 - 2023'. Hindari format pendek seperti '01/2020'.",
  },
  {
    title: "Simpan dalam Format yang Tepat",
    description:
      "PDF adalah format paling aman untuk ATS karena menjaga format tetap konsisten. Namun, beberapa ATS lama mungkin kesulitan membaca PDF kompleks. DOCX juga diterima oleh sebagian besar ATS. Hindari format seperti JPG, PNG, atau TXT.",
  },
  {
    title: "Gunakan Email Profesional",
    description:
      "Gunakan email dengan nama Anda (nama@gmail.com), bukan email yang tidak profesional. Sertakan juga nomor telepon dalam format yang jelas: +62 812-xxxx-xxxx. Tambahkan LinkedIn URL dan portofolio jika relevan.",
  },
];

export default function AtsTipsPage() {
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
            Tips ATS: Cara Optimasi Resume untuk Sistem Tracking
          </h1>
          <p className="mt-4 text-muted-foreground">
            Memahami cara kerja ATS adalah kunci pertama untuk membuat resume
            yang lolos filter otomatis dan sampai ke tangan perekrut.
          </p>

          <div className="mt-12 space-y-8">
            {tips.map((tip, index) => (
              <article
                key={tip.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h2 className="text-lg font-semibold">{tip.title}</h2>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-blue-100 bg-blue-50 p-8 text-center">
            <h2 className="text-xl font-bold">Ingin Tahu Skor ATS Resume Anda?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Unggah resume Anda sekarang dan dapatkan analisis lengkap
              beserta rekomendasi perbaikan.
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
