import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Kebijakan Cookie - AI Resume Analyzer",
  description:
    "Kebijakan cookie AI Resume Analyzer. Pelajari jenis cookie yang kami gunakan dan bagaimana mengelola preferensi cookie Anda.",
  alternates: {
    canonical: "/cookies",
  },
};

export default function CookiesPage() {
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
            Kebijakan Cookie
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Terakhir diperbarui: 18 Juli 2026
          </p>

          <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-foreground">1. Apa Itu Cookie?</h2>
              <p className="mt-2">
                Cookie adalah file kecil yang disimpan di perangkat Anda saat Anda mengunjungi
                situs web. Cookie membantu situs web mengingat preferensi Anda dan meningkatkan
                pengalaman browsing Anda.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">2. Cookie yang Kami Gunakan</h2>
              <div className="mt-3 space-y-4">
                <div>
                  <h3 className="font-medium text-foreground">Cookie Penting</h3>
                  <p className="mt-1">
                    Cookie yang diperlukan untuk operasional dasar situs web. Tanpa cookie ini,
                    layanan tidak dapat berfungsi dengan baik. Contoh: cookie sesi dan preferensi
                    bahasa.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Cookie Analitik</h3>
                  <p className="mt-1">
                    Cookie yang membantu kami memahami bagaimana pengunjung menggunakan situs web
                    kami. Informasi yang dikumpulkan bersifat anonim dan digunakan untuk
                    meningkatkan performa situs.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Cookie Preferensi</h3>
                  <p className="mt-1">
                    Cookie yang menyimpan pilihan Anda, seperti bahasa yang dipilih dan setelan
                    tampilan lainnya, sehingga Anda tidak perlu mengatur ulang setiap kali
                    mengunjungi situs.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">3. Cookie Pihak Ketiga</h2>
              <p className="mt-2">
                Kami dapat menggunakan layanan pihak ketiga yang menempatkan cookie di perangkat
                Anda. Layanan ini membantu kami menganalisis penggunaan situs dan meningkatkan
                layanan kami. Pihak ketiga memiliki kebijakan privasi mereka sendiri.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">4. Mengelola Cookie</h2>
              <p className="mt-2">
                Anda dapat mengontrol dan mengelola cookie melalui pengaturan browser Anda.
                Sebagian besar browser memungkinkan Anda untuk: melihat cookie yang tersimpan,
                menghapus cookie individual, memblokir cookie dari situs tertentu, atau memblokir
                semua cookie. Perlu diingat bahwa memblokir cookie dapat mempengaruhi
                fungsi situs.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">5. Perubahan Kebijakan Cookie</h2>
              <p className="mt-2">
                Kami dapat memperbarui Kebijakan Cookie ini dari waktu ke waktu. Perubahan akan
                dipublikasikan di halaman ini dengan tanggal pembaruan yang tercantum di atas.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">6. Hubungi Kami</h2>
              <p className="mt-2">
                Jika Anda memiliki pertanyaan tentang Kebijakan Cookie ini, silakan hubungi kami
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
