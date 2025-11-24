import React from 'react';
import { getMockNewsArticlesAsync } from "@/app/products/mock-data";
import NewsGrid from "./NewsGrid";

export default async function InformationComp() {
    const newsArticles = await getMockNewsArticlesAsync();

    return (
        <div className="flex flex-col gap-6 w-full">
            <span
                className="flex items-start justify-between w-full"
                id="product"
            >
                <div>
                    <p className='text-neutral-600'>บทความ</p>
                    <h2 className="text-4xl font-bold text-neutral-900 mb-2 mt-1 leading-tight">
                        ข่าวสารและโปรโมชั่น
                    </h2>
                </div>
            </span>

            <NewsGrid news={newsArticles} />
        </div>
    );
}
