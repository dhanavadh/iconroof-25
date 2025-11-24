"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { NewsArticle } from "@/lib/types";

interface NewsCardProps extends NewsArticle {
    onClick?: () => void;
    disablePopup?: boolean;
}

const NewsCard = ({ className, category, title, description, imageUrl, linkUrl, onClick, disablePopup }: NewsCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsExpanded(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsExpanded(false);
        }, 500);
    };

    const cardContent = (
        <>
            <div className="absolute bottom-0 left-0 z-20 flex flex-col justify-between items-start w-full p-6 text-white">
                <div>
                    <h1 className="text-start text-base">{category}</h1>
                    <h1 className="text-start text-3xl font-semibold">{title}</h1>
                    <p className={`mt-2 overflow-hidden transition-all duration-500 ease-in-out max-h-6 group-hover:max-h-40 ${isExpanded ? '' : 'line-clamp-1'}`}>
                        {description}
                    </p>
                </div>
                <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <div
                        className="flex items-center bg-white border border-neutral-100 py-1 px-3 text-neutral-700 rounded-full text-sm font-semibold shadow-sm mt-4 whitespace-nowrap shrink-0 translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                    >
                        ดูรายละเอียด
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-neutral-900/90 to-transparent group-hover:from-black group-hover:via-black/60 group-hover:to-transparent transition-all duration-300"></div>
            <Image
                src={imageUrl}
                alt={title}
                className="absolute h-full w-full object-cover"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </>
    );

    const commonClasses = `group relative flex w-full overflow-hidden rounded-lg cursor-pointer ${className}`;

    if (disablePopup) {
        return (
            <Link
                href={linkUrl}
                className={commonClasses}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {cardContent}
            </Link>
        );
    }

    return (
        <div
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={commonClasses}
        >
            {cardContent}
        </div>
    );
};

const DEFAULT_LAYOUT_CLASSES = [
    "md:row-span-4 h-64 md:h-full",
    "md:col-span-2 md:row-span-2 h-64",
    "md:col-span-1 md:row-span-2 h-64 md:h-full",
    "md:col-span-1 md:row-span-2 h-64 md:h-full"
];

interface NewsGridProps {
    news: NewsArticle[];
    disablePopup?: boolean;
}

export default function NewsGrid({ news, disablePopup }: NewsGridProps) {
    const [selectedNews, setSelectedNews] = useState<NewsArticle | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    const openPopup = (item: NewsArticle) => {
        if (disablePopup) return;
        setSelectedNews(item);
        setTimeout(() => setIsVisible(true), 10);
    };

    const closePopup = () => {
        setIsVisible(false);
        setTimeout(() => setSelectedNews(null), 300);
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-none md:grid-flow-col md:grid-rows-4 gap-4 w-full">
                {news.map((item, index) => {
                    // Use provided className or fallback to default layout pattern
                    const finalClassName = item.className || DEFAULT_LAYOUT_CLASSES[index % DEFAULT_LAYOUT_CLASSES.length];
                    
                    return (
                        <NewsCard
                            key={item.id}
                            {...item}
                            className={finalClassName}
                            onClick={() => openPopup(item)}
                            disablePopup={disablePopup}
                        />
                    );
                })}
            </div>


            {/* Popup Modal */}
            {selectedNews && (
                <div
                    className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
                    onClick={closePopup}
                >
                    <div
                        className={`bg-white rounded-xl overflow-hidden max-w-3xl lg:max-w-5xl w-full shadow-2xl relative transition-all duration-300 transform max-h-[90vh] flex flex-col lg:flex-row ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closePopup}
                            className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white lg:text-neutral-500 lg:bg-transparent lg:hover:bg-neutral-100 rounded-full transition-colors z-10"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <div className="h-64 md:h-80 lg:h-auto relative w-full lg:w-1/2 shrink-0">
                            <Image
                                src={selectedNews.imageUrl}
                                alt={selectedNews.title}
                                className="absolute h-full w-full object-cover"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6 text-white">
                                <span className="text-sm font-medium py-1 rounded">{selectedNews.category}</span>
                                <h2 className="text-3xl font-bold mt-2">{selectedNews.title}</h2>
                                <p className="mt-2">
                                    {selectedNews.description}
                                </p>

                            </div>
                        </div>
                        <div className="flex flex-col w-full lg:w-1/2 flex-1 min-h-0 overflow-hidden">
                            <div className="p-6 md:p-8 overflow-y-auto flex-1">
                                <p className="text-neutral-600 leading-relaxed text-lg">
                                    {selectedNews.content}
                                </p>
                            </div>
                            <div className="p-6 md:p-8 border-t border-neutral-100 flex justify-end shrink-0 bg-white">
                                <Link
                                    href={selectedNews.linkUrl}
                                    className="flex items-center bg-neutral-900 hover:bg-neutral-700 border border-neutral-700 py-1 px-3 text-neutral-100 rounded-full text-sm font-semibold shadow-sm"
                                >
                                    อ่านเพิ่มเติม
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
