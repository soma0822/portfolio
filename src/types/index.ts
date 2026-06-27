// ==============================
// TypeScript 学習ポイント
// ==============================
//
// interface: オブジェクトの「形」を定義する
// type:      型に名前をつける（interface より柔軟）
// ?:         省略可能なプロパティ（undefined になりえる）
// |:         ユニオン型（どちらかの値のみ許可）
// ==============================

// スキルのカテゴリーをユニオン型で定義
// "web" | "mobile" | "embedded" のどれかしか入れられない
export type SkillCategory = "web" | "mobile" | "embedded";

// スキル1件分の型
export interface Skill {
  name: string;
  category: SkillCategory;
  description: string;
}

// プロジェクト1件分の型
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[]; // string の配列
  url?: string;   // ? = 省略可能（なくてもOK）
  github?: string;
}

// ナビゲーションリンクの型
export interface NavLink {
  label: string;
  href: string;
}

// 問い合わせ先の型
export interface ContactInfo {
  email: string;
  github: string;
  twitter?: string; // オプション
}

// お問い合わせフォームの入力値
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// API レスポンスの型
export interface ApiResponse {
  success: boolean;
  message: string;
}
