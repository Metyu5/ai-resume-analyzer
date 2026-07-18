import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan - AI Resume Analyzer",
  description:
    "Syarat dan ketentuan penggunaan layanan AI Resume Analyzer. Baca ketentuan penggunaan sebelum menggunakan platform kami.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
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
            Syarat & Ketentuan
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Terakhir diperbarui: 18 Juli 2026
          </p>

          <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-foreground">1. Penerimaan Ketentuan</h2>
              <p className="mt-2">
                Dengan mengakses dan menggunakan AI Resume Analyzer (&quot;Layanan&quot;), Anda menyetujui
                untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak setuju dengan ketentuan
                ini, mohon untuk tidak menggunakan Layanan kami.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">2. Deskripsi Layanan</h2>
              <p className="mt-2">
                AI Resume Analyzer menyediakan layanan analisis resume berbasis kecerdasan buatan
                (AI). Layanan ini memberikan skor ATS, analisis kata kunci, serta rekomendasi
                perbaikan untuk meningkatkan kualitas resume pengguna.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">3. Akun Pengguna</h2>
              <p className="mt-2">
                Pengguna bertanggung jawab untuk menjaga kerahasiaan akun mereka. Pengguna harus
                segera memberitahukan kami jika ada penggunaan akun yang tidak sah atau pelanggaran
                keamanan lainnya.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">4. Penggunaan yang Dilarang</h2>
              <p className="mt-2">
                Pengguna tidak diperkenankan untuk: menggunakan Layanan untuk tujuan ilegal,
                mendistribusikan konten berbahaya, mencoba mendapatkan akses tidak sah ke sistem,
                atau melakukan aktivitas yang dapat merusak reputasi atau operasional Layanan.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">5. Hak Kekayaan Intelektual</h2>
              <p className="mt-2">
                Semua konten, fitur, dan teknologi yang digunakan dalam Layanan adalah milik AI
                Resume Analyzer dan dilindungi oleh hukum kekayaan intelektual yang berlaku.
                Pengguna diberikan lisensi terbatas untuk menggunakan Layanan sesuai ketentuan ini.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">6. Pembatalan dan Penghentian</h2>
              <p className="mt-2">
                Kami berhak untuk menghentikan atau membatasi akses pengguna ke Layanan tanpa
                pemberitahuan sebelumnya jika kami menilai ada pelanggaran terhadap ketentuan ini
                atau aktivitas yang merugikan.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">7. Penolakan Jaminan</h2>
              <p className="mt-2">
                Layanan disediakan &quot;sebagaimana adanya&quot; tanpa jaminan apa pun, baik tersurat
                maupun tersirat. Kami tidak menjamin bahwa Layanan akan selalu tersedia, tanpa
                kesalahan, atau sesuai dengan kebutuhan spesifik pengguna.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">8. Perubahan Ketentuan</h2>
              <p className="mt-2">
                Kami berhak memperbarui Syarat dan Ketentuan ini sewaktu-waktu. Perubahan akan
                berlaku efektif setelah dipublikasikan di halaman ini. Penggunaan Layanan yang
                berkelanjutan setelah perubahan merupakan penerimaan terhadap ketentuan yang baru.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">9. Hubungi Kami</h2>
              <p className="mt-2">
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi
                kami melalui email di{" "}
                <a
                  href="mailto:legal@airesumeanalyzer.com"
                  className="text-blue-600 underline"
                >
                  legal@airesumeanalyzer.com
                </a>
                .
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
