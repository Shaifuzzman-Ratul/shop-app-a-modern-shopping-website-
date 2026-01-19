import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import productsData from '@/data/products.json';

export default function ItemDetailsPage({ params }) {
    const product = productsData.find(p => p.id === parseInt(params.id));

    if (!product) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Breadcrumb */}
                <nav className="flex mb-8" aria-label="Breadcrumb">
                    <ol className="flex items-center space-x-4">
                        <li>
                            <Link href="/" className="text-gray-500 hover:text-gray-700">
                                Home
                            </Link>
                        </li>
                        <li>
                            <svg className="flex-shrink-0 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </li>
                        <li>
                            <Link href="/items" className="text-gray-500 hover:text-gray-700">
                                Products
                            </Link>
                        </li>
                        <li>
                            <svg className="flex-shrink-0 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </li>
                        <li className="text-gray-900 font-medium">
                            {product.name}
                        </li>
                    </ol>
                </nav>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Product Image */}
                        <div className="relative h-96 lg:h-full min-h-[400px]">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                                priority
                            />
                            {!product.inStock && (
                                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-2 rounded-lg text-sm font-medium">
                                    Out of Stock
                                </div>
                            )}
                        </div>

                        {/* Product Details */}
                        <div className="p-8">
                            <div className="mb-4">
                                <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                                    {product.category}
                                </span>
                            </div>

                            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                {product.name}
                            </h1>

                            <div className="flex items-center mb-6">
                                <span className="text-4xl font-bold text-gray-900">
                                    ${product.price}
                                </span>
                                <div className="ml-4 flex items-center">
                                    {product.inStock ? (
                                        <span className="flex items-center text-green-600">
                                            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            In Stock
                                        </span>
                                    ) : (
                                        <span className="flex items-center text-red-600">
                                            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                            </svg>
                                            Out of Stock
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Features</h3>
                                <div className="grid grid-cols-2 gap-2">
                                    {product.features.map((feature, index) => (
                                        <div key={index} className="flex items-center">
                                            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    disabled={!product.inStock}
                                    className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                                >
                                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                                </button>
                                <Link
                                    href="/items"
                                    className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-colors text-center"
                                >
                                    Back to Products
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products Section */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {productsData
                            .filter(p => p.category === product.category && p.id !== product.id)
                            .slice(0, 3)
                            .map((relatedProduct) => (
                                <Link key={relatedProduct.id} href={`/items/${relatedProduct.id}`}>
                                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                        <div className="relative h-48">
                                            <Image
                                                src={relatedProduct.image}
                                                alt={relatedProduct.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-semibold text-gray-900 mb-2">
                                                {relatedProduct.name}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                                                {relatedProduct.description}
                                            </p>
                                            <div className="flex justify-between items-center">
                                                <span className="text-lg font-bold text-gray-900">
                                                    ${relatedProduct.price}
                                                </span>
                                                <span className="text-sm text-gray-500">
                                                    {relatedProduct.category}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    return productsData.map((product) => ({
        id: product.id.toString(),
    }));
}