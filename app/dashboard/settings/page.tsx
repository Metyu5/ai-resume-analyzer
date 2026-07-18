import { Metadata } from "next";
import SettingsClient from "./SettingsClient";

export const metadata: Metadata = {
  title: "Pengaturan — ResumeAI",
  description: "Kelola pengaturan akun ResumeAI Anda.",
  robots: { index: false, follow: false },
};

export default function SettingsPage() {
  return <SettingsClient />;
}
