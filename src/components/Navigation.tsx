// ==============================
// TypeScript 学習ポイント
// ==============================
//
// Props の型定義: コンポーネントが受け取る引数の型
// NavLink[]:    NavLink 型の配列
// ==============================

import type { NavLink } from "@/types";

// Props（コンポーネントへの引数）の型を interface で定義
interface NavigationProps {
  links: NavLink[];
}

export default function Navigation({ links }: NavigationProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-100 dark:border-zinc-800">
      <nav className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">Portfolio</span>
        <ul className="flex gap-6">
          {/* links 配列を map でループして各リンクを表示 */}
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
