import Image from 'next/image'
import Link from 'next/link'
import { getMockBrands } from '@/app/products/mock-data'

const BrandListPage = () => {
  const brands = getMockBrands();

  return (
    <div className='w-full py-8 md:py-16 max-w-7xl mx-auto'>
      <div className='flex flex-col items-center justify-center gap-6'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold mb-4'>เลือกดูตามแบรนด์</h1>
        </div>
        <div className="flex gap-4 md:gap-6">
          {brands.map(brand => (
            <Link href={brand.linkUrl} key={brand.id} className="flex flex-col items-center">
              <Image
                src={brand.imageUrl}
                alt={brand.name}
                width={144}
                height={144}
                className="mb-4 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-cover rounded-md flex-shrink-0"
              />
              <p className="text-sm font-medium">{brand.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BrandListPage