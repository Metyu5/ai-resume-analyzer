import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "../layout/Container";

const FEATURES = [
  "Analisis Resume AI",
  "Skor ATS",
  "Rekomendasi Perbaikan",
  "Pencocokan Kata Kunci",
  "Laporan Lengkap",
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 bg-white animate-fade-in"
    >
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
            Harga
          </span>

          <h2 className="mt-5 text-4xl font-bold">
            Satu Paket
            <br />
            Semua Fitur Premium
          </h2>

          <p className="mt-5 text-muted-foreground">
            Bayar sekali untuk mendapatkan analisis resume yang lengkap
            dan meningkatkan peluang Anda mendapatkan pekerjaan impian.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-md rounded-3xl border border-blue-200 bg-blue-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="text-center">
            <p className="font-medium text-blue-600">
              Paket Premium
            </p>

            <h3 className="mt-4 text-5xl font-bold">
              Rp49.000
            </h3>

            <p className="mt-2 text-muted-foreground">
              sekali bayar
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
            Mulai Analisis Resume
          </Button>
        </div>
      </Container>
    </section>
  );
}