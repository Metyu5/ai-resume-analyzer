"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, useRef } from "react";
import api from "@/services/api";

interface User {
  id: number;
  name: string;
  email: string;
  created_at: string;
}

interface AuthContextValue {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, passwordConfirmation: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function readToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("auth_token");
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(readToken);
  const [isLoading, setIsLoading] = useState(true);
  const fetchedRef = useRef(false);

  useEffect(() => {
    if (fetchedRef.current) return;
    fetchedRef.current = true;
    const stored = localStorage.getItem("auth_token");
    let cancelled = false;

    if (!stored) {
      setTimeout(() => {
        if (!cancelled) setIsLoading(false);
      }, 0);
      return () => { cancelled = true; };
    }

    api
      .get<{ data: User }>("/user")
      .then((res) => {
        if (!cancelled) {
          setToken(stored);
          setUser(res.data.data);
        }
      })
      .catch(() => {
        if (!cancelled) {
          localStorage.removeItem("auth_token");
          setToken(null);
        }
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const res = await api.post<{ data: { user: User; token: string } }>("/login", {
      email,
      password,
    });
    const { user: u, token: t } = res.data.data;
    localStorage.setItem("auth_token", t);
    setToken(t);
    setUser(u);
    setIsLoading(false);
  }, []);

  const register = useCallback(async (name: string, email: string, password: string, passwordConfirmation: string) => {
    const res = await api.post<{ data: { user: User; token: string } }>("/register", {
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
    });
    const { user: u, token: t } = res.data.data;
    localStorage.setItem("auth_token", t);
    setToken(t);
    setUser(u);
    setIsLoading(false);
  }, []);

  const logout = useCallback(() => {
    api.post("/logout").catch(() => {});
    localStorage.removeItem("auth_token");
    setToken(null);
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({ user, token, isLoading, login, register, logout }),
    [user, token, isLoading, login, register, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
