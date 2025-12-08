import type { Metadata } from "next";
import { Geist_Mono, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import ConditionalNavbar from "@/components/layout/ConditionNavbar";
import Footer from "@/components/layout/Footer";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai", "latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = 'https://iconroof.co.th';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  title: {
    default: "จำหน่ายอุปกรณ์ระแนงไวนิล | ไม้ระแนงเฌอร่า-ระแนงไม้เทียม – Iconroof",
    template: "%s | Iconroof",
  },
  description:
    "ไอคอนรูฟ จำหน่ายและติดตั้งระแนงบังตาไวนิล AMIGO ระแนงชิด ระแนงเว้นร่อง ระแนงบานเกล็ด โดยไอคอนรูฟ ขายปลีก-ส่ง ราคาโรงงาน ทันสมัย แข็งแรง สวยงาม ระแนงบังตาไวนิล รับประกัน 10 ปี อบสีด้วย พาวเดอร์ โค้ท ตั้งแต่ 08.00-17.30 น. เปิดบริการวันจันทร์-เสาร์ บริการ: รับติดตั้งระแนงไวนิล, เปิดบริการ จันทร์-ศุกร์, ตั้งแต่ 08.00-17.30 น.",
  keywords: [
    "ระแนงไวนิล",
    "ระแนงบังตา",
    "ไม้ระแนง",
    "ระแนงเฌอร่า",
    "ระแนงไม้เทียม",
    "Amigo",
    "VG Vento",
    "SCG",
    "ติดตั้งระแนง",
    "Iconroof",
    "ไอคอนรูฟ",
  ],
  authors: [{ name: "Iconroof" }],
  creator: "Rinkai.co",
  publisher: "Iconroof",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "ไอคอนรูฟ จำหน่ายอุปกรณ์ระแนงไวนิล | ไม้ระแนงเฌอร่า-ระแนงไม้เทียม – Iconroof",
    description:
      "ไอคอนรูฟ บริการจำหน่ายและติดตั้งระแนงบังตาไวนิล AMIGO ระแนงชิด ระแนงเว้นร่อง ระแนงบานเกล็ด โดยไอคอนรูฟ ขายปลีก-ส่ง ราคาโรงงาน ทันสมัย แข็งแรง สวยงาม ระแนงบังตาไวนิล รับประกัน 10 ปี อบสีด้วย พาวเดอร์ โค้ท ตั้งแต่ 08.00-17.30 น. เปิดบริการวันจันทร์-เสาร์ บริการ: รับติดตั้งระแนงไวนิล, เปิดบริการ จันทร์-ศุกร์, ตั้งแต่ 08.00-17.30 น.",
    url: BASE_URL,
    siteName: "Iconroof",
    images: [
      {
        url: "https://tvss01.iconroof.co.th/e6c6f6e8-e73e-40b1-9f05-5436e5f99137/asset/og-img.jpg",
        width: 1200,
        height: 630,
        alt: "iconroof ระแนง",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ไอคอนรูฟ จำหน่ายอุปกรณ์ระแนงไวนิล | Iconroof",
    description: "จำหน่ายและติดตั้งระแนงบังตาไวนิล AMIGO ราคาโรงงาน รับประกัน 10 ปี",
    images: ["https://tvss01.iconroof.co.th/e6c6f6e8-e73e-40b1-9f05-5436e5f99137/asset/og-img.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="overscroll-none">
      <head>
        {/* Preconnect to external origins for performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://static.cloudflareinsights.com" />
        <link rel="preconnect" href="https://tvss01.iconroof.co.th" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <GoogleAnalytics gaId="G-M74LW8G72T" />
      <GoogleTagManager gtmId="GTM-TKH6XPJN" />
      <body
        className={`${notoSansThai.variable} ${geistMono.variable} antialiased`}
      >
        <ConditionalNavbar />
        {/*<NavbarMain />*/}
        {children}
        <Footer />
      </body>
    </html>
  );
}
