"use client";

import { useCallback, useRef, useState } from "react";
import { Upload, FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResumeUploadProps {
  onAnalyze: (file: File, jobDescription: string) => void;
}

export default function ResumeUpload({ onAnalyze }: ResumeUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((f: File | undefined) => {
    if (!f) return;
    const validTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!validTypes.includes(f.type)) {
      alert("Mohon unggah file PDF atau DOCX.");
      return;
    }
    setFile(f);
  }, []);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    handleFile(e.dataTransfer.files?.[0]);
  };

  return (
    <div className="mx-auto w-full max-w-xl">
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={`relative rounded-3xl border-2 border-dashed p-10 text-center transition-colors ${
          isDragging
            ? "border-blue-500 bg-blue-50"
            : "border-gray-200 bg-white"
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.docx"
          className="hidden"
          onChange={(e) => handleFile(e.target.files?.[0])}
        />

        {!file ? (
          <>
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
              <Upload className="h-6 w-6 text-blue-600" />
            </div>
            <p className="mb-1 text-sm font-medium">
              Seret & lepas resume Anda di sini
            </p>
            <p className="mb-5 text-xs text-muted-foreground">
              atau klik untuk memilih file — PDF atau DOCX, maksimal 5MB
            </p>
            <Button
              type="button"
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
              className="rounded-full border-gray-200 shadow-none hover:bg-gray-50"
            >
              Pilih File
            </Button>
          </>
        ) : (
          <div className="flex items-center justify-between rounded-2xl bg-blue-50 px-4 py-3 text-left">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 shrink-0 text-blue-600" />
              <div>
                <p className="text-sm font-medium">{file.name}</p>
                <p className="text-xs text-muted-foreground">
                  {(file.size / 1024).toFixed(0)} KB
                </p>
              </div>
            </div>
            <button
              onClick={() => setFile(null)}
              aria-label="Hapus file"
              className="rounded-full p-1 text-muted-foreground hover:bg-blue-100 hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      <div className="mt-5">
        <label
          htmlFor="job-description"
          className="mb-2 block text-sm font-medium"
        >
          Deskripsi pekerjaan{" "}
          <span className="font-normal text-muted-foreground">
            (opsional, membantu pencocokan kata kunci)
          </span>
        </label>
        <textarea
          id="job-description"
          rows={5}
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Tempel lowongan pekerjaan yang Anda lamar..."
          className="w-full resize-none rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <Button
        disabled={!file}
        onClick={() => file && onAnalyze(file, jobDescription)}
        size="lg"
        className="mt-5 w-full rounded-full bg-blue-600 hover:bg-blue-700 disabled:opacity-40"
      >
        Analisis Resume Saya
      </Button>
    </div>
  );
}