import React, { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "helpers/hooks/useAuth";

export default function Header({ theme, position }) {
  const { logout, loading } = useAuth();
  const token = localStorage.getItem('token');

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logout();
    } catch (err) {
      // Error already handled by useAuth hook
      console.error("Logout failed:", err);
    }
  };

  return (
    <header className={[position, "w-full z-40 px-4 border-b-2 border-gray-600"].join(" ")}>
      <div className="container mx-auto py-5">
        <div className="flex justify-between items-center">
          <div className="items-center flex">
            <Link to="/">
              <img
                src="/images/content/logo.png"
                alt="Perfume"
                width={220}
              />
            </Link>
          </div>
          <div className="search-box">
            <input type="text" className="search-input" placeholder="Cari parfum kesukaanmu" />
            <img src="/images/content/search.png" className="search-icon" alt="" />
          </div>
          <div className="auth-wrapper flex">
          {token ? (
              <button
                onClick={handleLogout}
                disabled={loading}
                className="btn btn-login font-bold"
              >
                {loading ? "Loading..." : "KELUAR"}
              </button>
            ) : (
              <>
                <Link to="/login" className="btn btn-login font-bold">
                  MASUK
                </Link>
                <Link to="/register" className="btn btn-register font-bold">
                  DAFTAR
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
