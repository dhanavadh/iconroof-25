import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
        <img
          src="https://architectexpo.com/2022/wp-content/uploads/2022/04/%E0%B8%AA%E0%B8%B5%E0%B9%80%E0%B8%97%E0%B8%B2-1-1-600x450.jpg"
          alt="Product 1"
          className="absolute w-full h-screen object-cover brightness-65 z-10"
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

        <section className="flex items-start gap-6 overflow-x-auto no-scrollbar px-6 brightness-90">
          <div className="w-76" id="product-amigo">
            <div className="w-76 h-96 mb-4 rounded-sm overflow-hidden">
              <img
                src="https://iconroof.co.th/_next/image?url=https%3A%2F%2Ftvss01.iconroof.co.th%2Fe6c6f6e8-e73e-40b1-9f05-5436e5f99137%2Fasset%2Fpreview-amigo-1.jpg&w=3840&q=75"
                alt="Product 1"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-semibold text-neutral-700">ระแนงไวนิล AMIGO</p>
            <p className="text-neutral-400 text-sm mb-2">
              บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ
            </p>
            <Link href="#" className="text-sm font-medium text-neutral-600">
              ดูรายละเอียด
              <ArrowUpRight className="inline-block ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="w-76">
            <div className="w-76 h-86 mb-4 rounded-sm overflow-hidden">
              <img
                src="https://iconroof.co.th/_next/image?url=https%3A%2F%2Ftvss01.iconroof.co.th%2Fe6c6f6e8-e73e-40b1-9f05-5436e5f99137%2Fasset%2FIMG_2842.JPG&w=3840&q=75"
                alt="Product 1"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-semibold text-neutral-700">ระแนงไวนิล AMIGO</p>
            <p className="text-neutral-400 text-sm mb-2">
              บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ
            </p>
            <Link href="#" className="text-sm font-medium text-neutral-600">
              ดูรายละเอียด
              <ArrowUpRight className="inline-block ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="w-76">
            <div className="w-76 h-64 mb-4 rounded-sm overflow-hidden">
              <img
                src="https://iconroof.co.th/_next/image?url=https%3A%2F%2Ftvss01.iconroof.co.th%2Fe6c6f6e8-e73e-40b1-9f05-5436e5f99137%2Fasset%2Famigo-2.png&w=640&q=75"
                alt="Product 1"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-semibold text-neutral-700">ระแนงไวนิล AMIGO</p>
            <p className="text-neutral-400 text-sm mb-2">
              บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ
            </p>
            <Link href="#" className="text-sm font-medium text-neutral-600">
              ดูรายละเอียด
              <ArrowUpRight className="inline-block ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="w-76">
            <div className="w-76 h-92 mb-4 rounded-sm overflow-hidden">
              <img
                src="https://iconroof.co.th/_next/image?url=https%3A%2F%2Ftvss01.iconroof.co.th%2Fe6c6f6e8-e73e-40b1-9f05-5436e5f99137%2Fasset%2FLINE_ALBUM_%E0%B9%80%E0%B8%94%E0%B8%AD%E0%B8%B0%20%E0%B8%9E%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%A5%E0%B9%80%E0%B8%A5%E0%B8%B5%E0%B8%A2%E0%B8%99%20%E0%B8%9B%E0%B8%B4%E0%B9%88%E0%B8%99%E0%B9%80%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%B2-%E0%B8%AA%E0%B8%B2%E0%B8%A24%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B9%80%E0%B8%A5%E0%B8%82%E0%B8%97_250426_22.jpg&w=1080&q=75"
                alt="Product 1"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-semibold text-neutral-700">ระแนงไวนิล AMIGO</p>
            <p className="text-neutral-400 text-sm mb-2">
              บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ
            </p>
            <Link href="#" className="text-sm font-medium text-neutral-600">
              ดูรายละเอียด
              <ArrowUpRight className="inline-block ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="w-76">
            <div className="w-76 h-92 mb-4 rounded-sm overflow-hidden">
              <img
                src="https://iconroof.co.th/_next/image?url=https%3A%2F%2Ftvss01.iconroof.co.th%2Fe6c6f6e8-e73e-40b1-9f05-5436e5f99137%2Fasset%2Famigo-1.png&w=640&q=75"
                alt="Product 1"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-semibold text-neutral-700">ระแนงไวนิล AMIGO</p>
            <p className="text-neutral-400 text-sm mb-2">
              บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ
            </p>
            <Link href="#" className="text-sm font-medium text-neutral-600">
              ดูรายละเอียด
              <ArrowUpRight className="inline-block ml-1 h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default TestPage;
