import { CheckCircle2, AlertTriangle, XCircle, LucideIcon } from "lucide-react";

export type AnalysisStatus = "good" | "warning" | "bad";

interface AnalysisCardProps {
  title: string;
  description: string;
  status: AnalysisStatus;
}

const STATUS_CONFIG: Record<AnalysisStatus, { icon: LucideIcon; color: string; bg: string }> = {
  good: { icon: CheckCircle2, color: "text-blue-600", bg: "bg-blue-50" },
  warning: { icon: AlertTriangle, color: "text-amber-500", bg: "bg-amber-50" },
  bad: { icon: XCircle, color: "text-red-500", bg: "bg-red-50" },
};

export default function AnalysisCard({
  title,
  description,
  status,
}: AnalysisCardProps) {
  const { icon: Icon, color, bg } = STATUS_CONFIG[status];

  return (
    <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5">
      <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${bg}`}>
        <Icon className={`h-4 w-4 ${color}`} />
      </div>
      <div>
        <h4 className="text-sm font-semibold">{title}</h4>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}