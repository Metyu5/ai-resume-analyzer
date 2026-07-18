"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import Container from "../layout/Container";
import { useTranslation } from "@/providers/LanguageProvider";
import SampleReport from "./SampleReport";

export default function Hero() {
    const { t } = useTranslation();
    const [showSample, setShowSample] = useState(false);

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 to-white pt-28 pb-16 lg:pt-40 lg:pb-20">
            <div
                aria-hidden
                className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-blue-200/30 blur-3xl"
            />

            <Container>
                <div className="relative grid items-center gap-10 lg:gap-16 lg:grid-cols-2">

                    {/* IMAGE */}
                    <div className="order-1 relative mx-auto w-full max-w-2xl animate-fade-in lg:order-2 lg:mx-0">
                        <Image
                            src="/hero/hero.png"
                            alt="AI Resume Analyzer"
                            width={600}
                            height={400}
                            className="w-full h-auto"
                            priority
                        />
                    </div>

                    {/* TEXT */}
                    <div className="order-2 lg:order-1">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-medium text-blue-700 animate-fade-in">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                            {t("hero.badge")}
                        </div>

                        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl animate-fade-in">
                            {t("hero.title1")}
                            <br />
                            {t("hero.title2")}{" "}
                            <span className="text-blue-600">
                                {t("hero.titleHighlight")}
                            </span>
                        </h1>

                        <p className="mt-6 max-w-md text-base text-muted-foreground animate-fade-in">
                            {t("hero.desc")}
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-in">
                            <Link
                                href="/analyze"
                                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
                            >
                                {t("hero.cta1")}
                            </Link>

                            <button
                                onClick={() => setShowSample(true)}
                                className="inline-flex items-center justify-center rounded-full border border-gray-200 px-6 py-3 text-center text-sm hover:bg-gray-50"
                            >
                                {t("hero.cta2")}
                            </button>
                        </div>

                        <p className="mt-6 text-xs text-muted-foreground">
                            {t("hero.trust")}
                        </p>
                    </div>

                </div>
            </Container>

            <SampleReport
                open={showSample}
                onOpenChange={setShowSample}
            />
        </section>
    );
}