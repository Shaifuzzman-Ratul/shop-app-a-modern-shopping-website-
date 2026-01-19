'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Navbar({ isAuthenticated }) {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = async () => {
        await fetch('/api/auth/logout', { method: 'POST' });
        router.push('/');
        router.refresh();
    };

    return (
        <nav className="bg-white shadow-lg border-b border-brand-light/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold text-brand-dark">
                            ShopApp
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-600 hover:text-brand transition-colors">
                            Home
                        </Link>
                        <Link href="/items" className="text-gray-600 hover:text-brand transition-colors">
                            Items
                        </Link>
                        {isAuthenticated && (
                            <Link href="/dashboard" className="text-gray-600 hover:text-brand transition-colors">
                                Dashboard
                            </Link>
                        )}
                        {isAuthenticated ? (
                            <button
                                onClick={handleLogout}
                                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                            >
                                Logout
                            </button>
                        ) : (
                            <Link
                                href="/login"
                                className="bg-brand text-white px-4 py-2 rounded-md hover:bg-brand-dark transition-colors"
                            >
                                Login
                            </Link>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-600 hover:text-brand"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
                            <Link href="/" className="block px-3 py-2 text-gray-600 hover:text-brand hover:bg-brand-light/10 rounded-md transition-colors">
                                Home
                            </Link>
                            <Link href="/items" className="block px-3 py-2 text-gray-600 hover:text-brand hover:bg-brand-light/10 rounded-md transition-colors">
                                Items
                            </Link>
                            {isAuthenticated && (
                                <Link href="/dashboard" className="block px-3 py-2 text-gray-600 hover:text-brand hover:bg-brand-light/10 rounded-md transition-colors">
                                    Dashboard
                                </Link>
                            )}
                            {isAuthenticated ? (
                                <button
                                    onClick={handleLogout}
                                    className="block w-full text-left px-3 py-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-md transition-colors"
                                >
                                    Logout
                                </button>
                            ) : (
                                <Link href="/login" className="block px-3 py-2 text-brand hover:text-brand-dark hover:bg-brand-light/10 rounded-md transition-colors">
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}