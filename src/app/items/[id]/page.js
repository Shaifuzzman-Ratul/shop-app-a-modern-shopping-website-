import { notFound } from 'next/navigation';
import Link from 'next/link';
import productsData from '@/data/products.json';

export default async function ItemDetailsPage({ params }) {
    const { id } = await params;
    console.log('Product ID from params:', id);
    console.log('Available products:', productsData.map(p => p.id));

    const product = productsData.find(p => p.id === parseInt(id));

    console.log('Found product:', product);

    if (!product) {
        console.log('Product not found, showing 404');
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto">
                {/* Simple breadcrumb */}
                <nav className="mb-8">
                    <Link href="/" className="text-brand hover:underline">Home</Link>
                    {' > '}
                    <Link href="/items" className="text-brand hover:underline">Products</Link>
                    {' > '}
                    <span className="text-gray-600">{product.name}</span>
                </nav>

                {/* Simple product display */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Product Image */}
                        <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                            {/* Status Badge */}
                            <div className="absolute top-4 right-4">
                                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${product.inStock
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-red-100 text-red-800'
                                    }`}>
                                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                                </span>
                            </div>
                        </div>

                        {/* Product Info */}
                        <div>
                            <div className="mb-4">
                                <span className="bg-brand text-white px-3 py-1 rounded-full text-sm">
                                    {product.category}
                                </span>
                            </div>

                            <h1 className="text-3xl font-bold text-brand-dark mb-4">
                                {product.name}
                            </h1>

                            <div className="flex items-center mb-6">
                                <span className="text-4xl font-bold text-brand-dark">
                                    ${product.price}
                                </span>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-brand-dark mb-2">Description</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-lg font-semibold text-brand-dark mb-3">Features</h3>
                                <ul className="space-y-2">
                                    {product.features.map((feature, index) => (
                                        <li key={index} className="flex items-center">
                                            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <button
                                    disabled={!product.inStock}
                                    className="w-full bg-brand text-white py-3 px-6 rounded-lg font-semibold hover:bg-brand-dark transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                                >
                                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                                </button>

                                <Link
                                    href="/items"
                                    className="block w-full bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-colors text-center"
                                >
                                    ← Back to Products
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Debug Info */}
                <div className="mt-8 bg-gray-100 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Debug Info:</h3>
                    <p><strong>Product ID:</strong> {id}</p>
                    <p><strong>Product Found:</strong> {product ? 'Yes' : 'No'}</p>
                    <p><strong>Product Name:</strong> {product?.name}</p>
                </div>
            </div>
        </div>
    );
}