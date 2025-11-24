import Image from 'next/image';
import Link from 'next/link';
import { Banner } from '@/lib/types';

interface ProductBannerProps {
  banner: Banner;
}

export default function ProductBanner({ banner }: ProductBannerProps) {
    return (
        <section className="flex relative h-full min-w-screen items-end -mt-16 md:-mt-20 font-sans">
            <div className="flex flex-col z-20 p-6 text-white md:max-w-7xl lg:mx-auto w-full lg:mb-4 pt-96">
                <h1 className="text-start text-base">{banner.subtitle}</h1>
                <h2 className="text-start text-3xl font-semibold">
                    {banner.title}
                </h2>
                <p className="my-2">
                    {banner.description}
                </p>
                <Link
                    href={banner.linkUrl}
                    className="bg-white text-black px-4 py-2 rounded-full w-fit"
                >
                    ดูรายละเอียด
                </Link>
            </div>
            <Image
                src={banner.imageUrl}
                alt={banner.title}
                className="absolute object-cover brightness-65 z-10"
                fill
                sizes="100vw"
            />
        </section>
    );
}
