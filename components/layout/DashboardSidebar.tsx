"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BarChart3,
  FileText,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "@/providers/LanguageProvider";
import { useAuth } from "@/providers/AuthProvider";

export default function DashboardSidebar() {
  const { t } = useTranslation();
  const { user, logout } = useAuth();
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const NAV_ITEMS = [
    { label: t("dash.sidebar.overview"), href: "/dashboard", icon: LayoutDashboard },
    { label: t("dash.sidebar.analyses"), href: "/analyze", icon: BarChart3 },
    { label: t("dash.sidebar.history"), href: "/dashboard/history", icon: FileText },
    { label: t("dash.sidebar.settings"), href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <aside
      className={`flex h-screen flex-col border-r border-gray-100 bg-white transition-all duration-300 ${
        collapsed ? "w-[68px]" : "w-64"
      }`}
    >
      <div className={`flex h-16 items-center border-b border-gray-100 px-4 ${collapsed ? "justify-center" : "gap-2"}`}>
        <Link href="/" className="flex items-center gap-1.5 text-lg font-bold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-xs font-bold text-white">
            R
          </span>
          {!collapsed && (
            <span>
              Resume<span className="text-blue-600">AI</span>
            </span>
          )}
        </Link>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4" aria-label="Dashboard navigation">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-muted-foreground hover:bg-gray-50 hover:text-foreground"
              } ${collapsed ? "justify-center" : ""}`}
              title={collapsed ? item.label : undefined}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-gray-100 p-3">
        {!collapsed && user && (
          <div className="mb-3 px-3 py-2">
            <p className="truncate text-sm font-medium">{user.name}</p>
            <p className="truncate text-xs text-muted-foreground">{user.email}</p>
          </div>
        )}
        <button
          type="button"
          onClick={logout}
          className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-red-50 hover:text-red-600 ${
            collapsed ? "justify-center" : ""
          }`}
          title={collapsed ? t("dash.logout") : undefined}
        >
          <LogOut className="h-5 w-5 flex-shrink-0" />
          {!collapsed && <span>{t("dash.logout")}</span>}
        </button>
      </div>

      <button
        type="button"
        onClick={() => setCollapsed(!collapsed)}
        className="flex h-10 items-center justify-center border-t border-gray-100 text-muted-foreground transition-colors hover:bg-gray-50"
      >
        {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
      </button>
    </aside>
  );
}
