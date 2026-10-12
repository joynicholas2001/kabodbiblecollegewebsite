"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Lock, BookOpen } from "lucide-react";

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
    return () => {
      mounted = false;
    };
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
      setError("Invalid password. Please try again.");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-forest flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      <div className="w-full max-w-sm relative z-10">
        {/* Logo Area */}
        <div className="text-center mb-8">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gold/20 border border-brand-gold/40 mb-4 shadow-lg backdrop-blur-sm">
            <BookOpen className="h-8 w-8 text-brand-gold" />
          </div>
          <h1 className="font-heading font-extrabold text-2xl text-white">
            Kabod Bible College
          </h1>
          <p className="text-slate-400 text-sm mt-1">Admin Portal</p>
        </div>

        {/* Card */}
        <div className="rounded-2xl bg-white/8 backdrop-blur-md border border-white/15 shadow-2xl p-8">
          <div className="flex items-center gap-2.5 mb-6">
            <Lock className="h-4 w-4 text-brand-gold" />
            <h2 className="font-heading font-semibold text-white text-lg">Sign In</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-slate-200 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  suppressHydrationWarning
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 pr-11 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-gold/50 backdrop-blur-sm transition-all"
                  placeholder="Enter admin password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-400 hover:text-brand-gold transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-4.5 w-4.5" />
                  ) : (
                    <Eye className="h-4.5 w-4.5" />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className="rounded-xl bg-red-500/15 border border-red-400/25 px-4 py-2.5">
                <p className="text-sm text-red-300">{error}</p>
              </div>
            )}

            <button
              suppressHydrationWarning
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-brand-gold text-brand-navy-dark font-heading font-bold text-sm hover:bg-brand-gold-light focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-navy disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-md"
            >
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
