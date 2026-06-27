// ==============================
// TypeScript 学習ポイント
// ==============================
//
// ContactInfo の ? プロパティ: twitter は省略可能
// && 演算子: 左辺が truthy のときだけ右辺を評価・描画
// ==============================

import type { ContactInfo } from "@/types";

interface ContactProps {
  info: ContactInfo;
}

export default function Contact({ info }: ContactProps) {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">Contact</h2>
        <p className="text-zinc-500 mb-10">
          お仕事のご相談・勉強会のお誘いなど、お気軽にどうぞ。
        </p>
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-3">
            <span className="text-sm font-mono text-zinc-400 w-16">Email</span>
            <a
              href={`mailto:${info.email}`}
              className="text-zinc-900 hover:underline"
            >
              {info.email}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-sm font-mono text-zinc-400 w-16">GitHub</span>
            <a
              href={info.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-900 hover:underline"
            >
              {info.github.replace("https://", "")}
            </a>
          </li>
          {/* twitter は省略可能なので、存在するときだけ表示 */}
          {info.twitter && (
            <li className="flex items-center gap-3">
              <span className="text-sm font-mono text-zinc-400 w-16">X</span>
              <a
                href={info.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-900 hover:underline"
              >
                {info.twitter.replace("https://", "")}
              </a>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}
