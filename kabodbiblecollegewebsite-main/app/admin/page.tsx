"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-sm rounded-xl bg-white shadow-lg border border-gray-200 p-6">
        <h1 className="font-heading font-bold text-xl text-brand-purple mb-2 text-center">
          Admin Login
        </h1>
        <p className="text-sm text-gray-500 mb-6 text-center">
          Kabod Bible College
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              suppressHydrationWarning
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
              placeholder="Enter admin password"
              required
            />
          </div>
          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}
          <button
            suppressHydrationWarning
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded-lg bg-brand-purple text-white font-semibold text-sm hover:bg-brand-purple-dark focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2 disabled:opacity-60"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
