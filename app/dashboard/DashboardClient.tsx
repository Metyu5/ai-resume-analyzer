"use client";

import Link from "next/link";
import {
  BarChart3,
  FileText,
  TrendingUp,
  Trophy,
  Clock,
  ArrowRight,
  Loader2,
  Plus,
} from "lucide-react";
import { useTranslation } from "@/providers/LanguageProvider";
import { useAuth } from "@/providers/AuthProvider";
import { useDashboard } from "@/hooks/useDashboard";
import { useRouter } from "next/navigation";

export default function DashboardClient() {
  const { t } = useTranslation();
  const { user, isLoading: authLoading } = useAuth();
  const { data: dashboard, isLoading: dashLoading } = useDashboard();
  const router = useRouter();

  const isLoading = authLoading || (user && dashLoading);
  const stats = dashboard?.data?.stats;
  const history = dashboard?.data?.history ?? [];

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

  const statCards = [
    { label: t("dash.totalAnalyses"), value: stats?.total_analyses ?? 0, icon: BarChart3, color: "bg-blue-50 text-blue-600" },
    { label: t("dash.avgScore"), value: stats?.avg_score ?? 0, icon: TrendingUp, color: "bg-green-50 text-green-600" },
    { label: t("dash.bestScore"), value: stats?.best_score ?? 0, icon: Trophy, color: "bg-amber-50 text-amber-600" },
    { label: t("dash.lastAnalysis"), value: stats?.last_analysis ?? "—", icon: Clock, color: "bg-purple-50 text-purple-600", isText: true },
  ];

  return (
    <div className="p-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t("dash.welcome")}, {user.name}
            </h1>
            <p className="mt-2 text-muted-foreground">{t("dash.subtitle")}</p>
          </div>
          <Link
            href="/analyze"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
          >
            <Plus className="h-4 w-4" />
            {t("nav.analyze")}
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {statCards.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${stat.color}`}>
                <stat.icon className="h-5 w-5" />
              </div>
              <p className="text-2xl font-bold">
                {stat.isText ? stat.value : `${stat.value}/100`}
              </p>
              <p className="mt-0.5 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-gray-100 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b px-6 py-4">
            <h2 className="text-lg font-semibold">{t("dash.history")}</h2>
            <Link
              href="/analyze"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:underline"
            >
              {t("nav.analyze")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {history.length === 0 ? (
            <div className="px-6 py-16 text-center">
              <FileText className="mx-auto h-10 w-10 text-muted-foreground/40" />
              <p className="mt-3 text-sm text-muted-foreground">{t("dash.historyEmpty")}</p>
              <Link
                href="/analyze"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
              >
                <Plus className="h-4 w-4" />
                {t("dash.startAnalysis")}
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b text-left text-sm text-muted-foreground">
                    <th className="px-6 py-3 font-medium">{t("dash.date")}</th>
                    <th className="px-6 py-3 font-medium">{t("dash.file")}</th>
                    <th className="px-6 py-3 font-medium">{t("dash.score")}</th>
                    <th className="px-6 py-3 font-medium"></th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((item) => (
                    <tr key={item.id} className="border-b last:border-0">
                      <td className="px-6 py-4 text-sm">
                        {new Date(item.created_at).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium">{item.file_name}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                            item.score >= 80
                              ? "bg-green-50 text-green-700"
                              : item.score >= 60
                                ? "bg-amber-50 text-amber-700"
                                : "bg-red-50 text-red-700"
                          }`}
                        >
                          {item.score}/100
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Link
                          href={`/dashboard/history/${item.id}`}
                          className="text-sm font-medium text-blue-600 hover:underline"
                        >
                          {t("dash.viewReport")}
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
