import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-10 bg-black border-t border-gray-900/50">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <p className="text-gray-500 font-mono">© 2025 Ricardo Pereira.</p>
          <div className="flex gap-2 items-center">
            <span className="w-1 h-1 bg-emerald-600 rounded-full"></span>
            <span className="text-xs text-gray-600 font-mono">
              Desenvolvido com Next.js
            </span>
            <span className="w-1 h-1 bg-teal-600 rounded-full"></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
