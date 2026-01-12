'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    const navLinks = [
        { href: '/menu', label: 'MENU' },
        { href: '/gallery', label: 'GALLERY' },
        { href: '/contact', label: 'FIND US' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-black">
            <nav className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/branding/Insta-Logo.jpg"
                            alt="Shawarmania"
                            width={45}
                            height={45}
                            className="rounded-full"
                        />
                        <span className="text-xl md:text-2xl font-bold text-white tracking-wide">
                            SHAWARMANIA
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-semibold tracking-wider transition-colors ${isActive(link.href)
                                        ? 'text-yellow-400'
                                        : 'text-white hover:text-yellow-400'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="https://www.ubereats.com/ca/store/shawarmania/MUsajDhtVBGQZA2tN689gw?diningMode=DELIVERY"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2.5 rounded-full font-bold text-sm tracking-wide transition-colors"
                        >
                            ORDER NOW
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-white p-2"
                        aria-label="Toggle menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden border-t border-gray-800 py-4">
                        <div className="flex flex-col gap-1">
                            <Link
                                href="/"
                                className={`py-3 px-4 text-sm font-semibold tracking-wider ${isActive('/') ? 'text-yellow-400' : 'text-white'
                                    }`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                HOME
                            </Link>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`py-3 px-4 text-sm font-semibold tracking-wider ${isActive(link.href) ? 'text-yellow-400' : 'text-white'
                                        }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="https://www.ubereats.com/ca/store/shawarmania/MUsajDhtVBGQZA2tN689gw?diningMode=DELIVERY"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mx-4 mt-3 bg-yellow-400 text-black px-6 py-3 rounded-full font-bold text-sm tracking-wide text-center"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                ORDER NOW
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
