function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 ">
            <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
                {/* Store information */}
                <div>
                    <h2 className="text-xl font-bold text-white">ShopEasy</h2>
                    <p className="mt-3 text-sm leading-6">
                        Find your favourite products at great prices.
                    </p>
                </div>

                {/* Quick navigation links */}
                <div>
                    <h3 className="font-semibold text-white">Quick Links</h3>
                    <ul className="mt-3 space-y-2 text-sm">
                        <li><a href="#home" className="hover:text-white">Home</a></li>
                        <li><a href="#products" className="hover:text-white">Products</a></li>
                        <li><a href="#contact-us" className="hover:text-white">Contact Us</a></li>
                    </ul>
                </div>

                {/* Contact details */}
                <div>
                    <h3 className="font-semibold text-white">Contact</h3>
                    <p className="mt-3 text-sm">support@shopeasy.com</p>
                    <p className="mt-1 text-sm">+91 12345 67890</p>
                </div>
            </div>

            <div className="border-t border-slate-700 py-4 text-center text-sm">
                © {new Date().getFullYear()} ShopEasy. All rights reserved.
            </div>
        </footer>
    )
}

export { Footer }
