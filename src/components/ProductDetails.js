'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ProductDetails({ product, relatedProducts }) {
    const [activeTab, setActiveTab] = useState('overview');
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);

    // Mock additional images for gallery
    const productImages = [
        product.image,
        product.image,
        product.image,
        product.image
    ];

    const handleQuantityChange = (change) => {
        const newQuantity = quantity + change;
        if (newQuantity >= 1 && newQuantity <= 10) {
            setQuantity(newQuantity);
        }
    };

    const tabs = [
        { id: 'overview', label: 'Overview' },
        { id: 'specifications', label: 'Specifications' },
        { id: 'reviews', label: 'Reviews' },
        { id: 'shipping', label: 'Shipping & Returns' }
    ];

    return (
        <>
            {/* Breadcrumb */}
            <nav className="flex mb-8" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-4">
                    <li>
                        <Link href="/" className="text-gray-500 hover:text-brand transition-colors">
                            Home
                        </Link>
                    </li>
                    <li>
                        <svg className="flex-shrink-0 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </li>
                    <li>
                        <Link href="/items" className="text-gray-500 hover:text-brand transition-colors">
                            Products
                        </Link>
                    </li>
                    <li>
                        <svg className="flex-shrink-0 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </li>
                    <li className="text-brand-dark font-medium">
                        {product.name}
                    </li>
                </ol>
            </nav>

            {/* Main Product Section */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-brand-light/20 mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Product Image Gallery */}
                    <div className="relative bg-gray-50 p-8">
                        {/* Main Image */}
                        <div className="relative h-96 mb-6 rounded-xl overflow-hidden group">
                            <Image
                                src={productImages[selectedImage]}
                                alt={product.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                unoptimized
                            />
                            {/* Status Badge */}
                            <div className="absolute top-4 left-4">
                                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${product.inStock
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-red-100 text-red-800'
                                    }`}>
                                    {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                                </span>
                            </div>
                            {/* Category Badge */}
                            <div className="absolute top-4 right-4">
                                <span className="bg-brand text-white px-4 py-2 rounded-full text-sm font-semibold">
                                    {product.category}
                                </span>
                            </div>
                        </div>

                        {/* Image Thumbnails */}
                        <div className="flex space-x-4">
                            {productImages.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${selectedImage === index
                                            ? 'border-brand shadow-lg'
                                            : 'border-gray-200 hover:border-brand-light'
                                        }`}
                                >
                                    <Image
                                        src={image}
                                        alt={`${product.name} view ${index + 1}`}
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="p-8 lg:p-12">
                        {/* Product Header */}
                        <div className="mb-8">
                            <h1 className="text-4xl font-bold text-brand-dark mb-4 leading-tight">
                                {product.name}
                            </h1>

                            {/* Rating & Reviews */}
                            <div className="flex items-center mb-6">
                                <div className="flex items-center space-x-1 mr-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-gray-600 text-lg">4.9 (127 reviews)</span>
                            </div>

                            {/* Price Section */}
                            <div className="flex items-baseline mb-8">
                                <span className="text-5xl font-bold text-brand-dark mr-4">
                                    ${product.price}
                                </span>
                                <span className="text-xl text-gray-500 line-through mr-2">
                                    ${(product.price * 1.25).toFixed(2)}
                                </span>
                                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                                    Save 20%
                                </span>
                            </div>
                        </div>

                        {/* Product Description */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-brand-dark mb-4">Description</h3>
                            <p className="text-gray-600 leading-relaxed text-lg mb-4">
                                {product.description}
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                This premium product combines cutting-edge technology with exceptional build quality.
                                Perfect for both professional and personal use, it delivers outstanding performance
                                and reliability that you can count on.
                            </p>
                        </div>

                        {/* Key Features */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-brand-dark mb-4">Key Features</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {product.features.map((feature, index) => (
                                    <div key={index} className="flex items-center p-3 bg-brand-light/10 rounded-lg">
                                        <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-brand-dark font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quantity and Actions */}
                        <div className="border-t border-gray-200 pt-8">
                            <div className="flex items-center mb-6">
                                <label className="text-brand-dark font-semibold mr-6 text-lg">Quantity:</label>
                                <div className="flex items-center border-2 border-gray-300 rounded-lg">
                                    <button
                                        onClick={() => handleQuantityChange(-1)}
                                        className="px-4 py-3 text-brand hover:bg-brand-light/10 transition-colors font-semibold text-lg"
                                    >
                                        −
                                    </button>
                                    <span className="px-6 py-3 border-x-2 border-gray-300 font-semibold text-lg min-w-[60px] text-center">
                                        {quantity}
                                    </span>
                                    <button
                                        onClick={() => handleQuantityChange(1)}
                                        className="px-4 py-3 text-brand hover:bg-brand-light/10 transition-colors font-semibold text-lg"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                <button
                                    disabled={!product.inStock}
                                    className="bg-brand text-white py-4 px-8 rounded-xl font-semibold text-lg hover:bg-brand-dark transition-all duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6m0 0h15M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                    {product.inStock ? `Add ${quantity} to Cart` : 'Out of Stock'}
                                </button>
                                <button className="border-2 border-brand text-brand py-4 px-8 rounded-xl font-semibold text-lg hover:bg-brand hover:text-white transition-all duration-300 flex items-center justify-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                    Add to Wishlist
                                </button>
                            </div>

                            <Link
                                href="/items"
                                className="block w-full bg-gray-100 text-brand-dark py-3 px-6 rounded-xl font-medium hover:bg-gray-200 transition-colors text-center"
                            >
                                ← Back to Products
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Detailed Information Tabs */}
            <div className="bg-white rounded-2xl shadow-lg border border-brand-light/20 overflow-hidden mb-12">
                {/* Tab Navigation */}
                <div className="border-b border-gray-200">
                    <div className="flex overflow-x-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-8 py-4 font-semibold whitespace-nowrap transition-colors ${activeTab === tab.id
                                        ? 'text-brand border-b-2 border-brand bg-brand-light/5'
                                        : 'text-gray-500 hover:text-brand'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="p-8">
                    {activeTab === 'overview' && (
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-2xl font-semibold text-brand-dark mb-4">Product Overview</h4>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    {product.description} This exceptional product represents the perfect blend of
                                    innovation, quality, and value. Designed with the user in mind, it delivers
                                    outstanding performance across all key metrics.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-gray-50 p-6 rounded-xl">
                                        <h5 className="font-semibold text-brand-dark mb-3">What's Included</h5>
                                        <ul className="space-y-2 text-gray-600">
                                            <li className="flex items-center">
                                                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                {product.name}
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                User Manual & Quick Start Guide
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                Warranty Certificate
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                Premium Packaging
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-gray-50 p-6 rounded-xl">
                                        <h5 className="font-semibold text-brand-dark mb-3">Key Benefits</h5>
                                        <ul className="space-y-2 text-gray-600">
                                            <li>• Enhanced productivity and efficiency</li>
                                            <li>• Premium build quality and durability</li>
                                            <li>• User-friendly design and interface</li>
                                            <li>• Excellent value for money</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'specifications' && (
                        <div className="space-y-6">
                            <h4 className="text-2xl font-semibold text-brand-dark mb-6">Technical Specifications</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h5 className="font-semibold text-brand-dark mb-4">General Information</h5>
                                    <dl className="space-y-3">
                                        <div className="flex justify-between py-2 border-b border-gray-100">
                                            <dt className="text-gray-600 font-medium">Product Name:</dt>
                                            <dd className="text-brand-dark font-semibold">{product.name}</dd>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-100">
                                            <dt className="text-gray-600 font-medium">Category:</dt>
                                            <dd className="text-brand-dark font-semibold">{product.category}</dd>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-100">
                                            <dt className="text-gray-600 font-medium">SKU:</dt>
                                            <dd className="text-brand-dark font-semibold">SKU-{product.id.toString().padStart(4, '0')}</dd>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-100">
                                            <dt className="text-gray-600 font-medium">Availability:</dt>
                                            <dd className={`font-semibold ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                                                {product.inStock ? 'In Stock' : 'Out of Stock'}
                                            </dd>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-100">
                                            <dt className="text-gray-600 font-medium">Warranty:</dt>
                                            <dd className="text-brand-dark font-semibold">2 Years Manufacturer</dd>
                                        </div>
                                    </dl>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-brand-dark mb-4">Features & Capabilities</h5>
                                    <div className="space-y-3">
                                        {product.features.map((feature, index) => (
                                            <div key={index} className="flex items-center p-3 bg-brand-light/10 rounded-lg">
                                                <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <span className="text-brand-dark font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'reviews' && (
                        <div className="space-y-8">
                            <div className="flex items-center justify-between">
                                <h4 className="text-2xl font-semibold text-brand-dark">Customer Reviews</h4>
                                <button className="bg-brand text-white px-6 py-2 rounded-lg hover:bg-brand-dark transition-colors">
                                    Write a Review
                                </button>
                            </div>

                            {/* Review Summary */}
                            <div className="bg-gray-50 p-6 rounded-xl">
                                <div className="flex items-center mb-4">
                                    <div className="flex items-center space-x-1 mr-4">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="text-2xl font-bold text-brand-dark">4.9</span>
                                    <span className="text-gray-600 ml-2">out of 5 (127 reviews)</span>
                                </div>
                            </div>

                            {/* Individual Reviews */}
                            <div className="space-y-6">
                                {[
                                    { name: "Sarah Johnson", rating: 5, date: "2 days ago", comment: "Absolutely love this product! The quality is outstanding and it works exactly as described. Highly recommend!" },
                                    { name: "Mike Chen", rating: 5, date: "1 week ago", comment: "Great value for money. Fast shipping and excellent customer service. Will definitely buy again." },
                                    { name: "Emily Davis", rating: 4, date: "2 weeks ago", comment: "Very good product overall. Minor issues with setup but customer support was helpful." }
                                ].map((review, index) => (
                                    <div key={index} className="border-b border-gray-200 pb-6">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 bg-brand-light rounded-full flex items-center justify-center mr-3">
                                                    <span className="text-white font-semibold">{review.name[0]}</span>
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-brand-dark">{review.name}</p>
                                                    <p className="text-sm text-gray-500">{review.date}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-gray-600">{review.comment}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'shipping' && (
                        <div className="space-y-8">
                            <h4 className="text-2xl font-semibold text-brand-dark">Shipping & Returns</h4>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h5 className="font-semibold text-brand-dark mb-4">Shipping Information</h5>
                                    <ul className="space-y-3 text-gray-600">
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            Free shipping on orders over $50
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            Standard delivery: 3-5 business days
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            Express delivery: 1-2 business days
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            Tracking information provided
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h5 className="font-semibold text-brand-dark mb-4">Return Policy</h5>
                                    <ul className="space-y-3 text-gray-600">
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            30-day return window
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            Free return shipping
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            Full refund guarantee
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            No restocking fees
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Related Products Section */}
            {relatedProducts.length > 0 && (
                <div>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-brand-dark mb-4">You Might Also Like</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Discover more products from the {product.category} category
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {relatedProducts.map((relatedProduct) => (
                            <Link key={relatedProduct.id} href={`/items/${relatedProduct.id}`}>
                                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 group border border-brand-light/20">
                                    <div className="relative h-64">
                                        <Image
                                            src={relatedProduct.image}
                                            alt={relatedProduct.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                                            unoptimized
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-brand text-white px-3 py-1 rounded-full text-sm font-medium">
                                                {relatedProduct.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-semibold text-brand-dark mb-2 group-hover:text-brand transition-colors">
                                            {relatedProduct.name}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                            {relatedProduct.description}
                                        </p>
                                        <div className="flex justify-between items-center">
                                            <span className="text-2xl font-bold text-brand-dark">
                                                ${relatedProduct.price}
                                            </span>
                                            <span className={`text-sm px-2 py-1 rounded-full ${relatedProduct.inStock
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-red-100 text-red-800'
                                                }`}>
                                                {relatedProduct.inStock ? 'In Stock' : 'Out of Stock'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}