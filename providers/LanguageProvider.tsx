"use client";

import { createContext, useContext, useCallback, useSyncExternalStore, type ReactNode } from "react";
import translations, { type Locale, type TranslationKey } from "@/lib/i18n";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: TranslationKey, vars?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function subscribeLocale(cb: () => void) {
  window.addEventListener("storage", cb);
  return () => window.removeEventListener("storage", cb);
}

function getSnapshot(): Locale {
  return (localStorage.getItem("locale") as Locale) || "id";
}

function getServerSnapshot(): Locale {
  return "id";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribeLocale, getSnapshot, getServerSnapshot);

  const setLocale = useCallback((l: Locale) => {
    localStorage.setItem("locale", l);
    document.documentElement.lang = l;
    window.dispatchEvent(new Event("storage"));
  }, []);

  const t = useCallback(
    (key: TranslationKey, vars?: Record<string, string | number>) => {
      let text: string = translations[locale]?.[key] ?? translations.id[key] ?? key;
      if (vars) {
        Object.entries(vars).forEach(([k, v]) => {
          text = text.replace(new RegExp(`\\{${k}\\}`, "g"), String(v));
        });
      }
      return text;
    },
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useTranslation must be used within LanguageProvider");
  return ctx;
}
