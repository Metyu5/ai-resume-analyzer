import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Kebijakan Privasi - AI Resume Analyzer",
  description:
    "Kebijakan privasi AI Resume Analyzer. Pelajari bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
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
            Kebijakan Privasi
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Terakhir diperbarui: 18 Juli 2026
          </p>

          <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-foreground">1. Pengantar</h2>
              <p className="mt-2">
                AI Resume Analyzer (&quot;Kami&quot;) menghargai privasi pengguna kami. Kebijakan Privasi
                ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi
                informasi pribadi Anda saat menggunakan layanan kami.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">2. Informasi yang Kami Kumpulkan</h2>
              <p className="mt-2">
                <strong>Informasi yang Anda berikan:</strong> Resume yang Anda unggah, deskripsi
                pekerjaan, dan informasi kontak (jika Anda menghubungi kami).
              </p>
              <p className="mt-2">
                <strong>Informasi otomatis:</strong> Alamat IP, jenis perangkat, browser, dan data
                penggunaan layanan untuk tujuan analitik dan keamanan.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">3. Penggunaan Informasi</h2>
              <p className="mt-2">
                Kami menggunakan informasi yang dikumpulkan untuk: menyediakan dan meningkatkan
                Layanan, memproses analisis resume Anda, mengirimkan hasil analisis, dan menjaga
                keamanan platform kami.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">4. Penyimpanan dan Penghapusan Data</h2>
              <p className="mt-2">
                Resume yang Anda unggah diproses untuk analisis dan tidak disimpan secara permanen
                di server kami setelah analisis selesai. Data Anda akan dihapus secara otomatis
                dalam waktu 30 hari setelah analisis dilakukan.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">5. Berbagi Data dengan Pihak Ketiga</h2>
              <p className="mt-2">
                Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada
                pihak ketiga untuk tujuan pemasaran. Data hanya dibagikan dengan penyedia layanan
                hosting dan infrastruktur yang membantu operasional kami, dan mereka terikat oleh
                perjanjian kerahasiaan.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">6. Keamanan Data</h2>
              <p className="mt-2">
                Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang wajar untuk
                melindungi data pribadi Anda dari akses, penggunaan, atau pengungkapan yang tidak
                sah. Namun, tidak ada metode transmisi internet yang 100% aman.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">7. Hak Pengguna</h2>
              <p className="mt-2">
                Anda berhak untuk: meminta akses ke data pribadi Anda, meminta koreksi data yang
                tidak akurat, meminta penghapusan data Anda, dan menolak pemrosesan data tertentu.
                Untuk menggunakan hak-hak ini, silakan hubungi kami.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">8. Cookie</h2>
              <p className="mt-2">
                Kami menggunakan cookie yang diperlukan untuk operasional Layanan. Untuk informasi
                lebih lanjut, silakan lihat{" "}
                <Link href="/cookies" className="text-blue-600 underline">
                  Kebijakan Cookie
                </Link>{" "}
                kami.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">9. Perubahan Kebijakan</h2>
              <p className="mt-2">
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan
                dipublikasikan di halaman ini dengan tanggal pembaruan yang tercantum di atas.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">10. Hubungi Kami</h2>
              <p className="mt-2">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami
                melalui email di{" "}
                <a
                  href="mailto:privacy@airesumeanalyzer.com"
                  className="text-blue-600 underline"
                >
                  privacy@airesumeanalyzer.com
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
