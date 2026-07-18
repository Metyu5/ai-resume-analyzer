"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FileText,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Loader2,
  Eye,
  Calendar,
} from "lucide-react";
import { useTranslation } from "@/providers/LanguageProvider";
import { useAuth } from "@/providers/AuthProvider";
import { useHistoryList } from "@/hooks/useHistory";
import { useRouter } from "next/navigation";

export default function HistoryClient() {
  const { t } = useTranslation();
  const { user, isLoading: authLoading } = useAuth();
  const router = useRouter();
  const [page, setPage] = useState(1);
  const { data, isLoading } = useHistoryList(page);

  const history = data?.data ?? [];
  const lastPage = data?.last_page ?? 1;

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

  return (
    <div className="p-8">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
          <Link href="/dashboard" className="hover:text-foreground transition-colors">
            {t("dash.sidebar.overview")}
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground font-medium">{t("dash.sidebar.history")}</span>
        </div>

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {t("dash.sidebar.history")}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {t("history.totalAnalyses", { count: data?.total ?? 0 })}
            </p>
          </div>
          <Link
            href="/analyze"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
          >
            {t("nav.analyze")}
          </Link>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          </div>
        ) : history.length === 0 ? (
          <div className="rounded-2xl border border-gray-100 bg-white px-6 py-20 text-center shadow-sm">
            <FileText className="mx-auto h-12 w-12 text-muted-foreground/30" />
            <p className="mt-4 text-base font-medium text-foreground">{t("history.empty")}</p>
            <p className="mt-1.5 text-sm text-muted-foreground">{t("history.emptyDesc")}</p>
            <Link
              href="/analyze"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
            >
              {t("dash.startAnalysis")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-3">
              {history.map((item) => (
                <Link
                  key={item.id}
                  href={`/dashboard/history/${item.id}`}
                  className="group flex items-center gap-5 rounded-2xl border border-gray-100 bg-white px-6 py-4 shadow-sm transition-all hover:border-blue-100 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="truncate text-sm font-semibold text-foreground">
                      {item.file_name}
                    </p>
                    <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(item.created_at).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                      <span>{t("history.keywordsCount", { matched: item.keywords_matched, total: item.keywords_total })}</span>
                    </div>
                  </div>
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${
                      item.score >= 80
                        ? "bg-green-50 text-green-700"
                        : item.score >= 60
                          ? "bg-amber-50 text-amber-700"
                          : "bg-red-50 text-red-700"
                    }`}
                  >
                    {item.score}/100
                  </span>
                  <Eye className="h-4 w-4 text-muted-foreground/40 transition-colors group-hover:text-blue-500" />
                </Link>
              ))}
            </div>

            {lastPage > 1 && (
              <div className="mt-8 flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-sm font-medium text-muted-foreground transition-colors hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                {Array.from({ length: lastPage }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPage(p)}
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                      p === page
                        ? "bg-blue-600 text-white"
                        : "border border-gray-200 bg-white text-muted-foreground hover:bg-gray-50"
                    }`}
                  >
                    {p}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setPage((p) => Math.min(lastPage, p + 1))}
                  disabled={page === lastPage}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-sm font-medium text-muted-foreground transition-colors hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
