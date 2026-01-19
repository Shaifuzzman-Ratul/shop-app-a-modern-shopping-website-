export default function Footer() {
    return (
        <footer className="bg-brand-dark text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-brand-light">ShopApp</h3>
                        <p className="text-white/70">
                            Your one-stop destination for quality products and exceptional service.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2 text-white/70">
                            <li><a href="/" className="hover:text-brand-light transition-colors">Home</a></li>
                            <li><a href="/items" className="hover:text-brand-light transition-colors">Products</a></li>
                            <li><a href="/login" className="hover:text-brand-light transition-colors">Login</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-md font-semibold mb-4 text-white">Support</h4>
                        <ul className="space-y-2 text-white/70">
                            <li><a href="#" className="hover:text-brand-light transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-brand-light transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-brand-light transition-colors">Returns</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-md font-semibold mb-4 text-white">Connect</h4>
                        <ul className="space-y-2 text-white/70">
                            <li><a href="#" className="hover:text-brand-light transition-colors">Twitter</a></li>
                            <li><a href="#" className="hover:text-brand-light transition-colors">Facebook</a></li>
                            <li><a href="#" className="hover:text-brand-light transition-colors">Instagram</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-brand/30 mt-8 pt-8 text-center text-white/70">
                    <p>&copy; 2024 ShopApp. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}