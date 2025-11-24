import React from "react";
import Link from "next/link";
import Image from "next/image";
import ProductBanner from '@/components/products/ProductBanner';
import { getMockBanner, getAllMockProducts } from '@/app/products/mock-data';
import Menutab from "@/components/home/Menutab";

const ProductPage = () => {
    // Use the first product's banner
    const firstProduct = getAllMockProducts()[0];
    const bannerData = firstProduct ? getMockBanner(firstProduct.id) : undefined;

    return (
        <>
            {bannerData && <ProductBanner banner={bannerData} />}
            <Menutab />
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

export default ProductPage;
