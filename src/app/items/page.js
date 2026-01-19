'use client';

import Link from 'next/link';
import Image from 'next/image';
import productsData from '@/data/products.json';

export default function ItemsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-brand-dark mb-4">
                        Our Products
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover our carefully curated selection of high-quality products at great prices.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {productsData.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                            {/* Product Image */}
                            <Link href={`/items/${product.id}`} className="block relative h-64 cursor-pointer">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                    unoptimized
                                />
                                {!product.inStock && (
                                    <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                                        Out of Stock
                                    </div>
                                )}
                                {product.inStock && (
                                    <div className="absolute top-4 right-4 bg-brand-light text-white px-2 py-1 rounded text-sm font-medium">
                                        In Stock
                                    </div>
                                )}
                            </Link>

                            {/* Product Info */}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-brand bg-brand-light/20 px-2 py-1 rounded">
                                        {product.category}
                                    </span>
                                    <span className="text-2xl font-bold text-brand-dark">
                                        ${product.price}
                                    </span>
                                </div>

                                <Link href={`/items/${product.id}`}>
                                    <h3 className="text-xl font-semibold text-brand-dark mb-2 group-hover:text-brand transition-colors cursor-pointer">
                                        {product.name}
                                    </h3>
                                </Link>

                                <p className="text-gray-600 mb-4 line-clamp-2">
                                    {product.description}
                                </p>

                                <div className="flex flex-wrap gap-1 mb-4">
                                    {product.features?.slice(0, 2).map((feature, index) => (
                                        <span
                                            key={index}
                                            className="text-xs bg-brand-light/20 text-brand px-2 py-1 rounded"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                    {product.features?.length > 2 && (
                                        <span className="text-xs text-gray-500">
                                            +{product.features.length - 2} more
                                        </span>
                                    )}
                                </div>

                                {/* View Details Button - Simplified */}
                                <Link
                                    href={`/items/${product.id}`}
                                    className="block w-full bg-brand text-white text-center py-3 px-4 rounded-lg hover:bg-brand-dark transition-colors font-medium"
                                >
                                    View Details →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {productsData.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No products available at the moment.</p>
                    </div>
                )}
            </div>
        </div>
    );
}