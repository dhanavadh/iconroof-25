import React from 'react';
import ProductBanner from './ProductBanner';
import { Product, Banner } from '@/lib/types';
import { getMockBannerAsync } from '@/app/products/mock-data';

interface ProductBannerContainerProps {
  id?: string;
  product?: Product;
  fullScreen?: boolean;
}

export default async function ProductBannerContainer({ id, product, fullScreen }: ProductBannerContainerProps) {
  let banner: Banner | undefined;

  if (product) {
    // Map the product data to the Banner interface
    banner = {
      id: product.id,
      title: product.name,
      subtitle: `${product.brand} - ${product.category}`,
      description: product.description,
      imageUrl: product.imageUrl,
      linkUrl: `/products/${product.id}`
    };
  } else if (id) {
    // Fetch banner by ID
    banner = await getMockBannerAsync(id);
  }

  if (!banner) {
    return null; // Or handle error/not found
  }

  return <ProductBanner banner={banner} fullScreen={fullScreen} />;
}
