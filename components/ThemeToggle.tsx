"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-1 bg-slate-900 dark:bg-slate-800 border border-slate-700 rounded-full p-1.5 shadow-xl backdrop-blur-sm">
      <button
        onClick={() => !isDark || toggleTheme()}
        title="Light mode"
        aria-label="Switch to light mode"
        className={`p-2 rounded-full transition-all duration-200 ${
          !isDark
            ? "bg-amber-400 text-slate-900 shadow-md"
            : "text-slate-500 hover:text-slate-300"
        }`}
      >
        <Sun className="w-4 h-4" />
      </button>

      <div className="w-px h-3 bg-slate-700 rounded-full" />

      <button
        onClick={() => isDark || toggleTheme()}
        title="Dark mode"
        aria-label="Switch to dark mode"
        className={`p-2 rounded-full transition-all duration-200 ${
          isDark
            ? "bg-blue-600 text-white shadow-md"
            : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
        }`}
      >
        <Moon className="w-4 h-4" />
      </button>
    </div>
  );
}
