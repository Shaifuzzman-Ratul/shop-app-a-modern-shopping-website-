import Link from "next/link";
import Image from "next/image";
import products from "../data/products.json";

export default function Home() {

  const featuredProducts = products.filter(product => product.inStock).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">

      <section className="relative overflow-hidden bg-brand-gradient text-white">

        <div className="absolute inset-0 bg-black/20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%235F9598%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 animate-fadeInUp">
                <span className="w-2 h-2 bg-brand-light rounded-full mr-2 animate-pulse"></span>
                New arrivals weekly
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fadeInUp animate-delay-100">
                <span className="animate-gradient">
                  Shop
                </span>
                <br />
                <span className="text-white">
                  Smarter
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-white/80 max-w-2xl animate-fadeInUp animate-delay-200">
                Discover premium products curated just for you. From cutting-edge electronics to everyday essentials.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fadeInUp animate-delay-300">
                <Link
                  href="/items"
                  className="group bg-white text-brand px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-glow inline-flex items-center justify-center"
                >
                  Explore Products
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                <Link
                  href="/dashboard"
                  className="border-2 border-brand-light text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-brand-light/20 transition-all duration-300 backdrop-blur-sm inline-flex items-center justify-center"
                >
                  View Dashboard
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20 animate-fadeInUp animate-delay-400">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-white/70 text-sm">Products</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-white">50k+</div>
                  <div className="text-white/70 text-sm">Happy Customers</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-white">4.9★</div>
                  <div className="text-white/70 text-sm">Rating</div>
                </div>
              </div>
            </div>

            {/* Right Content - Featured Products */}
            <div className="relative animate-slideInRight">
              <div className="grid grid-cols-1 gap-6">
                {featuredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-fadeInUp ${index === 1 ? 'lg:translate-x-8' : index === 2 ? 'lg:translate-x-4' : ''
                      }`}
                    style={{
                      animationDelay: `${0.5 + index * 0.2}s`
                    }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center animate-float">
                        <img
                          src={product.image}
                          alt={product.name}
                          width={40}
                          height={40}
                          className="rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white text-lg">{product.name}</h3>
                        <p className="text-white/70 text-sm">{product.category}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-2xl font-bold text-white">${product.price}</span>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-light rounded-full flex items-center justify-center animate-bounce">
                <span className="text-2xl">🔥</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-xl">✨</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        {/* <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 text-gray-50" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div> */}
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Why Choose ShopApp?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide the best shopping experience with quality products and excellent service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-dark">Quality Products</h3>
              <p className="text-gray-600">Carefully curated selection of high-quality items from trusted brands.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-dark">Best Prices</h3>
              <p className="text-gray-600">Competitive pricing with regular discounts and special offers.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-dark">Fast Delivery</h3>
              <p className="text-gray-600">Quick and reliable shipping to get your products to you fast.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600">
              Find exactly what you're looking for in our organized categories.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Electronics', 'Home & Kitchen', 'Fitness', 'Office'].map((category) => (
              <div key={category} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg hover:bg-brand-light/10 transition-all duration-300 cursor-pointer group">
                <div className="w-12 h-12 bg-brand-light/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-light/30 transition-colors">
                  <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="font-semibold text-brand-dark group-hover:text-brand transition-colors">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", text: "Amazing quality products and fast shipping. Highly recommended!" },
              { name: "Mike Chen", text: "Great customer service and competitive prices. My go-to shopping app." },
              { name: "Emily Davis", text: "Love the variety of products available. Always find what I need here." }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-brand-dark">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-brand-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest deals and product updates.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-brand-dark"
            />
            <button className="bg-white text-brand px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Browse our extensive collection of products and find your next favorite item.
          </p>
          <Link
            href="/items"
            className="bg-brand text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-brand-dark transition-colors inline-block"
          >
            Browse Products
          </Link>
        </div>
      </section>
    </div>
  );
}