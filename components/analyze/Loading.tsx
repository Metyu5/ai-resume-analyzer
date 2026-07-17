"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useTranslation } from "@/providers/LanguageProvider";

export default function Loading() {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);

  const STEPS = [
    t("loading.step1"),
    t("loading.step2"),
    t("loading.step3"),
    t("loading.step4"),
  ];

  const progress = ((activeStep + 1) / STEPS.length) * 100;

  useEffect(() => {
    if (activeStep >= STEPS.length - 1) return;
    const timer = setTimeout(() => setActiveStep((s) => s + 1), 1250);
    return () => clearTimeout(timer);
  }, [activeStep, STEPS.length]);

  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center py-10 text-center">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
        <Loader2 className="h-6 w-6 animate-spin text-blue-600" />
      </div>
      <p className="mb-2 text-sm font-medium">{t("loading.analyzing")}</p>
      <p className="mb-4 text-sm text-muted-foreground">
        {Math.round(progress)}% {t("loading.done")}
      </p>

      <div className="mb-6 h-2 w-full overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <ul className="w-full space-y-3 text-left">
        {STEPS.map((step, i) => (
          <li key={step} className="flex items-center gap-3 text-sm">
            {i < activeStep ? (
              <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />
            ) : i === activeStep ? (
              <Loader2 className="h-4 w-4 shrink-0 animate-spin text-blue-600" />
            ) : (
              <span className="h-4 w-4 shrink-0 rounded-full border border-gray-200" />
            )}
            <span
              className={
                i <= activeStep
                  ? "text-foreground"
                  : "text-muted-foreground"
              }
            >
              {step}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
