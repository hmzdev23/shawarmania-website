'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { BlurFade } from '@/components/ui/blur-fade';
import { LinkPreview } from '@/components/ui/link-preview';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-amber-50">
            {/* Header */}
            <div className="bg-gradient-to-b from-white to-amber-50 text-stone-900 py-16 md:py-24 pt-24">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-red-600 font-semibold tracking-widest uppercase mb-4">
                        Get In Touch
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        FIND US
                    </h1>
                    <p className="text-stone-600 text-lg">
                        Visit us or order for delivery
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="max-w-4xl mx-auto">
                    {/* Contact Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {/* Location & Hours */}
                        <BlurFade inView delay={0.1}>
                            <div className="bg-white rounded-2xl p-8 shadow-md">
                                <h2 className="text-xl font-bold text-stone-900 mb-6 tracking-wide">LOCATION & HOURS</h2>

                                <address className="not-italic space-y-6">
                                    <div>
                                        <h3 className="font-semibold text-red-600 mb-2 text-sm tracking-wide">ADDRESS</h3>
                                        <p className="text-stone-600">
                                            896 Sherbrooke St W<br />
                                            Montreal, QC H3A 1G3
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-red-600 mb-2 text-sm tracking-wide">HOURS</h3>
                                        <p className="text-stone-600">
                                            11am – 12am<br />
                                            7 days a week
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-red-600 mb-2 text-sm tracking-wide">PHONE</h3>
                                        <a
                                            href="tel:+15147467602"
                                            className="text-stone-900 hover:text-red-600 font-bold text-xl transition-colors"
                                        >
                                            (514) 746-7602
                                        </a>
                                    </div>
                                </address>

                                <a
                                    href="https://maps.app.goo.gl/TL6ptSscu3EcaAHCA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-bold transition-colors"
                                >
                                    GET DIRECTIONS
                                </a>
                            </div>
                        </BlurFade>

                        {/* Order & Connect */}
                        <BlurFade inView delay={0.2}>
                            <div className="bg-white rounded-2xl p-8 shadow-md">
                                <h2 className="text-xl font-bold text-stone-900 mb-6 tracking-wide">ORDER & CONNECT</h2>

                                <div className="space-y-4">
                                    <h3 className="font-semibold text-red-600 text-sm tracking-wide">DELIVERY</h3>
                                    <div className="flex flex-col gap-3">
                                        <LinkPreview
                                            url="https://www.ubereats.com/ca/store/shawarmania/MUsajDhtVBGQZA2tN689gw?diningMode=DELIVERY"
                                            className="flex items-center justify-between bg-stone-100 hover:bg-red-600 hover:text-white text-stone-700 px-5 py-4 rounded-xl transition-colors font-semibold"
                                        >
                                            <span>Uber Eats</span>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </LinkPreview>
                                        <LinkPreview
                                            url="https://www.doordash.com/en-CA/store/shawarmania-896-rue-sherbrooke-o-montr%C3%A9al-32839777/85761963/"
                                            className="flex items-center justify-between bg-stone-100 hover:bg-red-600 hover:text-white text-stone-700 px-5 py-4 rounded-xl transition-colors font-semibold"
                                        >
                                            <span>DoorDash</span>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </LinkPreview>
                                    </div>

                                    <h3 className="font-semibold text-red-600 text-sm tracking-wide pt-4">FOLLOW US</h3>
                                    <LinkPreview
                                        url="https://www.instagram.com/shawarmania.mtl"
                                        className="flex items-center justify-between bg-stone-100 hover:bg-red-600 hover:text-white text-stone-700 px-5 py-4 rounded-xl transition-colors font-semibold"
                                    >
                                        <span>@shawarmania.mtl</span>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </LinkPreview>
                                </div>
                            </div>
                        </BlurFade>
                    </div>

                    {/* Google Maps Embed */}
                    <BlurFade inView delay={0.3}>
                        <div className="bg-white rounded-2xl overflow-hidden shadow-md">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.2!2d-73.5789!3d45.5044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a4a0c0c0c0c%3A0x0!2s896%20Sherbrooke%20St%20W%2C%20Montreal%2C%20QC%20H3A%201G3!5e0!3m2!1sen!2sca!4v1"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Shawarmania Location"
                                className="w-full"
                            />
                        </div>
                    </BlurFade>

                    {/* Back to Menu */}
                    <div className="mt-12 text-center">
                        <Link
                            href="/menu"
                            className="inline-block text-red-600 hover:text-red-700 font-bold tracking-wide"
                        >
                            ← BACK TO MENU
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
