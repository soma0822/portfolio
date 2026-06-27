// ==============================
// TypeScript 学習ポイント
// ==============================
//
// Props なしのコンポーネント
// ==============================

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-zinc-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-zinc-900 mb-12">About</h2>
        <div className="grid sm:grid-cols-2 gap-12">
          <div>
            <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-widest mb-4">
              本業
            </h3>
            <p className="text-zinc-600 leading-relaxed">
              組み込み系エンジニアとして、Android Camera Vendor HAL 開発に携わっています。
              C / C++ を用いたカメラ制御・評価・不具合解析が主な業務です。
              Python や Excel VBA を活用した業務効率化にも取り組んでいます。
            </p>
          </div>
          <div>
            <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-widest mb-4">
              自己研鑽
            </h3>
            <p className="text-zinc-600 leading-relaxed">
              プライベートでは TypeScript / Next.js を使った Web アプリ開発と、
              Flutter によるモバイルアプリ開発を学習中です。
              このポートフォリオサイトもその成果のひとつです。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
