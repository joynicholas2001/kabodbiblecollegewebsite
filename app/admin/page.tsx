"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    fetch("/api/admin/settings", { credentials: "include" })
      .then((r) => { 
        if (mounted && r.ok) {
          setTimeout(() => {
            if (mounted) router.replace("/admin/dashboard");
          }, 10);
        }
      })
      .catch(() => {});
    return () => { mounted = false; };
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
        credentials: "include",
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        router.push("/admin/dashboard");
        return;
      }
      setError("Invalid password.");
    } catch {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-light flex items-center justify-center p-4">
      <div className="w-full max-w-sm rounded-xl bg-brand-card/35 shadow-card border border-brand-card p-6">
        <h1 className="font-heading font-bold text-xl text-brand-purple-dark mb-2 text-center">
          Admin Login
        </h1>
        <p className="text-sm text-brand-muted mb-6 text-center">
          Kabod Bible College
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-brand-purple-dark mb-1">
              Password
            </label>
            <div className="relative">
              <input
                suppressHydrationWarning
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-brand-card px-3 py-2 pr-10 text-brand-purple-dark focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent"
                placeholder="Enter admin password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-brand-muted hover:text-brand-purple-dark transition-colors"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
          {error && (
            <p className="text-sm text-brand-purple">{error}</p>
          )}
          <button
            suppressHydrationWarning
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded-lg bg-brand-purple text-white font-semibold text-sm hover:bg-brand-purple-dark focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 disabled:opacity-60"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
