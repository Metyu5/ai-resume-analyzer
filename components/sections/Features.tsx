"use client";

import {
  FileSearch,
  ScanSearch,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

import Container from "../layout/Container";
import { useTranslation } from "@/providers/LanguageProvider";

export default function Features() {
  const { t } = useTranslation();

  const FEATURES = [
    {
      icon: FileSearch,
      title: t("features.f1Title"),
      description: t("features.f1Desc"),
    },
    {
      icon: ScanSearch,
      title: t("features.f2Title"),
      description: t("features.f2Desc"),
    },
    {
      icon: Lightbulb,
      title: t("features.f3Title"),
      description: t("features.f3Desc"),
    },
    {
      icon: TrendingUp,
      title: t("features.f4Title"),
      description: t("features.f4Desc"),
    },
  ];

  return (
    <section
      id="features"
      className="bg-white py-24 animate-fade-in"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
            {t("features.badge")}
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight">
            {t("features.title1")}
            <br />
            {t("features.title2")}
          </h2>

          <p className="mt-5 text-muted-foreground">
            {t("features.desc")}
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
                  <Icon className="h-7 w-7 text-blue-600" />
                </div>

                <h3 className="mt-6 text-lg font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
