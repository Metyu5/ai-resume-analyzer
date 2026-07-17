"use client";

import { useCallback, useRef, useState } from "react";
import { Upload, FileText, X, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { useTranslation } from "@/providers/LanguageProvider";

interface ResumeUploadProps {
  onAnalyze: (file: File, jobDescription: string) => void;
}

export default function ResumeUpload({ onAnalyze }: ResumeUploadProps) {
  const { t } = useTranslation();
  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [showJobAlert, setShowJobAlert] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(
    (f: File | undefined) => {
      if (!f) return;
      const validTypes = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!validTypes.includes(f.type)) {
        alert(t("upload.invalidFile"));
        return;
      }
      setFile(f);
    },
    [t]
  );

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    handleFile(e.dataTransfer.files?.[0]);
  };

  const handleSubmit = () => {
    if (!file) return;
    if (!jobDescription.trim()) {
      setShowJobAlert(true);
      return;
    }
    onAnalyze(file, jobDescription);
  };

  const handleProceedWithoutJob = () => {
    setShowJobAlert(false);
    if (file) onAnalyze(file, jobDescription);
  };

  const handleFillJob = () => {
    setShowJobAlert(false);
    document.getElementById("job-description")?.focus();
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
              {t("upload.dragDrop")}
            </p>
            <p className="mb-5 text-xs text-muted-foreground">
              {t("upload.hint")}
            </p>
            <Button
              type="button"
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
              className="rounded-full border-gray-200 shadow-none hover:bg-gray-50"
            >
              {t("upload.pickFile")}
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
              aria-label={t("upload.removeFile")}
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
          {t("upload.jobLabel")}{" "}
          <span className="font-normal text-muted-foreground">
            {t("upload.jobOptional")}
          </span>
        </label>
        <textarea
          id="job-description"
          rows={5}
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder={t("upload.jobPlaceholder")}
          className="w-full resize-none rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <Button
        disabled={!file}
        onClick={handleSubmit}
        size="lg"
        className="mt-5 w-full rounded-full bg-blue-600 hover:bg-blue-700 disabled:opacity-40"
      >
        {t("upload.submit")}
      </Button>

      <Dialog open={showJobAlert} onOpenChange={setShowJobAlert}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-amber-500" />
              {t("upload.emptyJobTitle")}
            </DialogTitle>
            <DialogDescription>
              {t("upload.emptyJobDesc")}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={handleFillJob}>
              {t("upload.fillJob")}
            </Button>
            <Button onClick={handleProceedWithoutJob}>
              {t("upload.proceedAnyway")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
