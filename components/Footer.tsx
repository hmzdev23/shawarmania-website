'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white/30 backdrop-blur-md border-t border-white/40 py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="font-semibold text-lg tracking-tight text-neutral-900">Shawarmania</span>
                        </div>
                        <p className="text-neutral-500 text-xs leading-relaxed max-w-xs">
                            Fresh, authentic Mediterranean shawarma in downtown Montreal. Premium ingredients, made with passion.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-neutral-900 mb-4 text-sm">Explore</h4>
                        <ul className="space-y-2 text-xs text-neutral-500">
                            <li><Link href="/" className="hover:text-orange-600 transition-colors">Home</Link></li>
                            <li><Link href="/menu" className="hover:text-orange-600 transition-colors">Menu</Link></li>
                            <li><Link href="/gallery" className="hover:text-orange-600 transition-colors">Gallery</Link></li>
                            <li><Link href="/contact" className="hover:text-orange-600 transition-colors">Find Us</Link></li>
                        </ul>
                    </div>

                    {/* Order Online */}
                    <div>
                        <h4 className="font-semibold text-neutral-900 mb-4 text-sm">Order Online</h4>
                        <ul className="space-y-2 text-xs text-neutral-500">
                            <li>
                                <a
                                    href="https://www.ubereats.com/ca/store/shawarmania/MUsajDhtVBGQZA2tN689gw?diningMode=DELIVERY"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-orange-600 transition-colors"
                                >
                                    Uber Eats
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.doordash.com/en-CA/store/shawarmania-896-rue-sherbrooke-o-montr%C3%A9al-32839777/85761963/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-orange-600 transition-colors"
                                >
                                    DoorDash
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-neutral-900 mb-4 text-sm">Contact</h4>
                        <address className="not-italic space-y-2 text-xs text-neutral-500">
                            <p>896 Sherbrooke St W<br />Montreal, QC H3A 1G3</p>
                            <p>
                                <a href="tel:+15147467602" className="hover:text-orange-600 transition-colors">
                                    (514) 746-7602
                                </a>
                            </p>
                            <p>Open 11am – 12am daily</p>
                        </address>

                        {/* Social */}
                        <div className="flex gap-4 mt-4">
                            <a
                                href="https://www.instagram.com/shawarmania.mtl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-400 hover:text-orange-600 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t border-neutral-200/50 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] text-neutral-400">
                        © {new Date().getFullYear()} Shawarmania. All rights reserved.
                    </p>
                    <a
                        href="https://maps.app.goo.gl/TL6ptSscu3EcaAHCA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:text-orange-700 text-xs font-medium transition-colors flex items-center gap-1"
                    >
                        Get Directions
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}
