import Link from "next/link";
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import Container from "./Container";
import { Button } from "@/components/ui/button";

const FOOTER_LINKS = {
  product: [
    { label: "Fitur", href: "#features" },
    { label: "Cara Kerja", href: "#how-it-works" },
    { label: "Harga", href: "#pricing" },
    { label: "Dashboard", href: "/dashboard" },
  ],
  resources: [
    { label: "Panduan Resume", href: "/resources/resume-guide" },
    { label: "Tips ATS", href: "/resources/ats-tips" },
    { label: "Blog Karier", href: "/blog" },
    { label: "Pusat Bantuan", href: "/help" },
  ],
  legal: [
    { label: "Syarat & Ketentuan", href: "/terms" },
    { label: "Kebijakan Privasi", href: "/privacy" },
    { label: "Kebijakan Cookie", href: "/cookies" },
  ],
};

const SOCIAL_LINKS = [
  { icon: FaXTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <section className="bg-blue-50/60 px-4 py-16">
      <Container>
        {/* Banner CTA */}
        <div className="relative z-10 mb-[-64px] overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 to-blue-950 px-8 py-14 text-center shadow-xl">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_top_right,white,transparent_60%)]"
          />

          <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Berhenti Menebak Mengapa
            <br />
            Resume Anda Tidak Mendapat Panggilan
          </h2>

          <p className="relative mx-auto mt-4 max-w-md text-sm text-blue-100/80">
            Unggah resume Anda, dapatkan skor ATS secara instan, lalu
            perbaiki kekurangan yang menghambat peluang Anda diterima kerja —
            semuanya dalam satu platform.
          </p>

          <div className="relative mt-8">
            <Button
              size="lg"
              className="rounded-full bg-white px-6 text-slate-900 hover:bg-blue-50"
            >
              Analisis Resume Saya
            </Button>
          </div>
        </div>

        {/* Footer */}
        <footer className="rounded-3xl bg-white px-8 pb-10 pt-24 shadow-sm">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <Link
                href="/"
                className="text-lg font-bold tracking-tight"
              >
                Unknown <span className="text-blue-600">Developer</span>
              </Link>

              <p className="mt-3 max-w-xs text-sm text-muted-foreground">
                Platform analisis resume berbasis AI yang membantu pencari
                kerja membuat resume yang lebih baik dan meningkatkan
                kompatibilitas dengan sistem ATS.
              </p>

              <div className="mt-5 flex gap-3">
                {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-700"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold">Produk</h4>
              <ul className="mt-4 space-y-3">
                {FOOTER_LINKS.product.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold">Sumber Daya</h4>
              <ul className="mt-4 space-y-3">
                {FOOTER_LINKS.resources.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold">Legal</h4>
              <ul className="mt-4 space-y-3">
                {FOOTER_LINKS.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} ResumeAI. Seluruh hak cipta dilindungi.
          </div>
        </footer>
      </Container>
    </section>
  );
}