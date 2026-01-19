import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
                <div className="text-6xl font-bold text-gray-400 mb-4">404</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Page Not Found
                </h2>
                <p className="text-gray-600 mb-8">
                    Sorry, we couldn't find the page you're looking for.
                </p>
                <div className="space-y-4">
                    <Link
                        href="/"
                        className="block w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
                    >
                        Go Home
                    </Link>
                    <Link
                        href="/items"
                        className="block w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors font-medium"
                    >
                        Browse Products
                    </Link>
                </div>
            </div>
        </div>
    );
}