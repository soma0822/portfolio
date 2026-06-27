// ==============================
// TypeScript 学習ポイント
// ==============================
//
// filter(): 配列から条件に合う要素だけを取り出す
//   - 引数の型も TypeScript で守られている
// Record<K, V>: キーが K、値が V のオブジェクト型
// ==============================

import type { Skill, SkillCategory } from "@/types";

interface SkillsProps {
  skills: Skill[];
}

// カテゴリーの表示ラベルを定義
// Record<SkillCategory, string> = { web: string; mobile: string; embedded: string }
const categoryLabel: Record<SkillCategory, string> = {
  web:      "Web アプリ",
  mobile:   "スマホアプリ",
  embedded: "組み込み / 業務",
};

// カテゴリーごとにスキルカードをまとめて表示するサブコンポーネント
interface SkillGroupProps {
  category: SkillCategory;
  skills: Skill[];
}

function SkillGroup({ category, skills }: SkillGroupProps) {
  // filter でカテゴリーが一致するスキルだけ取り出す
  const filtered = skills.filter((s) => s.category === category);

  if (filtered.length === 0) return null;

  return (
    <div>
      <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-widest mb-4">
        {categoryLabel[category]}
      </h3>
      <ul className="flex flex-col gap-3">
        {filtered.map((skill) => (
          <li
            key={skill.name}
            className="flex flex-col gap-1 bg-white border border-zinc-100 rounded-xl px-5 py-4"
          >
            <span className="font-semibold text-zinc-900">{skill.name}</span>
            <span className="text-sm text-zinc-500">{skill.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-zinc-900 mb-12">Skills</h2>
        <div className="grid sm:grid-cols-2 gap-10">
          <SkillGroup category="web"      skills={skills} />
          <SkillGroup category="mobile"   skills={skills} />
          <SkillGroup category="embedded" skills={skills} />
        </div>
      </div>
    </section>
  );
}
