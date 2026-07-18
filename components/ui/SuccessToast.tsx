"use client";

import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

interface SuccessToastProps {
  message: string;
  onComplete?: () => void;
  duration?: number;
}

export default function SuccessToast({ message, onComplete, duration = 2500 }: SuccessToastProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 50);
    const hideTimer = setTimeout(() => setVisible(false), duration);
    const completeTimer = setTimeout(() => onComplete?.(), duration + 500);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      clearTimeout(completeTimer);
    };
  }, [duration, onComplete]);

  return (
    <div
      className={`fixed left-1/2 top-6 z-[100] -translate-x-1/2 transition-all duration-500 ease-out ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
      }`}
    >
      <div className="flex items-center gap-3 rounded-2xl border border-green-100 bg-white px-5 py-3.5 shadow-lg shadow-green-100/50">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-50">
          <CheckCircle2 className="h-5 w-5 text-green-600" />
        </div>
        <p className="text-sm font-medium text-gray-800">{message}</p>
      </div>
    </div>
  );
}
