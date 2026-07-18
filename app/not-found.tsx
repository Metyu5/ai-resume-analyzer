import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
      <p className="text-7xl font-bold tracking-tight text-gray-200">404</p>
      <h1 className="mt-4 text-xl font-semibold text-foreground">Halaman Tidak Ditemukan</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Halaman yang Anda cari tidak ada atau telah dipindahkan.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
