import Link from "next/link";
import React from "react";
import { ArrowUpRight, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex md:flex-row items-start justify-between flex-col font-sans px-6 max-w-7xl mx-auto py-12 gap-6">
      <section>
        <p className="font-medium text-md mb-1 text-neutral-700">ไอคอนรูฟ</p>
        <p className="text-sm w-5/6 text-neutral-500">
          หมู่บ้าน คนึงทิพย์ (โกดัง) <br /> ถนน บางกรวย-ไทรน้อย กาญจนาภิเษก ตำบล
          บางบัวทอง อำเภอบางบัวทอง นนทบุรี 11110
        </p>
        <p className="text-sm w-5/6 text-neutral-500">089-154-3355</p>
      </section>
      <div className="flex flex-col md:flex-row items-start gap-6">
        <section className="flex flex-col gap-2">
          <p className="">สินค้า</p>
          <div className="flex flex-col gap-1.5">
            <Link href="/" className="text-neutral-500 text-sm">
              ระแนงไวนิล Amigo
            </Link>
            <Link href="/" className="text-neutral-500 text-sm">
              ระแนง SCG Box Set
            </Link>
            <Link href="/" className="text-neutral-500 text-sm">
              ระแนงไวนิล VG รุ่น Vento
            </Link>
            <Link href="/" className="text-neutral-500 text-sm">
              ชิ้นส่วนระแนง
            </Link>
          </div>
        </section>
        <section className="flex flex-col gap-2">
          <p className="">สินค้า</p>
          <div className="flex flex-col gap-1.5">
            <Link href="/" className="text-neutral-500 text-sm">
              ระแนงไวนิล Amigo
            </Link>
            <Link href="/" className="text-neutral-500 text-sm">
              ระแนง SCG Box Set
            </Link>
            <Link href="/" className="text-neutral-500 text-sm">
              ระแนงไวนิล VG รุ่น Vento
            </Link>
            <Link href="/" className="text-neutral-500 text-sm">
              ชิ้นส่วนระแนง
            </Link>
          </div>
        </section>
        <section className="flex flex-col gap-2">
          <p className="">เกี่ยวกับเว็บไซต์</p>
          <div className="flex flex-col gap-1.5">
            <Link href="/" className="text-neutral-500 text-sm">
              ข้อกำหนดในการใช้งาน
            </Link>
            <Link href="/" className="text-neutral-500 text-sm">
              นโยบายความเป็นส่วนตัว
            </Link>
            <Link href="/" className="text-neutral-500 text-sm">
              เกี่ยวกับเรา
            </Link>
            <Link href="/" className="text-neutral-500 text-sm">
              ติดต่อเรา
            </Link>
          </div>
        </section>
        <section className="flex flex-col gap-2">
          <p className="">ช่องทางการติดต่อ</p>
          <div className="flex flex-col gap-1.5">
            <Link href="+" className="text-neutral-500 text-sm">
              โทร. 089-154-3355
              <ArrowUpRight className="inline-block ml-1 h-4 w-4" />
            </Link>
            <Link href="/" className="text-neutral-500 text-sm">
              Line @PLK2013
              <ArrowUpRight className="inline-block ml-1 h-4 w-4" />
            </Link>
            <Link href="/" className="text-neutral-500 text-sm">
              Facebook แผ่นหลังคาการช่าง
              <ArrowUpRight className="inline-block ml-1 h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
