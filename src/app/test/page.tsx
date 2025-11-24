import React from "react";
import Link from "next/link";
import Image from "next/image";

const TestPage = () => {
  return (
    <main className="flex font-sans flex-col items-center justify-start min-h-screen bg-[var(--background)] text-[var(--foreground)] max-w-7xl mx-auto pt-16 md:pt-20">
      <section className="flex relative h-[60vh] w-full items-end rounded-2xl overflow-hidden">
        <div className="flex flex-col z-20 p-6 text-white w-full lg:mb-4">
          <p className="text-start text-base mb-2">ระแนงไวนิล Amigo</p>
          <h1 className="text-start text-3xl font-semibold mb-4">
            สร้างความเป็นส่วนตัวให้กับบ้าน
          </h1>
          <p className="my-2 max-w-2xl">
            บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ
          </p>
          <Link
            href="#"
            className="bg-white text-black px-6 py-2 rounded-full w-fit font-medium hover:bg-neutral-100 transition-colors"
          >
            ดูรายละเอียด
          </Link>
        </div>
        <Image
          src="/product/1112.webp"
          alt="ระแนงไวนิล Amigo สร้างความเป็นส่วนตัวให้กับบ้าน"
          className="absolute object-cover brightness-65 z-10"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1280px"
        />
      </section>
      <div className="w-full mt-8 px-4 md:px-0">
        <div
          className="flex items-start justify-between w-full py-6 border-b border-neutral-200"
          id="product"
        >
          <div>
            <h2 className="text-start text-neutral-600 dark:text-neutral-400 text-sm mb-2">สินค้า</h2>
            <p className="text-start text-xl text-neutral-800 dark:text-neutral-200 font-semibold">
              เพื่มความเป็นส่วนตัวให้กับบ้านคุณ
            </p>
          </div>
          <Link href="/products" className="text-start text-base text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
            ดูทั้งหมด
          </Link>
        </div>
      </div>
    </main>
  );
};

export default TestPage;
