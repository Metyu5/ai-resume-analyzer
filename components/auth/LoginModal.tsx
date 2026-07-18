"use client";

import { useState } from "react";
import { Mail, Lock, User, LogIn, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useTranslation } from "@/providers/LanguageProvider";
import { useAuth } from "@/providers/AuthProvider";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function GoogleIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function LoginModal({ open, onOpenChange }: LoginModalProps) {
  const { t } = useTranslation();
  const { login, register } = useAuth();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setPasswordConfirmation("");
    setErrors({});
    setSuccess(false);
  };

  const switchMode = (newMode: "login" | "register") => {
    setMode(newMode);
    resetForm();
  };

  const handleSocialLogin = (provider: string) => {
    window.location.href = `${API_URL}/auth/${provider}/redirect`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (mode === "register" && !name.trim()) {
      newErrors.name = t("login.errorName");
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = t("login.errorEmail");
    }
    if (!password) {
      newErrors.password = t("login.errorPassword");
    }
    if (mode === "register" && password !== passwordConfirmation) {
      newErrors.passwordConfirmation = t("login.errorPasswordConfirm");
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);
    try {
      if (mode === "login") {
        await login(email, password);
      } else {
        await register(name, email, password, passwordConfirmation);
      }
      setSuccess(true);
      setTimeout(() => {
        onOpenChange(false);
        resetForm();
        window.location.href = "/dashboard";
      }, 1500);
    } catch (err: unknown) {
      const apiErrors = (err as { response?: { data?: { errors?: Record<string, string[]> } } })?.response?.data?.errors;
      if (apiErrors) {
        const mapped: Record<string, string> = {};
        for (const [key, msgs] of Object.entries(apiErrors)) {
          mapped[key] = msgs[0];
        }
        setErrors(mapped);
      } else {
        setErrors({ general: t("login.errorInvalid") });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { onOpenChange(v); if (!v) resetForm(); }}>
      <DialogContent className="gap-0 p-0 overflow-hidden" showCloseButton>
        {success ? (
          <div className="flex flex-col items-center px-6 py-12">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 animate-[scaleIn_0.4s_ease-out]">
              <CheckCircle2 className="h-9 w-9 text-green-600 animate-[scaleIn_0.5s_ease-out_0.1s_both]" />
            </div>
            <p className="mt-5 text-lg font-semibold text-gray-900 animate-[fadeUp_0.4s_ease-out_0.2s_both]">
              {t("login.success")}
            </p>
            <p className="mt-1.5 text-sm text-muted-foreground animate-[fadeUp_0.4s_ease-out_0.35s_both]">
              {t("login.redirecting")}
            </p>
          </div>
        ) : (
        <>
        <div className="px-6 pt-6 pb-0">
          <DialogHeader className="mb-0 flex flex-col items-center text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>

            <DialogTitle className="text-xl font-semibold">
              {mode === "login" ? t("login.title") : t("login.registerTitle")}
            </DialogTitle>

            <DialogDescription className="max-w-sm">
              {mode === "login" ? t("login.desc") : t("login.registerDesc")}
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="px-6 pt-4">
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => handleSocialLogin("google")}
              className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-gray-50"
            >
              <GoogleIcon />
              Google
            </button>
            <button
              type="button"
              onClick={() => handleSocialLogin("github")}
              className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-gray-50"
            >
              <GitHubIcon />
              GitHub
            </button>
          </div>

          <div className="relative my-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-3 text-muted-foreground">{t("login.orContinue")}</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="px-6 pb-6">
          {errors.general && (
            <div className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
              {errors.general}
            </div>
          )}

          {mode === "register" && (
            <div className="mb-4">
              <label htmlFor="auth-name" className="mb-1.5 block text-sm font-medium text-foreground">
                {t("login.name")}
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="auth-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t("login.namePlaceholder")}
                  className="pl-10"
                  autoComplete="name"
                />
              </div>
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="auth-email" className="mb-1.5 block text-sm font-medium text-foreground">
              {t("login.email")}
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="auth-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("login.emailPlaceholder")}
                className="pl-10"
                autoComplete="email"
              />
            </div>
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <div className="mb-1.5 flex items-center justify-between">
              <label htmlFor="auth-password" className="text-sm font-medium text-foreground">
                {t("login.password")}
              </label>
              {mode === "login" && (
                <button type="button" className="text-xs text-blue-600 hover:underline">
                  {t("login.forgot")}
                </button>
              )}
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="auth-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t("login.passwordPlaceholder")}
                autoComplete={mode === "login" ? "current-password" : "new-password"}
                className="pl-10"
              />
            </div>
            {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
          </div>

          {mode === "register" && (
            <div className="mb-6">
              <label htmlFor="auth-password-confirm" className="mb-1.5 block text-sm font-medium text-foreground">
                {t("login.passwordConfirm")}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="auth-password-confirm"
                  type="password"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  placeholder={t("login.passwordConfirmPlaceholder")}
                  autoComplete="new-password"
                  className="pl-10"
                />
              </div>
              {errors.passwordConfirmation && (
                <p className="mt-1 text-xs text-red-500">{errors.passwordConfirmation}</p>
              )}
            </div>
          )}

          {mode === "login" && <div className="mb-6" />}

          <Button
            type="submit"
            className="w-full rounded-2xl bg-blue-600 text-white hover:bg-blue-700"
            size="lg"
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <LogIn className="h-4 w-4" />
            )}
            {loading
              ? t("login.loading")
              : mode === "login"
                ? t("login.submit")
                : t("login.registerSubmit")}
          </Button>

          <p className="mt-4 text-center text-sm text-muted-foreground">
            {mode === "login" ? t("login.noAccount") : t("login.hasAccount")}{" "}
            <button
              type="button"
              onClick={() => switchMode(mode === "login" ? "register" : "login")}
              className="font-medium text-blue-600 hover:underline"
            >
              {mode === "login" ? t("login.register") : t("login.loginLink")}
            </button>
          </p>
        </form>
        </>
        )}
      </DialogContent>
    </Dialog>
  );
}
