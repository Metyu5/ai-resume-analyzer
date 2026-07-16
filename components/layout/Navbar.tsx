"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Beranda", href: "/" },
  { label: "Fitur", href: "#features" },
  { label: "Cara Kerja", href: "#how-it-works" },
  { label: "Harga", href: "#pricing" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between rounded-full border border-gray-100 bg-white px-3 shadow-[0_2px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_6px_24px_rgba(0,0,0,0.1)]">

        <Link
          href="/"
          className="flex items-center gap-1.5 pl-2 text-lg font-bold tracking-tight"
        >
          Resume<span className="text-blue-600">AI</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="#"
            className="hidden rounded-full border border-gray-200 px-5 py-2 text-sm font-medium text-muted-foreground shadow-none hover:bg-gray-50 sm:inline-flex"
          >
            Masuk
          </Link>

          <Link
            href="/analyze"
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
          >
            Analisis Resume
          </Link>
        </div>

      </div>
    </header>
  );
}