// ==============================
// TypeScript 学習ポイント
// ==============================
//
// NextRequest: Next.js が拡張した Request 型
// Response.json(): JSON レスポンスを返す Web 標準の API
// process.env: 環境変数にアクセスする Node.js の組み込みオブジェクト
// ==============================

import { Resend } from "resend";
import type { ContactFormData, ApiResponse } from "@/types";

const resend = new Resend(process.env.RESEND_API_KEY);

// バリデーション: 入力値が正しい形か確認する
function validate(data: unknown): data is ContactFormData {
  if (typeof data !== "object" || data === null) return false;
  const d = data as Record<string, unknown>;
  return (
    typeof d.name === "string" && d.name.trim().length > 0 &&
    typeof d.email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email) &&
    typeof d.message === "string" && d.message.trim().length > 0
  );
}

export async function POST(request: Request): Promise<Response> {
  const body: unknown = await request.json();

  if (!validate(body)) {
    const res: ApiResponse = { success: false, message: "入力値が不正です。" };
    return Response.json(res, { status: 400 });
  }

  const { name, email, message } = body;

  const { error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: process.env.CONTACT_TO_EMAIL ?? "soma0822soma@gmail.com",
    subject: `【Portfolio】${name} さんからお問い合わせ`,
    text: `名前: ${name}\nメール: ${email}\n\n${message}`,
  });

  if (error) {
    const res: ApiResponse = { success: false, message: "送信に失敗しました。" };
    return Response.json(res, { status: 500 });
  }

  const res: ApiResponse = { success: true, message: "送信しました。" };
  return Response.json(res);
}
