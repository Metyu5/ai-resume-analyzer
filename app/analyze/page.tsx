"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ResumeUpload from "@/components/analyze/ResumeUpload";
import Loading from "@/components/analyze/Loading";
import ScoreCircle from "@/components/analyze/ScoreCircle";
import AnalysisCard, { AnalysisStatus } from "@/components/analyze/AnalysisCard";
import { Button } from "@/components/ui/button";

type Stage = "upload" | "analyzing" | "result";

interface MockResult {
  score: number;
  keywordsMatched: number;
  keywordsTotal: number;
  findings: { title: string; description: string; status: AnalysisStatus }[];
}

const MOCK_RESULT: MockResult = {
  score: 78,
  keywordsMatched: 14,
  keywordsTotal: 20,
  findings: [
    {
      title: "Format ramah ATS",
      description:
        "Tidak ditemukan tabel atau kolom — resume Anda mudah dibaca sistem ATS.",
      status: "good",
    },
    {
      title: "Pencapaian belum terukur",
      description:
        "6 poin pengalaman kerja hanya menjelaskan tanggung jawab tanpa hasil yang terukur. Tambahkan angka jika memungkinkan.",
      status: "warning",
    },
    {
      title: "Kata kerja kurang kuat",
      description:
        "Frasa \"bertanggung jawab atas\" dan \"membantu dalam\" muncul 4 kali — ganti dengan kata kerja yang lebih kuat seperti \"Memimpin\" atau \"Menghasilkan\".",
      status: "warning",
    },
    {
      title: "Informasi kontak tidak lengkap",
      description: "Nomor telepon tidak ditemukan di bagian header.",
      status: "bad",
    },
  ],
};

export default function AnalyzePage() {
  const [stage, setStage] = useState<Stage>("upload");
  const [result, setResult] = useState<MockResult | null>(null);

  const handleAnalyze = (file: File, jobDescription: string) => {
    setStage("analyzing");
    // TODO: ganti dengan pemanggilan API asli — kirim `file` + `jobDescription`
    setTimeout(() => {
      setResult(MOCK_RESULT);
      setStage("result");
    }, 3800);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-blue-50/40 to-white pb-24 pt-32">
        <Container>
          {stage === "upload" && (
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Analisis Resume Anda
              </h1>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                Unggah resume Anda dan dapatkan skor ATS instan beserta
                masukan yang bisa langsung ditindaklanjuti.
              </p>
              <div className="mt-10">
                <ResumeUpload onAnalyze={handleAnalyze} />
              </div>
            </div>
          )}

          {stage === "analyzing" && <Loading />}

          {stage === "result" && result && (
            <div className="mx-auto max-w-3xl">
              <div className="flex flex-col items-center rounded-3xl border border-gray-100 bg-white p-10 shadow-sm">
                <ScoreCircle score={result.score} />
                <p className="mt-4 text-sm text-muted-foreground">
                  {result.keywordsMatched}/{result.keywordsTotal} kata kunci
                  cocok dengan deskripsi pekerjaan
                </p>
              </div>

              <div className="mt-8 space-y-4">
                {result.findings.map((finding) => (
                  <AnalysisCard key={finding.title} {...finding} />
                ))}
              </div>

              <div className="mt-8 flex justify-center gap-3">
                <Button
                  variant="outline"
                  className="rounded-full border-gray-200 shadow-none hover:bg-gray-50"
                  onClick={() => {
                    setStage("upload");
                    setResult(null);
                  }}
                >
                  Analisis Resume Lain
                </Button>
                <Button className="rounded-full bg-blue-600 hover:bg-blue-700">
                  Unduh Laporan
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