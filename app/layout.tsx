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
  title: "钟政 · 个人主页 | 深AI夜校联合创始人",
  description:
    "钟政，深AI夜校联合创始人与AI课程讲师，专注AI技术应用与培训，推动数字化转型。",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: "钟政 · 个人主页",
    description:
      "深AI夜校联合创始人、AI课程讲师，专注AI技术在各行业的应用与培训。",
    images: [
      {
        url: "/avatar.jpg",
        width: 800,
        height: 800,
        alt: "钟政头像",
      },
    ],
    locale: "zh_CN",
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
