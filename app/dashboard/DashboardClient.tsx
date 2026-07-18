"use client";

import Link from "next/link";
import { useState } from "react";
import {
  BarChart3,
  FileText,
  TrendingUp,
  Trophy,
  LogOut,
  Clock,
  ArrowRight,
  Loader2,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import LoginModal from "@/components/auth/LoginModal";
import { useTranslation } from "@/providers/LanguageProvider";
import { useAuth } from "@/providers/AuthProvider";

export default function DashboardClient() {
  const { t } = useTranslation();
  const { user, isLoading, logout } = useAuth();
  const [showLogin, setShowLogin] = useState(false);

  if (isLoading) {
    return (
      <>
        <Navbar />
        <main id="main-content" className="min-h-screen bg-gradient-to-b from-blue-50/40 to-white pb-24 pt-32">
          <Container className="max-w-5xl">
            <div className="flex items-center justify-center py-32">
              <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            </div>
          </Container>
        </main>
        <Footer />
      </>
    );
  }

  if (!user) {
    return (
      <>
        <Navbar />
        <main id="main-content" className="min-h-screen bg-gradient-to-b from-blue-50/40 to-white pb-24 pt-32">
          <Container className="max-w-5xl">
            <div className="rounded-3xl border border-gray-100 bg-white p-12 text-center shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h1 className="mt-6 text-2xl font-bold">{t("dash.welcome")}</h1>
              <p className="mt-2 text-muted-foreground">{t("dash.noData")}</p>
              <div className="mt-8 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowLogin(true)}
                  className="rounded-full border border-gray-200 px-6 py-3 text-sm font-medium hover:bg-gray-50"
                >
                  {t("nav.login")}
                </button>
                <Link
                  href="/analyze"
                  className="rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700"
                >
                  {t("dash.startAnalysis")}
                </Link>
              </div>
            </div>
          </Container>
        </main>
        <Footer />
        <LoginModal open={showLogin} onOpenChange={setShowLogin} />
      </>
    );
  }

  const stats = [
    { label: t("dash.totalAnalyses"), value: "12", icon: BarChart3, color: "bg-blue-50 text-blue-600" },
    { label: t("dash.avgScore"), value: "78", icon: TrendingUp, color: "bg-green-50 text-green-600" },
    { label: t("dash.bestScore"), value: "94", icon: Trophy, color: "bg-amber-50 text-amber-600" },
    { label: t("dash.lastAnalysis"), value: "2h lalu", icon: Clock, color: "bg-purple-50 text-purple-600" },
  ];

  const history = [
    { id: 1, date: "18 Jul 2026", file: "Resume_2026.pdf", score: 94 },
    { id: 2, date: "15 Jul 2026", file: "Resume_Draft.pdf", score: 72 },
    { id: 3, date: "12 Jul 2026", file: "CV_Final.pdf", score: 85 },
    { id: 4, date: "10 Jul 2026", file: "Resume_v3.pdf", score: 68 },
    { id: 5, date: "8 Jul 2026", file: "Resume_v2.pdf", score: 61 },
  ];

  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-gradient-to-b from-blue-50/40 to-white pb-24 pt-32">
        <Container className="max-w-5xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {t("dash.welcome")}, {user.name}
              </h1>
              <p className="mt-2 text-muted-foreground">{t("dash.subtitle")}</p>
            </div>
            <button
              type="button"
              onClick={logout}
              className="hidden items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-gray-50 sm:inline-flex"
            >
              <LogOut className="h-4 w-4" />
              {t("dash.logout")}
            </button>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${stat.color}`}>
                  <stat.icon className="h-5 w-5" />
                </div>
                <p className="text-2xl font-bold">{stat.value}</p>
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
                      <td className="px-6 py-4 text-sm">{item.date}</td>
                      <td className="px-6 py-4 text-sm font-medium">{item.file}</td>
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
                          href="/analyze"
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
          </div>

          <button
            type="button"
            onClick={logout}
            className="mt-6 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground sm:hidden"
          >
            <LogOut className="h-4 w-4" />
            {t("dash.logout")}
          </button>
        </Container>
      </main>
      <Footer />
    </>
  );
}
