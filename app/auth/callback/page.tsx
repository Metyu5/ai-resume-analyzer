"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2, CheckCircle2 } from "lucide-react";

export default function AuthCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

  useEffect(() => {
    const token = searchParams.get("token");
    const error = searchParams.get("error");

    if (error) {
      queueMicrotask(() => setStatus("error"));
      setTimeout(() => router.replace("/"), 1500);
      return;
    }

    if (token) {
      localStorage.setItem("auth_token", token);
      queueMicrotask(() => setStatus("success"));
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1500);
    } else {
      queueMicrotask(() => setStatus("error"));
      setTimeout(() => router.replace("/"), 1500);
    }
  }, [searchParams, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        {status === "loading" && (
          <div className="animate-[scaleIn_0.3s_ease-out]">
            <Loader2 className="h-10 w-10 animate-spin text-blue-600" />
          </div>
        )}
        {status === "success" && (
          <>
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 animate-[scaleIn_0.4s_ease-out]">
              <CheckCircle2 className="h-9 w-9 text-green-600 animate-[scaleIn_0.5s_ease-out_0.1s_both]" />
            </div>
            <p className="text-sm font-medium text-gray-800 animate-[fadeUp_0.4s_ease-out_0.2s_both]">
              Berhasil masuk!
            </p>
            <p className="text-xs text-muted-foreground animate-[fadeUp_0.4s_ease-out_0.35s_both]">
              Mengarahkan ke dashboard...
            </p>
          </>
        )}
        {status === "error" && (
          <p className="text-sm text-red-500 animate-[fadeUp_0.3s_ease-out]">
            Terjadi kesalahan. Mengarahkan kembali...
          </p>
        )}
      </div>
    </div>
  );
}
