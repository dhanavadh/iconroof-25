import type { Metadata } from "next";
import { Geist_Mono, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import ConditionalNavbar from "./components/ConditionNavbar";
import Footer from "./components/Footer";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai", "latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  title: "จำหน่ายอุปกรณ์ระแนงไวนิล | ไม้ระแนงเฌอร่า-ระแนงไม้เทียม – Iconroof",
  description:
    "จำหน่ายและติดตั้งระแนงบังตาไวนิล AMIGO ระแนงชิด ระแนงเว้นร่อง ระแนงบานเกล็ด โดยไอคอนรูฟ ขายปลีก-ส่ง ราคาโรงงาน ทันสมัย แข็งแรง สวยงาม ระแนงบังตาไวนิล รับประกัน 10 ปี อบสีด้วย พาวเดอร์ โค้ท ตั้งแต่ 08.00-17.30 น. เปิดบริการวันจันทร์-เสาร์ บริการ: รับติดตั้งระแนงไวนิล, เปิดบริการ จันทร์-ศุกร์, ตั้งแต่ 08.00-17.30 น.",
  keywords: [
    "amigo",
    "ระแนงบังตา",
    "ระแนงบังตาไวนิล",
    "ระแนงบังตาไวนิล AMIGO",
    "upvc",
    "Amigo",
    "scg ระแนงชิด",
    "ระแนงเว้นร่อง",
    "ระแนงบานเกล็ด",
    "ระแนงบังแดด",
    "ระแนงตกแต่งบ้าน",
    "ระแนงระเบียง",
    "ระแนงกันแดด",
    "ระแนงบังสายตา",
    "ระแนงหน้าบ้าน",
    "ระแนงข้างบ้าน",
    "ระแนงแต่งบ้าน",
    "ระแนงแต่งสวน",
    "ไวนิลบังตา",
    "แผ่นไวนิล",
    "ไวนิลตกแต่ง",
    "ไวนิลภายนอก",
    "ไวนิลภายใน",
    "วัสดุตกแต่งบ้าน",
    "วัสดุก่อสร้าง",
    "หลังคาไวนิล",
    "หลังคาไวนิล AMIGO",
    "ไวนิลคุณภาพสูง",
    "ไวนิลราคาถูก",
    "วัสดุตกแต่งภายนอก",
    "แผ่นไวนิลทนแดด",
    "แผ่นไวนิลทนน้ำ",
    "ไวนิลตกแต่งผนัง",
    "ผนังไวนิล",
    "ไวนิลตกแต่งภายนอก",
    "ติดตั้งระแนง",
    "ช่างติดตั้งระแนง",
    "ระแนงสำเร็จรูป",
    "ผลิตภัณฑ์ไวนิล",
    "ไวนิลกันน้ำ",
    "ไวนิลกันปลวก",
    "วัสดุกันความร้อน",
    "ไวนิลทนฝน",
    "วัสดุก่อสร้างบ้าน",
    "สร้างบ้าน",
    "รีโนเวทบ้าน",
    "บ้านสวยด้วยไวนิล",
    "ไอคอนรูฟ",
    "Iconroof",
    "ไวนิล Amigo",
    "ระแนง",
    "ระ แนง",
    "ระแน ง",
    "บังตา",
    "ฝ้า",
    "ไอคอนรุฟ",
  ],
  openGraph: {
    title: "จำหน่ายอุปกรณ์ระแนงไวนิล | ไม้ระแนงเฌอร่า-ระแนงไม้เทียม – Iconroof",
    description:
      "บริการจำหน่ายและติดตั้งระแนงบังตาไวนิล AMIGO ระแนงชิด ระแนงเว้นร่อง ระแนงบานเกล็ด โดยไอคอนรูฟ ขายปลีก-ส่ง ราคาโรงงาน ทันสมัย แข็งแรง สวยงาม ระแนงบังตาไวนิล รับประกัน 10 ปี อบสีด้วย พาวเดอร์ โค้ท ตั้งแต่ 08.00-17.30 น. เปิดบริการวันจันทร์-เสาร์ บริการ: รับติดตั้งระแนงไวนิล, เปิดบริการ จันทร์-ศุกร์, ตั้งแต่ 08.00-17.30 น.",
    url: "https://iconroof.co.th/",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="overscroll-none">
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
