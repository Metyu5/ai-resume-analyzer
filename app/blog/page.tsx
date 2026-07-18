import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Blog Karier - Tips Resume & Lowongan Kerja",
  description:
    "Artikel terbaru seputar tips membuat resume, persiapan wawancara, pengembangan karier, dan strategi pencarian kerja yang efektif.",
  alternates: {
    canonical: "/blog",
  },
};

const posts = [
  {
    title: "5 Kesalahan Resume yang Sering Dibuat Fresh Graduate",
    excerpt:
      "Fresh graduate sering kali membuat kesalahan yang sama dalam menulis resume. Mulai dari terlalu panjang hingga tidak ada quantified achievement. Ketahui cara menghindarinya.",
    date: "18 Juli 2026",
    readTime: "5 menit",
    tag: "Resume",
  },
  {
    title: "Bagaimana AI Mengubah Proses Rekrutmen di Indonesia",
    excerpt:
      "Semakin banyak perusahaan Indonesia yang menggunakan AI dan ATS dalam proses rekrutmen. Apa artinya bagi pencari kerja dan bagaimana cara beradaptasi?",
    date: "15 Juli 2026",
    readTime: "7 menit",
    tag: "Industri",
  },
  {
    title: "Checklist: Sebelum Mengirim Lamaran Kerja",
    excerpt:
      "Sebelum menekan tombol kirim, pastikan Anda sudah memeriksa semua aspek penting dari lamaran kerja Anda. Checklist lengkap untuk memastikan tidak ada yang terlewat.",
    date: "10 Juli 2026",
    readTime: "4 menit",
    tag: "Tips",
  },
  {
    title: "Membangun Personal Branding untuk Pencari Kerja",
    excerpt:
      "Personal branding bukan hanya untuk influencer. Pencari kerja juga perlu membangun merek profesional mereka sendiri untuk menarik perhatian perekrut.",
    date: "5 Juli 2026",
    readTime: "6 menit",
    tag: "Karier",
  },
];

export default function BlogPage() {
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
            Blog Karier
          </h1>
          <p className="mt-4 text-muted-foreground">
            Tips, panduan, dan wawasan terbaru seputar resume, pencarian
            kerja, dan pengembangan karier.
          </p>

          <div className="mt-12 space-y-6">
            {posts.map((post) => (
              <article
                key={post.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="rounded-full bg-blue-50 px-3 py-1 font-medium text-blue-600">
                    {post.tag}
                  </span>
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-3 text-lg font-semibold">{post.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-muted-foreground">
            Artikel lainnya segera hadir.
          </p>
        </Container>
      </main>
      <Footer />
    </>
  );
}
