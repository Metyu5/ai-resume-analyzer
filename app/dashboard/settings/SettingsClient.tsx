"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronRight, Loader2, User, Mail, Save, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/providers/LanguageProvider";
import { useAuth } from "@/providers/AuthProvider";

export default function SettingsClient() {
  const { t } = useTranslation();
  const { user, isLoading: authLoading } = useAuth();
  const router = useRouter();
  const [saved, setSaved] = useState(false);

  if (authLoading) {
    return (
      <div className="flex h-full items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!user) {
    router.push("/");
    return null;
  }

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="p-8">
      <div className="mx-auto max-w-2xl">
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
          <Link href="/dashboard" className="hover:text-foreground transition-colors">
            {t("dash.sidebar.overview")}
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground font-medium">{t("dash.sidebar.settings")}</span>
        </div>

        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
          {t("dash.sidebar.settings")}
        </h1>

        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm mb-6">
          <h2 className="text-sm font-semibold text-foreground mb-4">{t("settings.profile")}</h2>
          <div className="space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                {t("settings.name")}
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  defaultValue={user.name}
                  readOnly
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 pl-10 text-sm text-foreground"
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                {t("settings.email")}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  defaultValue={user.email}
                  readOnly
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 pl-10 text-sm text-foreground"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm mb-6">
          <h2 className="text-sm font-semibold text-foreground mb-2">{t("settings.about")}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">{t("settings.aboutDesc")}</p>
        </div>

        <button
          type="button"
          onClick={handleSave}
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition-colors"
        >
          {saved ? (
            <>
              <CheckCircle2 className="h-4 w-4" />
              {t("settings.saved")}
            </>
          ) : (
            <>
              <Save className="h-4 w-4" />
              {t("settings.save")}
            </>
          )}
        </button>
      </div>
    </div>
  );
}
