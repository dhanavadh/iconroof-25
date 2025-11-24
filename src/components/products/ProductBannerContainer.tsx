import React from 'react';
import { getMockBannerAsync } from '@/app/products/mock-data';
import ProductBanner from './ProductBanner';

interface ProductBannerContainerProps {
  id: string;
  fullScreen?: boolean;
}

export default async function ProductBannerContainer({ id, fullScreen }: ProductBannerContainerProps) {
  const banner = await getMockBannerAsync(id);

  if (!banner) {
    return null; // Or handle error/not found
  }

  return <ProductBanner banner={banner} fullScreen={fullScreen} />;
}
