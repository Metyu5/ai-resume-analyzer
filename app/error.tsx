"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
      <p className="text-7xl font-bold tracking-tight text-gray-200">!</p>
      <h1 className="mt-4 text-xl font-semibold text-foreground">Terjadi Kesalahan</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Sesuatu yang tidak terduga terjadi. Silakan coba lagi.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
      >
        Coba Lagi
      </button>
    </div>
  );
}
