import { Upload, ScanSearch, FileCheck } from "lucide-react";
import Container from "../layout/Container";

const STEPS = [
  {
    icon: Upload,
    title: "Unggah Resume",
    description:
      "Unggah resume Anda dalam format PDF atau DOCX dengan mudah dan aman.",
  },
  {
    icon: ScanSearch,
    title: "AI Menganalisis Resume",
    description:
      "AI akan mengevaluasi struktur, isi, kata kunci, dan tingkat kompatibilitas ATS.",
  },
  {
    icon: FileCheck,
    title: "Terima Laporan Lengkap",
    description:
      "Dapatkan skor ATS, daftar kekurangan, serta rekomendasi yang dapat langsung diterapkan.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-blue-50/40 animate-fade-in"
    >
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
            Cara Kerja
          </span>

          <h2 className="mt-5 text-4xl font-bold">
            Hanya 3 Langkah
            <br />
            untuk Mendapatkan Resume Terbaik
          </h2>

          <p className="mt-5 text-muted-foreground">
            Tidak perlu pengalaman teknis. AI akan membantu Anda
            menganalisis resume hanya dalam waktu kurang dari satu menit.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {STEPS.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative rounded-3xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="absolute right-6 top-6 text-5xl font-bold text-gray-100">
                  0{index + 1}
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
                  <Icon className="h-7 w-7 text-blue-600" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 text-muted-foreground leading-7">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}