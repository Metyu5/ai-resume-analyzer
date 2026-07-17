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

  const PLANS = [
    {
      name: "Basic",
      price: "Rp299K",
      featured: false,
    },
    {
      name: "Professional",
      price: "Rp599K",
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="bg-slate-50 py-24">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
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

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex h-full flex-col rounded-3xl border p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                plan.featured
                  ? "border-blue-600 bg-white shadow-xl"
                  : "border-gray-200 bg-white"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                  Most Popular
                </span>
              )}

              <div className="text-center">
                <h3 className="text-xl font-semibold">{plan.name}</h3>

                <div className="mt-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                </div>

                <p className="mt-2 text-sm text-muted-foreground">
                  {t("pricing.once")}
                </p>
              </div>

              <div className="my-8 h-px bg-border" />

              <div className="flex-1 space-y-4">
                {FEATURES.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="rounded-full bg-green-100 p-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>

                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                className={`mt-10 w-full rounded-xl ${
                  plan.featured
                    ? "bg-blue-600 hover:bg-blue-700"
                    : ""
                }`}
                variant={plan.featured ? "default" : "outline"}
              >
                {t("pricing.cta")}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}