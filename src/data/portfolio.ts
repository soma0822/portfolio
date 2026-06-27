// ==============================
// TypeScript 学習ポイント
// ==============================
//
// import type: 型だけをインポートする（実行時には消える）
// ==============================

import type { Skill, Project, NavLink, ContactInfo } from "@/types";

export const navLinks: NavLink[] = [
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
];

export const skills: Skill[] = [
  // --- Web ---
  {
    name: "TypeScript",
    category: "web",
    description: "型安全な JavaScript のスーパーセット（自己研鑽中）",
  },
  {
    name: "Next.js",
    category: "web",
    description: "React ベースのフルスタックフレームワーク（自己研鑽中）",
  },
  // --- Mobile ---
  {
    name: "Flutter",
    category: "mobile",
    description: "Dart を使ったクロスプラットフォームアプリ開発（自己研鑽中）",
  },
  // --- 組み込み / 業務 ---
  {
    name: "C / C++",
    category: "embedded",
    description: "Android Camera Vendor HAL 開発・カメラ制御・不具合解析",
  },
  {
    name: "Python",
    category: "embedded",
    description: "業務効率化スクリプト・データ解析",
  },
  {
    name: "Excel VBA",
    category: "embedded",
    description: "社内ツール・レポート自動化",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "ポートフォリオサイト",
    description:
      "Next.js + TypeScript + Tailwind CSS で構築した自己紹介サイト。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/soma0822/portfolio",
  },
  {
    id: 2,
    title: "Textbook",
    description:
      "Flutter で開発した iOS アプリ。App Store にて公開中。",
    tags: ["Flutter", "Dart", "iOS"],
    url: "https://apps.apple.com/jp/app/textbook/id6772737099",
  },
];

export const contactInfo: ContactInfo = {
  email: "soma0822soma@gmail.com",
  github: "https://github.com/soma0822",
};
