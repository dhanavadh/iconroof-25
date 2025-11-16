import React from "react";
import Link from "next/link";

const BannerInfoPage = () => {
  return (
    <div className="w-full py-8 md:py-16 px-6 md:px-8 font-sans max-w-7xl mx-auto rounded-xl overflow-hidden">
      <section className="flex relative min-h-full w-full items-center">
        <div className="flex flex-col z-20 items-center px-6 py-48 text-white w-full max-w-7xl mx-auto gap-4">
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-center md:text-start text-4xl font-semibold">
              สอบถาม ปรึกษา ฟรี
            </h1>
            <p>กรุณากรอกข้อมูลให้ครบถ้วน</p>
          </div>
          <Link
            href="#"
            className="bg-white text-black px-4 py-2 rounded-full w-fit"
          >
            ติดต่อผ่านไลน์
          </Link>
        </div>
        <img
          src="https://iconroof.co.th/_next/image?url=%2Fasset%2Famigo.png&w=3840&q=75"
          alt="Product 1"
          className="absolute w-full h-full object-cover brightness-65 z-10 rounded-xl"
        />
      </section>
    </div>
  );
};

export default BannerInfoPage;
