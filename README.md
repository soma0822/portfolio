# Soma Inagaki — Portfolio

Next.js + TypeScript + Tailwind CSS で構築したポートフォリオサイト。

## 技術スタック

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Email**: Resend

## 機能

- Hero / About / Skills / Projects / Contact セクション
- お問い合わせフォーム（Route Handler + Resend によるメール送信）

## ローカル開発

```bash
# 依存関係インストール
npm install

# 環境変数を設定
cp .env.local.example .env.local
# .env.local に Resend の API キーを記入

# 開発サーバー起動
npm run dev
```

[http://localhost:3000](http://localhost:3000) で確認できます。

## 環境変数

| 変数名 | 説明 |
|--------|------|
| `RESEND_API_KEY` | Resend の API キー（[resend.com](https://resend.com) で取得） |
| `CONTACT_TO_EMAIL` | お問い合わせの送信先メールアドレス |
