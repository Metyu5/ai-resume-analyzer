"use client";

import Link from "next/link";
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import Container from "./Container";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/providers/LanguageProvider";

export default function Footer() {
  const { t } = useTranslation();

  const FOOTER_LINKS = {
    product: [
      { label: t("nav.features"), href: "#features" },
      { label: t("nav.howItWorks"), href: "#how-it-works" },
      { label: t("nav.pricing"), href: "#pricing" },
      { label: "Dashboard", href: "/dashboard" },
    ],
    resources: [
      { label: t("footer.resumeGuide"), href: "/resources/resume-guide" },
      { label: t("footer.atsTips"), href: "/resources/ats-tips" },
      { label: t("footer.blog"), href: "/blog" },
      { label: t("footer.help"), href: "/help" },
    ],
    legal: [
      { label: t("footer.terms"), href: "/terms" },
      { label: t("footer.privacy"), href: "/privacy" },
      { label: t("footer.cookies"), href: "/cookies" },
    ],
  };

  const SOCIAL_LINKS = [
    { icon: FaXTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  ];

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
            {t("footer.ctaTitle1")}
            <br />
            {t("footer.ctaTitle2")}
          </h2>

          <p className="relative mx-auto mt-4 max-w-md text-sm text-blue-100/80">
            {t("footer.ctaDesc")}
          </p>

          <div className="relative mt-8">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white px-6 text-slate-900 hover:bg-blue-50"
            >
              <Link href="/analyze">{t("footer.ctaBtn")}</Link>
            </Button>
          </div>
        </div>

        {/* Footer */}
        <footer className="rounded-3xl bg-white px-8 pb-10 pt-24 shadow-sm" aria-label="Footer">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <Link
                href="/"
                className="text-lg font-bold tracking-tight"
              >
                Unknown <span className="text-blue-600">Developer</span>
              </Link>

              <p className="mt-3 max-w-xs text-sm text-muted-foreground">
                {t("footer.desc")}
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
              <h3 className="text-sm font-semibold">{t("footer.product")}</h3>
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
              <h3 className="text-sm font-semibold">{t("footer.resources")}</h3>
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
              <h3 className="text-sm font-semibold">{t("footer.legal")}</h3>
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
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </div>
        </footer>
      </Container>
    </section>
  );
}
