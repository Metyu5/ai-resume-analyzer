import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import QueryProvider from "@/providers/QueryProvider";
import { LanguageProvider } from "@/providers/LanguageProvider";

const fontSans = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "AI Resume Analyzer",
  description: "AI Resume Analyzer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={fontSans.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LanguageProvider>
          <QueryProvider>{children}</QueryProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
