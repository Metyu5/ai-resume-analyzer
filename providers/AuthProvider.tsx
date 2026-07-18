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
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function getStoredToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("auth_token");
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(getStoredToken);
  const [isLoading, setIsLoading] = useState(() => getStoredToken() !== null);
  const fetchedRef = useRef(false);

  useEffect(() => {
    if (!token || fetchedRef.current) return;
    fetchedRef.current = true;
    let cancelled = false;
    api
      .get<{ data: User }>("/user")
      .then((res) => {
        if (!cancelled) setUser(res.data.data);
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
  }, [token]);

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

  const logout = useCallback(() => {
    api.post("/logout").catch(() => {});
    localStorage.removeItem("auth_token");
    setToken(null);
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({ user, token, isLoading, login, logout }),
    [user, token, isLoading, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
