import { getMockProduct } from '@/app/products/mock-data';
import Image from 'next/image';

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPageById({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getMockProduct(id);

  if (!product) {
    return (
      <main className="flex font-sans flex-col items-center justify-start min-h-screen bg-[var(--background)] text-[var(--foreground)] max-w-7xl mx-auto pt-16 md:pt-20">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p>The product with ID '{id}' could not be found.</p>
      </main>
    );
  }

  return (
    <main className="flex font-sans flex-col items-center justify-start min-h-screen bg-[var(--background)] text-[var(--foreground)] max-w-7xl mx-auto pt-16 md:pt-20">
      <div className="w-full p-4 md:p-8 bg-white shadow-lg rounded-lg">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={600}
              height={400}
              layout="responsive"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-2 text-gray-900">{product.name}</h1>
            <p className="text-gray-600 text-lg mb-4">{product.category} - {product.brand}</p>
            <p className="text-2xl font-semibold text-green-600 mb-6">${product.price.toFixed(2)}</p>
            <p className="text-gray-700 text-base leading-relaxed">{product.description}</p>
            {/* Add more product details here as needed */}
          </div>
        </div>
      </div>
    </main>
  );
}