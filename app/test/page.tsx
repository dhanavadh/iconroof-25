import React from "react";
import Link from "next/link";
import Image from "next/image";

const TestPage = () => {
  return (
    <>
      <section className="flex relative h-full min-w-screen items-end -mt-16 md:-mt-20 font-sans">
        <div className="flex flex-col z-20 p-6 text-white md:max-w-7xl lg:mx-auto w-full lg:mb-4 pt-96">
          <h1 className="text-start text-base">ระแนงไวนิล Amigo</h1>
          <h1 className="text-start text-3xl font-semibold">
            สร้างความเป็นส่วนตัวให้กับบ้าน
          </h1>
          <p className="my-2">
            บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ
          </p>
          <Link
            href="#"
            className="bg-white text-black px-4 py-2 rounded-full w-fit"
          >
            ดูรายละเอียด
          </Link>
        </div>
        <Image
          src="/product/1112.webp"
          alt="Product 1"
          className="absolute object-cover brightness-65 z-10"
          fill
          sizes="100vw"
        />
      </section>
      <div className="font-sans flex flex-col max-w-7xl mx-auto ">
        <span
          className="flex items-start justify-between w-full p-6"
          id="product"
        >
          <div>
            <h1 className="text-start text-neutral-500">สินค้า</h1>
            <h1 className="text-start text-xl text-neutral-700 font-semibold">
              เพื่มความเป็นส่วนตัวให้กับบ้านคุณ
            </h1>
          </div>
          <h1 className="text-start text-base text-neutral-500">ดูทั้งหมด</h1>
        </span>
      </div>
    </>
  );
};

export default TestPage;
