"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";

interface NewsCardProps {
    className?: string;
    category: string;
    title: string;
    description: string;
    image: string;
    href: string;
    onClick?: () => void;
}

const NewsCard = ({ className, category, title, description, image, href, onClick }: NewsCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const timeoutRef = useRef<any>(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsExpanded(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsExpanded(false);
        }, 500);
    };

    return (
        <div
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`group relative flex w-full overflow-hidden rounded-lg cursor-pointer ${className}`}
        >
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
            <img
                src={image}
                alt={title}
                className="absolute h-full w-full object-cover"
                loading="lazy"
                decoding="async"
                width="4000"
                height="2250"
            />
        </div>
    );
};

export default function InformationComp() {
    const [selectedNews, setSelectedNews] = useState<NewsCardProps | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    const openPopup = (item: NewsCardProps) => {
        setSelectedNews(item);
        setTimeout(() => setIsVisible(true), 10);
    };

    const closePopup = () => {
        setIsVisible(false);
        setTimeout(() => setSelectedNews(null), 300);
    };

    const news = [
        {
            className: "md:row-span-4 h-64 md:h-full",
            category: "Amigo",
            title: "สึนามิเหมยมั้ยนิววิทย์",
            description: "ลีเมอร์อันตรกิริยาหมายปองเพลย์บอยสไตล์ คันยิ มาร์เก็ตติ้งสโตร์แชมปิยองอุปทาน สึนามิเหมยมั้ยนิววิทย์",
            image: "https://www.dooform.com/placeholder/1102.webp",
            href: "/articles/amigo-launching-soon"
        },
        {
            className: "md:col-span-2 md:row-span-2 h-64",
            category: "Amigo",
            title: "มาร์เก็ตติ้งสโตร์แชมปิยองอุปทาน",
            description: "ลีเมอร์อันตรกิริยาหมายปองเพลย์บอยสไตล์ คันยิ มาร์เก็ตติ้งสโตร์แชมปิยองอุปทาน สึนามิเหมยมั้ยนิววิทย์",
            image: "https://www.dooform.com/placeholder/1101.webp",
            href: "/articles/amigo-launching-soon"
        },
        {
            className: "md:col-span-1 md:row-span-2 h-64 md:h-full",
            category: "Amigo",
            title: "ลีเมอร์อันตร",
            description: "ลีเมอร์อันตรกิริยาหมายปองเพลย์บอยสไตล์ คันยิ มาร์เก็ตติ้งสโตร์แชมปิยองอุปทาน สึนามิเหมยมั้ยนิววิทย์",
            image: "https://www.dooform.com/placeholder/1103.webp",
            href: "/articles/amigo-launching-soon"
        },
        {
            className: "md:col-span-1 md:row-span-2 h-64 md:h-full",
            category: "Amigo",
            title: "กิริยาหมายปอง",
            description: "ลีเมอร์อันตรกิริยาหมายปองเพลย์บอยสไตล์ คันยิ มาร์เก็ตติ้งสโตร์แชมปิยองอุปทาน สึนามิเหมยมั้ยนิววิทย์",
            image: "https://www.dooform.com/placeholder/1102.webp",
            href: "/articles/amigo-launching-soon"
        }
    ];

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

            <div className="grid grid-cols-1 md:grid-cols-none md:grid-flow-col md:grid-rows-4 gap-4 w-full ">
                {news.map((item, index) => (
                    <NewsCard
                        key={index}
                        {...item}
                        onClick={() => openPopup(item)}
                    />
                ))}
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
                            <img
                                src={selectedNews.image}
                                alt={selectedNews.title}
                                className="absolute h-full w-full object-cover"
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
                                    กฤษณ์โดนัท ลีเมอร์อันตรกิริยาหมายปองเพลย์บอยสไตล์ คันยิ มาร์เก็ตติ้งสโตร์แชมปิยองอุปทาน สึนามิเหมยมั้ยนิววิทย์ สะกอมปักขคณนาแพทเทิร์นดีมานด์บ๊อกซ์ เยนหม่านโถวโรลออนแพทเทิร์นเลดี้ ห่วยเทวาเป่ายิ้งฉุบหล่อฮังก้วยหลินจือ แฟร์เลดี้รีเสิร์ช คอร์รัปชั่น ฮัลโลวีนมายาคติไฮบริด คอนเซ็ปต์ทัวร์หลวงปู่ กาญจนาภิเษกกฤษณ์โดนัท คอปเตอร์ไนน์ แจ๊กพ็อตโกลด์สตาร์ท ไวกิ้งดีพาร์ทเมนท์พรีเมียร์

                                    บอกซ์โปลิศรีวิวกรุ๊ป แฟรีตู้เซฟรายชื่อแบด คาเฟ่แครกเกอร์ฟอร์มดาวน์โอเค ฮาโลวีนไฮแจ็ค อีแต๋นลีเมอร์วอลล์ กัมมันตะโปรซ้อ โลโก้นิวแบรนด์ มาร์ช ไคลแม็กซ์ วิกคอนโทรล เพลซบอกซ์ มาร์เก็ตติ้งวิทย์ซามูไร สปอร์ตฮอตดอก ซันตาคลอส วอล์คเตี๊ยมโปรโมชั่น หมวยปิยมิตรโอเคแอสเตอร์

                                    มาม่า มาร์คพะเรอโปรเจกเตอร์ฟีด โคโยตีพีเรียดออร์แกนิกเบนโลพงษ์ แกงค์อัลตราฟาสต์ฟู้ดฮอตดอก สะบึมไลท์ คันยิแอ๊บแบ๊วโฮม บัสดีพาร์ตเมนต์มือถือมอยส์เจอไรเซอร์ หงวน โฮม ดีพาร์ทเมนต์ปฏิสัมพันธ์ธัมโมโรลออน มาม่าไฮกุ แชมปิยองไคลแม็กซ์รอยัลตี้สโตร์ไดเอ็ต เฟิร์มกรุ๊ปแก๊สโซฮอล์คองเกรสพันธุวิศวกรรม ภควัทคีตาฮาลาลเป่ายิ้งฉุบกรุ๊ปโต๋เต๋ อันตรกิริยา อันตรกิริยาธรรมาภิบาลซัมเมอร์เอสเพรสโซเชฟ

                                    เกมส์พาร์ โบรชัวร์ฟลอร์ เบญจมบพิตรสารขัณฑ์ต่อรองโอเค มอคคาซีนีเพล็กซ์คาวบอย รีไทร์ไฮแจ็ค โบว์ลิ่งรีไทร์โอเคจังโก้ ไฮเทคแจ็กพอตยนตรกรรมฟลุค อาข่าละตินนางแบบซานตาคลอส เซ่นไหว้อีโรติก ช็อปเปอร์ไดเอ็ต พฤหัสแอปพริคอทฮอตดอกอิ่มแปร้ สโลว์ตุ๋ย พรีเมียร์สี่แยก เกจิเมเปิลสปิริตยะเยือกอันเดอร์ แอคทีฟวอร์รูมมาร์ต โก๊ะศากยบุตรอันเดอร์ม็อบเนอะ

                                    จิ๊กโก๋โปรเจคท์ยอมรับ ติวเตอร์ซีอีโอปัจฉิมนิเทศไฮบริดคอร์รัปชัน ราชานุญาต หลวงปู่ ไนท์สงบสุขพอเพียงเยอร์บีร่าไฮเอนด์ ตี๋ซีนีเพล็กซ์นิรันดร์บูติกสต๊อค กรุ๊ปวอฟเฟิลฮาร์ด โอเลี้ยงติงต๊อง﻿กรรมาชน ดีมานด์บูติกโอเคโฮลวีตโปร ลีกพฤหัส ซิลเวอร์โทรโข่ง นิวส์ พะเรอบึม แพทเทิร์นเมี่ยงคำ มาเฟียรองรับก่อนหน้าติ่มซำอีสต์ เรซินโบรกเกอร์วัจนะรีวิววีน
                                </p>
                            </div>
                            <div className="p-6 md:p-8 border-t border-neutral-100 flex justify-end shrink-0 bg-white">
                                <Link
                                    href={selectedNews.href}
                                    className="flex items-center bg-neutral-900 hover:bg-neutral-700 border border-neutral-700 py-1 px-3 text-neutral-100 rounded-full text-sm font-semibold shadow-sm"
                                >
                                    อ่านเพิ่มเติม
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}