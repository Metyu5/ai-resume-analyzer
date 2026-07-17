"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ResumeUpload from "@/components/analyze/ResumeUpload";
import Loading from "@/components/analyze/Loading";
import ScoreCircle from "@/components/analyze/ScoreCircle";
import AnalysisCard from "@/components/analyze/AnalysisCard";
import { Button } from "@/components/ui/button";
import { useAnalyzeResume } from "@/hooks/useAnalyzeResume";
import { useTranslation } from "@/providers/LanguageProvider";
import type { AnalysisResult } from "@/types/analyze";

type Stage = "upload" | "analyzing" | "result" | "error";

export default function AnalyzePage() {
  const { t } = useTranslation();
  const [stage, setStage] = useState<Stage>("upload");
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { mutate, isPending } = useAnalyzeResume();

  const handleAnalyze = (file: File, jobDescription: string) => {
    setStage("analyzing");
    setErrorMessage("");

    mutate(
      { file, jobDescription },
      {
        onSuccess: (data) => {
          if (data.success && data.data) {
            setResult(data.data);
            setStage("result");
          } else {
            setErrorMessage(data.message || t("analyze.errorDefault"));
            setStage("error");
          }
        },
        onError: (error) => {
          const message =
            error instanceof Error
              ? error.message
              : t("analyze.errorGeneric");
          setErrorMessage(message);
          setStage("error");
        },
      }
    );
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-blue-50/40 to-white pb-24 pt-32">
        <Container>
          {stage === "upload" && (
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {t("analyze.title")}
              </h1>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                {t("analyze.desc")}
              </p>
              <div className="mt-10">
                <ResumeUpload onAnalyze={handleAnalyze} />
              </div>
            </div>
          )}

          {(stage === "analyzing" || isPending) && <Loading />}

          {stage === "error" && (
            <div className="mx-auto max-w-md text-center">
              <div className="rounded-2xl border border-red-100 bg-red-50 p-8">
                <p className="text-red-600 font-medium">{errorMessage}</p>
              </div>
              <Button
                variant="outline"
                className="mt-6 rounded-full"
                onClick={() => setStage("upload")}
              >
                {t("analyze.retry")}
              </Button>
            </div>
          )}

          {stage === "result" && result && (
            <div className="mx-auto max-w-3xl">
              {result.summary && (
                <div className="mb-6 rounded-2xl border border-blue-100 bg-blue-50 p-6">
                  <p className="text-sm text-blue-800">{result.summary}</p>
                </div>
              )}

              <div className="flex flex-col items-center rounded-3xl border border-gray-100 bg-white p-10 shadow-sm">
                <ScoreCircle score={result.score} />
                <p className="mt-4 text-sm text-muted-foreground">
                  {result.keywordsTotal > 0
                    ? t("analyze.keywordsMatch", {
                        matched: result.keywordsMatched,
                        total: result.keywordsTotal,
                      })
                    : t("analyze.generalAnalysis")}
                </p>
              </div>

              <div className="mt-8 space-y-4">
                {result.findings.map((finding) => (
                  <AnalysisCard key={finding.title} {...finding} />
                ))}
              </div>

              {result.missingKeywords.length > 0 && (
                <div className="mt-8 rounded-2xl border border-amber-100 bg-amber-50 p-6">
                  <h3 className="mb-3 font-semibold text-amber-800">
                    {t("analyze.missingKeywords")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {result.missingKeywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded-full bg-amber-100 px-3 py-1 text-xs text-amber-700"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {result.suggestions.length > 0 && (
                <div className="mt-8 rounded-2xl border border-green-100 bg-green-50 p-6">
                  <h3 className="mb-3 font-semibold text-green-800">
                    {t("analyze.suggestions")}
                  </h3>
                  <ul className="space-y-2">
                    {result.suggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-green-700"
                      >
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-8 flex justify-center gap-3">
                <Button
                  variant="outline"
                  className="rounded-full border-gray-200 shadow-none hover:bg-gray-50"
                  onClick={() => {
                    setStage("upload");
                    setResult(null);
                  }}
                >
                  {t("analyze.another")}
                </Button>
              </div>
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}
