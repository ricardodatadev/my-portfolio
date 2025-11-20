"use client";

import { useState, useEffect } from "react";

interface PreloaderProps {
  onLoadComplete: () => void;
}

export default function Preloader({ onLoadComplete }: PreloaderProps) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setLoading(false);
            onLoadComplete();
          }, 300);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onLoadComplete]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-gray-950 to-black">
      <div className="text-center flex flex-col items-center">
        <div className="mb-8">
          <div className="relative inline-block">
            {/* Animação do círculo com gradiente mais escuro */}
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-emerald-700 border-t-teal-700"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold text-emerald-500 font-mono">
                RP
              </span>
            </div>
          </div>
        </div>

        <h2 className="mb-4 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-600 font-mono">
          Carregando Portfolio...
        </h2>

        {/* Barra de progresso centralizada com o texto */}
        <div className="h-2 w-64 mx-auto overflow-hidden rounded-full bg-gray-900/80 border border-gray-800/50">
          <div
            className="h-full bg-gradient-to-r from-emerald-700 to-teal-700 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="mt-4 text-sm text-gray-500 font-mono">{progress}%</p>
      </div>
    </div>
  );
}
