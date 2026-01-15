'use client';

import Link from 'next/link';
import Image from 'next/image';
import { VideoMedia } from './ui/video-media';

// Video URL from Supabase - using direct URL for reliability
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://hoirqrkdgbmvpwutwuwj.supabase.co';
const videoUrl = `${SUPABASE_URL}/storage/v1/object/public/Videos/Trailer.mp4`;

const foodImages = [
    '/food-photos/Chicken-Shawarma.png',
    '/food-photos/Beef-Shawarma-Bowl.png',
    '/food-photos/Falafel-Bowl.png',
    '/food-photos/Skewer-Mix-Bowl.png',
];

export default function Hero() {
    return (
        <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Content */}
                    <div className="space-y-8 animate-slide-up text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-orange-100 backdrop-blur-md text-orange-700 text-xs font-medium uppercase tracking-wide shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                            Montreal&apos;s Favorite
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-neutral-900 leading-[1.05]">
                            Your go-to <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500">
                                shawarma spot.
                            </span>
                        </h1>

                        <p className="text-lg text-neutral-500 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
                            Fresh, authentic Mediterranean cuisine made with premium ingredients and served with passion.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="/menu"
                                className="px-8 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium rounded-xl shadow-lg shadow-orange-500/10 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
                            >
                                View Menu
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <a
                                href="https://www.ubereats.com/ca/store/shawarmania/MUsajDhtVBGQZA2tN689gw?diningMode=DELIVERY"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3.5 bg-white/50 border border-white/60 backdrop-blur-sm hover:bg-white text-neutral-900 text-sm font-medium rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
                            >
                                Order Online
                            </a>
                        </div>

                        {/* Trust badges */}
                        <div className="pt-6 flex items-center gap-6 text-sm text-neutral-500 font-medium justify-center lg:justify-start">
                            <div className="flex items-center gap-2">
                                <div className="p-1 rounded-full bg-green-100/50 text-green-600">
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span>Fresh Daily</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="p-1 rounded-full bg-green-100/50 text-green-600">
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span>Halal</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Video */}
                    <div className="hidden lg:block animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        <div className="relative">
                            {/* Glass frame wrapper */}
                            <div className="glass-card p-2 rounded-3xl">
                                <VideoMedia
                                    src={videoUrl}
                                    className="rounded-2xl aspect-[4/3] h-[450px]"
                                    showControls
                                    overlay="none"
                                />
                            </div>

                            {/* Floating badge - top right */}
                            <div className="absolute top-6 right-6 glass-panel p-3 rounded-xl flex items-center gap-2 shadow-lg z-10">
                                <div className="bg-green-500 w-2 h-2 rounded-full animate-pulse" />
                                <div>
                                    <p className="text-xs font-semibold text-neutral-900">Open Now</p>
                                    <p className="text-[10px] text-neutral-500">11am – 12am</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile: Simple grid */}
            <div className="lg:hidden max-w-7xl mx-auto px-4 mt-12">
                <div className="grid grid-cols-2 gap-4">
                    {foodImages.map((img, idx) => (
                        <div key={idx} className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src={img}
                                alt="Food"
                                width={300}
                                height={300}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

