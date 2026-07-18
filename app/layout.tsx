import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import QueryProvider from "@/providers/QueryProvider";
import { LanguageProvider } from "@/providers/LanguageProvider";
import { AuthProvider } from "@/providers/AuthProvider";

const fontSans = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  preload: false,
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "AI Resume Analyzer - Free ATS Score Checker",
    template: "%s | AI Resume Analyzer",
  },
  description:
    "Upload your resume and get an instant ATS score with detailed, actionable feedback. Boost your chances of landing your dream job with AI-powered analysis.",
  keywords: [
    "resume analyzer",
    "ATS score",
    "resume checker",
    "AI resume review",
    "job application",
    "resume optimization",
    "applicant tracking system",
  ],
  authors: [{ name: "AI Resume Analyzer" }],
  creator: "AI Resume Analyzer",
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: ["en_US", "zh_CN", "ja_JP"],
    siteName: "AI Resume Analyzer",
    title: "AI Resume Analyzer - Free ATS Score Checker",
    description:
      "Upload your resume and get an instant ATS score with detailed, actionable feedback. Boost your chances of landing your dream job.",
    url: BASE_URL,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "AI Resume Analyzer - ATS Score Checker",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Resume Analyzer - Free ATS Score Checker",
    description:
      "Upload your resume and get an instant ATS score with detailed, actionable feedback.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
    languages: {
      id: "/",
      en: "/",
      zh: "/",
      ja: "/",
      "x-default": "/",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AI Resume Analyzer",
  description:
    "Upload your resume and get an instant ATS score with detailed, actionable feedback.",
  url: BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${BASE_URL}/analyze`,
    "query-input": "required name=resume",
  },
  inLanguage: ["id", "en", "zh", "ja"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={fontSans.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white focus:outline-none"
        >
          Skip to content
        </a>
        <LanguageProvider>
          <QueryProvider>
            <AuthProvider>{children}</AuthProvider>
          </QueryProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
