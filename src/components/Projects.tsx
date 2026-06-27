// ==============================
// TypeScript 学習ポイント
// ==============================
//
// オプショナルチェイニング (?.): undefined かもしれない値に安全にアクセス
//   例: project.url?.startsWith("https") → url が undefined でもエラーにならない
// ==============================

import type { Project } from "@/types";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-12">Projects</h2>
        <ul className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <li
              key={project.id}
              className="flex flex-col bg-white border border-zinc-100 dark:bg-zinc-950 dark:border-zinc-800 rounded-2xl p-6 gap-4"
            >
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* タグ一覧 */}
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="text-xs bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              {/* リンク — project.github が存在するときだけ表示 */}
              <div className="flex gap-3 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors underline underline-offset-2"
                  >
                    GitHub
                  </a>
                )}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors underline underline-offset-2"
                  >
                    サイトを見る
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
