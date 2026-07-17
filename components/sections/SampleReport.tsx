"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useTranslation } from "@/providers/LanguageProvider";
import ScoreCircle from "@/components/analyze/ScoreCircle";
import AnalysisCard from "@/components/analyze/AnalysisCard";

const SAMPLE_RESULT = {
  id: {
    score: 78,
    keywordsMatched: 14,
    keywordsTotal: 20,
    summary:
      "Resume Anda memiliki struktur yang cukup baik dan pengalaman kerja yang relevan. Namun, ada beberapa area yang perlu diperbaiki untuk meningkatkan skor ATS dan peluang diterima.",
    findings: [
      {
        title: "Format ATS Ramah",
        description:
          "Resume Anda menggunakan format teks biasa yang mudah dibaca oleh sistem ATS. Tidak ada tabel atau kolom yang mengganggu parsing.",
        status: "good" as const,
      },
      {
        title: "Pengalaman Kerja Relevan",
        description:
          "Pengalaman kerja Anda relevan dengan posisi yang dilamar, namun perlu ditambahkan angka pencapaian yang lebih spesifik.",
        status: "good" as const,
      },
      {
        title: "Kurangnya Kata Kunci Teknis",
        description:
          "Beberapa kata kunci teknis penting dari deskripsi pekerjaan belum muncul di resume Anda. Tambahkan skill yang disebutkan di lowongan.",
        status: "warning" as const,
      },
      {
        title: "Ringkasan Profil Terlalu Umum",
        description:
          "Bagian summary Anda masih terlalu generik. Buat lebih spesifik dengan menyebutkan tahun pengalaman dan keahlian utama.",
        status: "warning" as const,
      },
      {
        title: "Tidak Ada Pencapaian Terukur",
        description:
          "Sebagian besar deskripsi pekerjaan hanya menjelaskan tugas, bukan hasil. Tambahkan metrik seperti persentase atau angka.",
        status: "bad" as const,
      },
    ],
    missingKeywords: ["React.js", "TypeScript", "CI/CD", "Docker", "Agile", "REST API"],
    suggestions: [
      "Tambahkan 3-5 kata kunci teknis dari deskripsi pekerjaan ke bagian Skills",
      "Ubah setiap deskripsi pekerjaan menjadi pencapaian terukur (contoh: 'Meningkatkan performa 40%')",
      "Perbarui summary profil dengan menyebutkan tahun pengalaman dan spesialisasi",
      "Sertakan sertifikasi relevan jika ada, seperti AWS Certified atau Google Cloud",
      "Pastikan format konsisten: bulan-tahun untuk setiap posisi kerja",
    ],
  },
  en: {
    score: 78,
    keywordsMatched: 14,
    keywordsTotal: 20,
    summary:
      "Your resume has a fairly good structure and relevant work experience. However, there are several areas that need improvement to boost your ATS score and hiring chances.",
    findings: [
      {
        title: "ATS-Friendly Format",
        description:
          "Your resume uses a plain text format that is easily read by ATS systems. No tables or columns that interfere with parsing.",
        status: "good" as const,
      },
      {
        title: "Relevant Work Experience",
        description:
          "Your work experience is relevant to the position, but needs more specific achievement metrics.",
        status: "good" as const,
      },
      {
        title: "Missing Technical Keywords",
        description:
          "Several important technical keywords from the job description are missing from your resume. Add skills mentioned in the listing.",
        status: "warning" as const,
      },
      {
        title: "Generic Profile Summary",
        description:
          "Your summary section is still too generic. Make it more specific by mentioning years of experience and core expertise.",
        status: "warning" as const,
      },
      {
        title: "No Measurable Achievements",
        description:
          "Most job descriptions only list duties, not results. Add metrics like percentages or numbers to show impact.",
        status: "bad" as const,
      },
    ],
    missingKeywords: ["React.js", "TypeScript", "CI/CD", "Docker", "Agile", "REST API"],
    suggestions: [
      "Add 3-5 technical keywords from the job description to your Skills section",
      "Turn each job duty into a measurable achievement (e.g., 'Improved performance by 40%')",
      "Update your profile summary with years of experience and specialization",
      "Include relevant certifications if available, such as AWS Certified or Google Cloud",
      "Ensure consistent formatting: month-year for every position",
    ],
  },
  zh: {
    score: 78,
    keywordsMatched: 14,
    keywordsTotal: 20,
    summary:
      "您的简历结构和工作经验都还不错。但有几个方面需要改进，以提高ATS分数和录用机会。",
    findings: [
      {
        title: "ATS友好格式",
        description:
          "您的简历使用纯文本格式，ATS系统容易读取。没有影响解析的表格或分栏。",
        status: "good" as const,
      },
      {
        title: "相关工作经验",
        description:
          "您的工作经验与目标职位相关，但需要添加更具体的量化成果。",
        status: "good" as const,
      },
      {
        title: "缺少技术关键词",
        description:
          "职位描述中的几个重要技术关键词在您的简历中未出现。请添加招聘中提到的技能。",
        status: "warning" as const,
      },
      {
        title: "个人简介过于泛泛",
        description:
          "您的摘要部分仍然太笼统。请更具体地说明工作年限和专业领域。",
        status: "warning" as const,
      },
      {
        title: "缺少可量化成果",
        description:
          "大部分工作描述只列出了职责，而非成果。请添加百分比或数字等指标来展示影响力。",
        status: "bad" as const,
      },
    ],
    missingKeywords: ["React.js", "TypeScript", "CI/CD", "Docker", "Agile", "REST API"],
    suggestions: [
      "在技能部分添加3-5个职位描述中的技术关键词",
      "将每项工作职责转化为可量化的成果（例如：'提升性能40%）'",
      "用工作年限和专业方向更新个人简介",
      "如有相关证书请添加，如AWS认证或Google Cloud",
      "确保格式一致：每个职位使用「月-年」格式",
    ],
  },
  ja: {
    score: 78,
    keywordsMatched: 14,
    keywordsTotal: 20,
    summary:
      "履歴書の構造と職歴は比較的良好です。ただし、ATSスコアと採用チャンスを上げるために改善が必要な分野がいくつかあります。",
    findings: [
      {
        title: "ATSフレンドリーなフォーマット",
        description:
          "ATSシステムが簡単に読み取れるプレーンテキスト形式を使用しています。パースを妨げるテーブルやカラムはありません。",
        status: "good" as const,
      },
      {
        title: "関連する職歴",
        description:
          "職歴は応募先ポジションと関連していますが、より具体的な成果指標の追加が必要です。",
        status: "good" as const,
      },
      {
        title: "技術キーワードが不足",
        description:
          "求人説明の重要な技術キーワードの一部が履歴書に含まれていません。求人に記載されているスキルを追加してください。",
        status: "warning" as const,
      },
      {
        title: "プロフィール要約が汎用的",
        description:
          "要約セクションがまだ一般的すぎます。経験年数と専門分野を具体的に記載してください。",
        status: "warning" as const,
      },
      {
        title: "測定可能な成果がない",
        description:
          "ほとんどの職務記述は義務のみで、成果を示していません。影響力を示すためにパーセンテージや数字などの指標を追加してください。",
        status: "bad" as const,
      },
    ],
    missingKeywords: ["React.js", "TypeScript", "CI/CD", "Docker", "Agile", "REST API"],
    suggestions: [
      "スキルセクションに求人説明の技術キーワードを3〜5個追加",
      "各職務義務を測定可能な成果に変換（例：「パフォーマンスを40%向上」）",
      "経験年数と専門分野を含めてプロフィール要約を更新",
      "関連する資格がある場合は追加（AWS認定やGoogle Cloudなど）",
      "フォーマットを統一：すべてのポジションに「月-年」を使用",
    ],
  },
} as const;

interface SampleReportProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SampleReport({ open, onOpenChange }: SampleReportProps) {
  const { t, locale } = useTranslation();
  const result = SAMPLE_RESULT[locale] ?? SAMPLE_RESULT.id;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>{t("sample.badge")}</DialogTitle>
          <DialogDescription>
            {t("sample.desc")}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {result.summary && (
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
              <p className="text-sm text-blue-800">{result.summary}</p>
            </div>
          )}

          <div className="flex flex-col items-center rounded-3xl border border-gray-100 bg-gray-50 p-8">
            <ScoreCircle score={result.score} />
            <p className="mt-4 text-sm text-muted-foreground">
              {t("analyze.keywordsMatch", {
                matched: result.keywordsMatched,
                total: result.keywordsTotal,
              })}
            </p>
          </div>

          <div className="space-y-3">
            {result.findings.map((finding) => (
              <AnalysisCard key={finding.title} {...finding} />
            ))}
          </div>

          <div className="rounded-2xl border border-amber-100 bg-amber-50 p-4">
            <h4 className="mb-2 font-semibold text-sm text-amber-800">
              {t("analyze.missingKeywords")}
            </h4>
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

          <div className="rounded-2xl border border-green-100 bg-green-50 p-4">
            <h4 className="mb-2 font-semibold text-sm text-green-800">
              {t("analyze.suggestions")}
            </h4>
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
        </div>
      </DialogContent>
    </Dialog>
  );
}
