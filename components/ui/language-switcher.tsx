"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslation } from "@/providers/LanguageProvider";
import { LOCALES } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const current = LOCALES.find((l) => l.code === locale);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 items-center gap-1.5 rounded-full px-2 text-sm font-semibold uppercase text-muted-foreground transition-colors hover:bg-gray-100"
        aria-label="Change language"
      >
        {current?.code}
        {current?.flag && (
          <img
            src={current.flag}
            alt={current.label}
            className="h-4 w-4 rounded-full object-cover"
          />
        )}
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-52 overflow-hidden rounded-2xl border border-gray-100 bg-white py-1.5 shadow-xl">
          {LOCALES.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLocale(l.code);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-blue-50 ${
                locale === l.code
                  ? "bg-blue-50 font-medium text-blue-600"
                  : "text-foreground"
              }`}
            >
              <img
                src={l.flag}
                alt={l.label}
                className="h-5 w-5 rounded-full object-cover"
              />
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
