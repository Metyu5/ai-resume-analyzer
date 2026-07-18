"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "@/providers/LanguageProvider";
import { useAuth } from "@/providers/AuthProvider";
import LanguageSwitcher from "@/components/ui/language-switcher";
import LoginModal from "@/components/auth/LoginModal";

export default function Navbar() {
  const { t } = useTranslation();
  const { user, isLoading } = useAuth();
  const [showLogin, setShowLogin] = useState(false);

  const NAV_LINKS = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.features"), href: "#features" },
    { label: t("nav.howItWorks"), href: "#how-it-works" },
    { label: t("nav.pricing"), href: "#pricing" },
  ];

  return (
    <header className="fixed left-0 right-0 top-4 z-50 flex items-center justify-center px-4 ">
      <div className="flex gap-4 h-14 max-w-3xl items-center justify-between rounded-full border border-gray-100 bg-white px-3 shadow-[0_2px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_6px_24px_rgba(0,0,0,0.1)]">

        <Link
          href="/"
          className="flex items-center gap-1.5 pl-2 text-lg font-bold tracking-tight"
        >
          Resume<span className="text-blue-600">AI</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
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
          {isLoading ? (
            <div className="hidden h-9 w-20 rounded-full bg-gray-100 sm:block" />
          ) : user ? (
            <Link
              href="/dashboard"
              className="hidden rounded-full border border-gray-200 px-5 py-2 text-sm font-medium text-muted-foreground shadow-none hover:bg-gray-50 sm:inline-flex"
            >
              {user.name}
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => setShowLogin(true)}
              className="hidden rounded-full border border-gray-200 px-5 py-2 text-sm font-medium text-muted-foreground shadow-none hover:bg-gray-50 sm:inline-flex"
            >
              {t("nav.login")}
            </button>
          )}

          <Link
            href="/analyze"
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
          >
            {t("nav.analyze")}
          </Link>
        </div>

      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 md:right-10">
        <LanguageSwitcher />
      </div>

      <LoginModal open={showLogin} onOpenChange={setShowLogin} />
    </header>
  );
}
