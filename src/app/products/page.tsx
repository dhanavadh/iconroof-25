import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import ProductBannerContainer from '@/components/products/ProductBannerContainer';
import ProductBannerSkeleton from '@/components/loaders/ProductBannerSkeleton';
import { getAllMockProductsAsync } from '@/app/products/mock-data';
import Menutab from "@/components/home/Menutab";
import NewsGrid from "@/components/home/NewsGrid";
import { NewsArticle } from "@/lib/types";
import type { Metadata } from "next";

const BASE_URL = 'https://iconroof.co.th';

export const metadata: Metadata = {
  title: "สินค้าระแนงไวนิล Amigo, VG Vento, SCG | Iconroof",
  description: "จำหน่ายระแนงไวนิล ระแนงบังตา ระแนงชิด ระแนงเว้นร่อง หลากหลายแบรนด์ Amigo VG Vento SCG ราคาโรงงาน รับประกัน 10 ปี",
  keywords: ["ระแนงไวนิล", "Amigo", "VG Vento", "SCG", "ระแนงบังตา", "Iconroof"],
  openGraph: {
    title: "สินค้าระแนงไวนิล | Iconroof",
    description: "จำหน่ายระแนงไวนิล หลากหลายแบรนด์ ราคาโรงงาน รับประกัน 10 ปี",
    url: `${BASE_URL}/products`,
    siteName: "Iconroof",
    locale: "th_TH",
    type: "website",
  },
  alternates: {
    canonical: `${BASE_URL}/products`,
  },
};

const ProductPage = async () => {
    // Fetch all products
    const products = await getAllMockProductsAsync();

    const productNews: NewsArticle[] = products.map(product => ({
        id: product.id,
        category: product.category,
        title: product.name,
        description: product.description,
        content: `รายละเอียดเพิ่มเติมเกี่ยวกับสินค้า ${product.name}`,
        imageUrl: product.imageUrl,
        linkUrl: `/products/${product.id}`,
    }));

    return (
        <>
            <Suspense fallback={<ProductBannerSkeleton />}>
                <ProductBannerContainer id="products-main-banner" />
            </Suspense>
            <Menutab />
            <div className="font-sans flex flex-col max-w-7xl mx-auto p-6 gap-6">
                <div>
                    <p className='text-neutral-600'>สินค้าทั้งหมด</p>
                    <h2 className="text-4xl font-bold text-neutral-900 mb-2 mt-1 leading-tight">
                        สร้างความเป็นส่วนตัวให้กับบ้าน
                    </h2>
                </div>
                <NewsGrid news={productNews} disablePopup={true} />
                
                <div className="mt-8">
                     <span
                        className="flex items-start justify-between w-full mb-6"
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
               
            </div>
        </>
    );
};

export default ProductPage;

