import React, { useState } from "react";
import { useAuth } from "helpers/hooks/useAuth";

export default function LoginPage() {
  const { login, loading, error } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData);
    } catch (err) {
      // Error already handled by useAuth hook
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg">
        <div className="text-left mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Selamat Datang
          </h1>
          <p className="text-gray-500 text-sm">
            Silahkan masukkan email atau nomor telepon dan password Anda untuk
            mulai menggunakan aplikasi
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
              Email / Nomor Telpon
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Contoh: admin@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Masukkan password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {loading ? "LOADING..." : "MASUK"}
          </button>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">
              Belum punya akun?{" "}
              <a href="/register" className="text-blue-500 hover:underline">
                Daftar Sekarang
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
