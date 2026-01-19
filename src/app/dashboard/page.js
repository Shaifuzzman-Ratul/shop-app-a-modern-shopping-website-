import { isAuthenticated } from '@/lib/auth';
import { redirect } from 'next/navigation';
import productsData from '@/data/products.json';

export default async function DashboardPage() {
    const authenticated = await isAuthenticated();

    if (!authenticated) {
        redirect('/login');
    }

    const totalProducts = productsData.length;
    const inStockProducts = productsData.filter(p => p.inStock).length;
    const outOfStockProducts = totalProducts - inStockProducts;
    const categories = [...new Set(productsData.map(p => p.category))];

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-brand-dark">Dashboard</h1>
                    <p className="text-gray-600 mt-2">Welcome to your admin dashboard</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow-lg p-6 border border-brand-light/20">
                        <div className="flex items-center">
                            <div className="p-2 bg-brand-light/20 rounded-lg">
                                <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Total Products</p>
                                <p className="text-2xl font-semibold text-brand-dark">{totalProducts}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6 border border-brand-light/20">
                        <div className="flex items-center">
                            <div className="p-2 bg-green-100 rounded-lg">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">In Stock</p>
                                <p className="text-2xl font-semibold text-brand-dark">{inStockProducts}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6 border border-brand-light/20">
                        <div className="flex items-center">
                            <div className="p-2 bg-red-100 rounded-lg">
                                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Out of Stock</p>
                                <p className="text-2xl font-semibold text-brand-dark">{outOfStockProducts}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6 border border-brand-light/20">
                        <div className="flex items-center">
                            <div className="p-2 bg-brand-light/20 rounded-lg">
                                <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Categories</p>
                                <p className="text-2xl font-semibold text-brand-dark">{categories.length}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Products */}
                <div className="bg-white rounded-lg shadow-lg border border-brand-light/20">
                    <div className="px-6 py-4 border-b border-brand-light/20 bg-brand-light/5">
                        <h2 className="text-lg font-semibold text-brand-dark">Recent Products</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-brand uppercase tracking-wider">
                                        Product
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-brand uppercase tracking-wider">
                                        Category
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-brand uppercase tracking-wider">
                                        Price
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-brand uppercase tracking-wider">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {productsData.slice(0, 5).map((product) => (
                                    <tr key={product.id} className="hover:bg-brand-light/5 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-brand-dark">{product.name}</div>
                                            <div className="text-sm text-gray-500">{product.description.substring(0, 50)}...</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-brand-light/20 text-brand">
                                                {product.category}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-dark font-medium">
                                            ${product.price}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${product.inStock
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-red-100 text-red-800'
                                                }`}>
                                                {product.inStock ? 'In Stock' : 'Out of Stock'}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}