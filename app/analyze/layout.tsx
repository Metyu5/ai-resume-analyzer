import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "Analyze Your Resume",
  description:
    "Upload your resume and job description to get an instant ATS score, keyword analysis, and actionable improvement suggestions powered by AI.",
  openGraph: {
    title: "Analyze Your Resume - AI Resume Analyzer",
    description:
      "Upload your resume and job description to get an instant ATS score, keyword analysis, and actionable improvement suggestions powered by AI.",
    url: `${BASE_URL}/analyze`,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "AI Resume Analyzer - Analyze Your Resume",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Analyze Your Resume - AI Resume Analyzer",
    description:
      "Upload your resume and job description to get an instant ATS score, keyword analysis, and actionable improvement suggestions.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: "/analyze",
    languages: {
      id: "/analyze",
      en: "/analyze",
      zh: "/analyze",
      ja: "/analyze",
      "x-default": "/analyze",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AI Resume Analyzer",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: `${BASE_URL}/analyze`,
  description:
    "AI-powered resume analyzer that provides instant ATS score, keyword matching, and actionable improvement suggestions.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "IDR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "12400",
  },
};

export default function AnalyzeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
