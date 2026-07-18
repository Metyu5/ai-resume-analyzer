"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  FileText,
  Loader2,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Lightbulb,
  Calendar,
  Briefcase,
} from "lucide-react";
import { useTranslation } from "@/providers/LanguageProvider";
import { useAuth } from "@/providers/AuthProvider";
import { useHistoryDetail } from "@/hooks/useHistory";

interface HistoryDetailClientProps {
  id: string;
}

export default function HistoryDetailClient({ id }: HistoryDetailClientProps) {
  const { t } = useTranslation();
  const { user, isLoading: authLoading } = useAuth();
  const router = useRouter();
  const { data, isLoading: detailLoading } = useHistoryDetail(Number(id));

  const isLoading = authLoading || detailLoading;
  const analysis = data?.data;

  if (isLoading) {
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

  if (!analysis) {
    return (
      <div className="flex h-full items-center justify-center p-8">
        <p className="text-sm text-muted-foreground">{t("history.notFound")}</p>
      </div>
    );
  }

  const scoreColor =
    analysis.score >= 80
      ? "text-green-600"
      : analysis.score >= 60
        ? "text-amber-600"
        : "text-red-600";
  const scoreBg =
    analysis.score >= 80
      ? "bg-green-50"
      : analysis.score >= 60
        ? "bg-amber-50"
        : "bg-red-50";
  const scoreRing =
    analysis.score >= 80
      ? "border-green-200"
      : analysis.score >= 60
        ? "border-amber-200"
        : "border-red-200";

  return (
    <div className="p-8">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
          <Link href="/dashboard" className="hover:text-foreground transition-colors">
            {t("dash.sidebar.overview")}
          </Link>
          <span>/</span>
          <Link href="/dashboard/history" className="hover:text-foreground transition-colors">
            {t("dash.sidebar.history")}
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">#{analysis.id}</span>
        </div>

        <Link
          href="/dashboard/history"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("history.backToList")}
        </Link>

        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm mb-6">
          <div className="flex items-start gap-5">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-50">
              <FileText className="h-7 w-7 text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl font-bold tracking-tight">{analysis.file_name}</h1>
              <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {new Date(analysis.created_at).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
                {analysis.job_description && (
                  <span className="inline-flex items-center gap-1">
                    <Briefcase className="h-3.5 w-3.5" />
                    {t("history.withJobDesc")}
                  </span>
                )}
              </div>
            </div>
            <div className={`flex flex-col items-center rounded-2xl ${scoreBg} border ${scoreRing} px-6 py-4`}>
              <p className={`text-3xl font-bold ${scoreColor}`}>{analysis.score}</p>
              <p className="text-xs text-muted-foreground mt-0.5">/100</p>
            </div>
          </div>
        </div>

        {analysis.summary && (
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm mb-6">
            <h2 className="text-sm font-semibold text-foreground mb-3">{t("history.summary")}</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{analysis.summary}</p>
          </div>
        )}

        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm mb-6">
          <h2 className="text-sm font-semibold text-foreground mb-4">{t("history.keywords")}</h2>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                <span>{t("history.matched")}</span>
                <span className="font-medium text-foreground">
                  {analysis.keywords_matched} / {analysis.keywords_total}
                </span>
              </div>
              <div className="h-2.5 rounded-full bg-gray-100 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${
                    analysis.score >= 80
                      ? "bg-green-500"
                      : analysis.score >= 60
                        ? "bg-amber-500"
                        : "bg-red-500"
                  }`}
                  style={{
                    width: `${analysis.keywords_total > 0 ? (analysis.keywords_matched / analysis.keywords_total) * 100 : 0}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm mb-6">
          <h2 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            {t("history.findings")}
          </h2>
          {analysis.findings.length === 0 ? (
            <p className="text-sm text-muted-foreground">{t("history.noFindings")}</p>
          ) : (
            <div className="space-y-3">
              {analysis.findings.map((finding, i) => (
                <div key={i} className="rounded-xl bg-gray-50 px-4 py-3">
                  <p className="text-xs font-semibold text-foreground mb-1">{finding.category}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{finding.detail}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {analysis.missing_keywords.length > 0 && (
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm mb-6">
            <h2 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
              <XCircle className="h-4 w-4 text-red-500" />
              {t("history.missingKeywords")}
            </h2>
            <div className="flex flex-wrap gap-2">
              {analysis.missing_keywords.map((kw, i) => (
                <span
                  key={i}
                  className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-700"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        )}

        {analysis.suggestions.length > 0 && (
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm mb-6">
            <h2 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-amber-500" />
              {t("history.suggestions")}
            </h2>
            <div className="space-y-3">
              {analysis.suggestions.map((suggestion, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl bg-amber-50/60 px-4 py-3">
                  <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{suggestion}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 mb-12 flex justify-center">
          <Link
            href="/analyze"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition-colors"
          >
            {t("nav.analyze")}
          </Link>
        </div>
      </div>
    </div>
  );
}
