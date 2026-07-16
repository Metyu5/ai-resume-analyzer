import Link from "next/link";

import Container from "../layout/Container";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 to-white pb-20 pt-40">
            {/* Latar belakang dengan efek cahaya */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-blue-200/30 blur-3xl"
            />

            <Container>
                <div className="relative grid items-center gap-16 lg:grid-cols-2">
                    {/* Bagian kiri: teks utama */}
                    <div>
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-medium text-blue-700 animate-fade-in">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                            ANALISIS RESUME BERBASIS AI
                        </div>

                        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl animate-fade-in">
                            Ketahui dengan Pasti
                            <br />
                            Mengapa Resume Anda{" "}
                            <span className="text-blue-600">Ditolak</span>
                        </h1>

                        <p className="mt-6 max-w-md text-base text-muted-foreground animate-fade-in">
                            Unggah resume Anda dan deskripsi pekerjaan yang Anda inginkan.
                            Dalam waktu kurang dari satu menit, dapatkan analisis lengkap
                            mengenai kekuatan, kelemahan, serta hal-hal yang perlu diperbaiki
                            agar peluang diterima kerja semakin besar.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-in">
                            <Link
                                href="/analyze"
                                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
                            >
                                Analisis Resume Saya
                            </Link>

                            <Link
                                href="#sample"
                                className="inline-flex items-center justify-center rounded-full border border-gray-200 px-6 py-3 text-center text-sm shadow-none hover:bg-gray-50"
                            >
                                Lihat Contoh Laporan
                            </Link>
                        </div>

                        <p className="mt-6 text-xs text-muted-foreground">
                            Dipercaya oleh lebih dari 12.400 pencari kerja · Tanpa perlu
                            mendaftar
                        </p>
                    </div>

                    {/* Bagian kanan: kartu pratinjau skor */}
                    <div className="relative mx-auto w-full max-w-sm lg:mx-0 animate-fade-in">
                        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-xl shadow-blue-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                            <div className="mb-5 flex items-center justify-between border-b pb-4">
                                <div>
                                    <div className="mb-2 h-2.5 w-28 rounded-full bg-gray-200" />
                                    <div className="h-2 w-16 rounded-full bg-gray-100" />
                                </div>
                                <div className="h-8 w-8 rounded-full bg-gray-100" />
                            </div>

                            <div className="flex items-center justify-center">
                                <svg
                                    className="w-full max-w-xs"
                                    viewBox="0 0 600 380"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden
                                >
                                    <rect x="0" y="0" width="600" height="380" rx="18" fill="#ffffff" stroke="#eef2ff" />
                                    <rect x="28" y="30" width="220" height="20" rx="8" fill="#eef2ff"/>
                                    <rect x="28" y="64" width="520" height="12" rx="6" fill="#f3f4f6"/>
                                    <rect x="28" y="84" width="480" height="12" rx="6" fill="#f3f4f6"/>
                                    <rect x="28" y="104" width="420" height="12" rx="6" fill="#e6f0ff"/>
                                    <rect x="28" y="136" width="520" height="12" rx="6" fill="#f3f4f6"/>
                                    <rect x="28" y="156" width="380" height="12" rx="6" fill="#f3f4f6"/>
                                    <rect x="28" y="196" width="260" height="12" rx="6" fill="#e6f0ff"/>
                                    <rect x="28" y="220" width="480" height="12" rx="6" fill="#f3f4f6"/>
                                    <rect x="28" y="240" width="340" height="12" rx="6" fill="#f3f4f6"/>
                                    <rect x="28" y="280" width="120" height="12" rx="6" fill="#f3f4f6"/>
                                </svg>
                            </div>
                        </div>

                        {/* Badge skor mengambang */}
                        <div className="absolute -right-4 -top-4 rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-lg">
                            <p className="mb-0.5 text-[10px] font-medium text-muted-foreground">
                                SKOR ATS
                            </p>
                            <p className="text-lg font-bold text-blue-600">
                                94<span className="text-xs text-muted-foreground">/100</span>
                            </p>
                        </div>

                        <div className="absolute -bottom-5 -left-5 rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-lg">
                            <p className="mb-0.5 text-[10px] font-medium text-muted-foreground">
                                KATA KUNCI YANG SESUAI
                            </p>
                            <p className="text-lg font-bold text-blue-600">
                                18<span className="text-xs text-muted-foreground">/20</span>
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}