import {
  FileSearch,
  ScanSearch,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

import Container from "../layout/Container";

const FEATURES = [
  {
    icon: FileSearch,
    title: "Analisis Resume Mendalam",
    description:
      "AI menganalisis struktur, format, dan isi resume Anda untuk menemukan kekurangan yang dapat mengurangi peluang diterima kerja.",
  },
  {
    icon: ScanSearch,
    title: "Pemeriksaan Kecocokan ATS",
    description:
      "Ketahui seberapa baik resume Anda kompatibel dengan sistem Applicant Tracking System (ATS) yang digunakan perusahaan.",
  },
  {
    icon: Lightbulb,
    title: "Saran Perbaikan Otomatis",
    description:
      "Dapatkan rekomendasi yang jelas dan mudah dipahami untuk meningkatkan kualitas resume Anda.",
  },
  {
    icon: TrendingUp,
    title: "Tingkatkan Peluang Diterima",
    description:
      "Optimalkan resume agar lebih menarik bagi perekrut dan meningkatkan peluang mendapatkan panggilan wawancara.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-white py-24 animate-fade-in"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
            Fitur Utama
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight">
            Semua yang Anda Butuhkan
            <br />
            untuk Resume yang Lebih Baik
          </h2>

          <p className="mt-5 text-muted-foreground">
            ResumeAI membantu Anda memahami kelemahan resume,
            meningkatkan kompatibilitas ATS, dan memberikan saran
            yang dapat langsung diterapkan.
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