'use client'
import { StarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({ product, tag }) => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '$'

  const reviewCount = product.rating?.length || 0

  const avgRating =
    reviewCount > 0
      ? product.rating.reduce((acc, curr) => acc + curr.rating, 0) / reviewCount
      : 0

  const roundedRating = Math.round(avgRating)

  return (
    <Link
      href={`/product/${product.id}`}
      className="group block w-full max-w-[300px]"
    >
      <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all duration-300">

        {/* Image container */}
        <div className="relative w-full h-64 rounded-xl overflow-hidden">
          
          {tag && (
            <span
              className={`absolute top-2 left-2 text-xs px-2 py-1 rounded text-white z-10 ${
                tag === 'Best Seller' ? 'bg-green-600' : 'bg-black'
              }`}
            >
              {tag}
            </span>
          )}

          <Image
            src={product.images?.[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition duration-300"
          />
        </div>

        {/* Content */}
        <div className="pt-4">
          <p className="text-base font-medium text-gray-800 line-clamp-1">
            {product.name}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex">
              {Array(5)
                .fill('')
                .map((_, index) => (
                  <StarIcon
                    key={index}
                    size={16}
                    fill={index < roundedRating ? '#00C950' : '#E5E7EB'}
                    stroke="none"
                  />
                ))}
            </div>

            <span className="text-sm text-gray-500">
              {avgRating ? avgRating.toFixed(1) : '0'} ({reviewCount})
            </span>
          </div>

          {/* Price */}
          <p className="text-lg font-semibold text-gray-900 mt-2">
            {currency}{product.price}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard