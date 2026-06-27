// ==============================
// TypeScript 学習ポイント
// ==============================
//
// "use client": ブラウザで動くコンポーネントの宣言
// useState<T>:  状態変数に型をつける
// FormEvent:    フォーム送信イベントの型
// ==============================

"use client";

import { useState } from "react";
import type { ContactFormData, ApiResponse } from "@/types";

// フォームの送信状態
type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // input / textarea の変更を form ステートに反映
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data: ApiResponse = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.message);
      }
    } catch {
      setStatus("error");
      setErrorMessage("通信エラーが発生しました。");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-lg">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium text-zinc-700">
          お名前
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          className="border border-zinc-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-zinc-900"
          placeholder="山田 太郎"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-zinc-700">
          メールアドレス
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className="border border-zinc-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-zinc-900"
          placeholder="example@email.com"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-zinc-700">
          メッセージ
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="border border-zinc-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-zinc-900 resize-none"
          placeholder="お気軽にどうぞ"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-zinc-900 text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-zinc-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed self-start"
      >
        {status === "sending" ? "送信中..." : "送信する"}
      </button>

      {status === "success" && (
        <p className="text-sm text-green-600">送信しました。ありがとうございます。</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-500">{errorMessage}</p>
      )}
    </form>
  );
}
