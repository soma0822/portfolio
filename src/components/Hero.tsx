// ==============================
// TypeScript 学習ポイント
// ==============================
//
// Props なしのコンポーネント: 引数が不要なら定義しなくてよい
// ==============================

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-4xl w-full">
        <p className="text-sm font-mono text-zinc-400 mb-4 tracking-widest uppercase">
          Hello, world.
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold text-zinc-900 leading-tight mb-6">
          Soma Inagaki
        </h1>
        <p className="text-xl text-zinc-500 max-w-xl leading-relaxed mb-10">
          Android Camera Vendor HAL 開発をメインに、
          C / C++ を用いたカメラ制御・評価・不具合解析に取り組んでいます。
          Python や Excel VBA による業務自動化に加え、
          自己研鑽として TypeScript / Next.js、Flutter の学習にも取り組んでいます。
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-700 transition-colors"
          >
            プロジェクトを見る
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-zinc-200 text-zinc-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-50 transition-colors"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
}
