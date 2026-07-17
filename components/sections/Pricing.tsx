"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "../layout/Container";
import { useTranslation } from "@/providers/LanguageProvider";

export default function Pricing() {
  const { t } = useTranslation();

  const FEATURES = [
    t("pricing.f1"),
    t("pricing.f2"),
    t("pricing.f3"),
    t("pricing.f4"),
    t("pricing.f5"),
  ];

  return (
    <section
      id="pricing"
      className="py-24 bg-white animate-fade-in flex flex-row items-center justify-center gap-4 md:gap-20 lg:gap-32"
    >
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
            {t("pricing.badge")}
          </span>

          <h2 className="mt-5 text-4xl font-bold">
            {t("pricing.title1")}
            <br />
            {t("pricing.title2")}
          </h2>

          <p className="mt-5 text-muted-foreground">
            {t("pricing.desc")}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-md rounded-3xl border border-blue-200 bg-blue-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="text-center">
            <p className="font-medium text-blue-600">
              {t("pricing.plan")}
            </p>

            <h3 className="mt-4 text-5xl font-bold">
              {t("pricing.price")}
            </h3>

            <p className="mt-2 text-muted-foreground">
              {t("pricing.once")}
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {FEATURES.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3"
              >
                <Check className="h-5 w-5 text-green-600" />

                <span>{feature}</span>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            className="mt-10 w-full rounded-full bg-blue-600 hover:bg-blue-700"
          >
            {t("pricing.cta")}
          </Button>
        </div>
      </Container>
      
    </section>
  );
}
