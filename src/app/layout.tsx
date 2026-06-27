import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // OGP画像などの相対パスを解決する基準URL（本番のドメイン）
  metadataBase: new URL("https://portfolio-xi-kohl-0nqqpx3xhb.vercel.app"),
  title: "Soma Inagaki | Portfolio",
  description:
    "組み込み系エンジニア。Android Camera Vendor HAL 開発をメインに、TypeScript / Next.js・Flutter を学習中。",
  keywords: [
    "ポートフォリオ",
    "エンジニア",
    "TypeScript",
    "Next.js",
    "Flutter",
    "Android",
    "組み込み",
  ],
  authors: [{ name: "Soma Inagaki" }],
  creator: "Soma Inagaki",
  // SNSでシェアされたときの表示（OGP）
  openGraph: {
    type: "website",
    locale: "ja_JP",
    title: "Soma Inagaki | Portfolio",
    description:
      "組み込み系エンジニア。TypeScript / Next.js・Flutter を学習中のポートフォリオサイト。",
    siteName: "Soma Inagaki Portfolio",
  },
  // Twitter(X) でシェアされたときの表示
  twitter: {
    card: "summary_large_image",
    title: "Soma Inagaki | Portfolio",
    description: "組み込み系エンジニアのポートフォリオサイト。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
