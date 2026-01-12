'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Marquee } from './ui/marquee';
import { LinkPreview } from './ui/link-preview';
import { cn } from '@/lib/utils';

const foodItems = [
    { name: 'Chicken Shawarma', image: '/food-photos/Chicken-Shawarma.png' },
    { name: 'Beef Bowl', image: '/food-photos/Beef-Shawarma-Bowl.png' },
    { name: 'Falafel Bowl', image: '/food-photos/Falafel-Bowl.png' },
    { name: 'Mixed Skewers', image: '/food-photos/Skewer-Mix-Bowl.png' },
    { name: 'Chicken Bowl', image: '/food-photos/Chicken-Shawarma-Bowl.png' },
    { name: 'Kafta Skewers', image: '/food-photos/Kafta-Skewers-Bowl.png' },
];

const firstColumn = foodItems.slice(0, 3);
const secondColumn = foodItems.slice(3, 6);

const FoodCard = ({ image, name }: { image: string; name: string }) => {
    return (
        <figure
            className={cn(
                "relative w-40 h-48 cursor-pointer overflow-hidden rounded-2xl border shadow-lg",
                "border-stone-200 bg-white hover:scale-105 transition-transform duration-300"
            )}
        >
            <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
                sizes="160px"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-white text-sm font-semibold">{name}</p>
            </div>
        </figure>
    );
};

export default function Hero() {
    return (
        <section className="relative min-h-screen bg-gradient-to-b from-amber-50 to-white overflow-hidden">
            {/* Two Column Layout */}
            <div className="container mx-auto px-4 pt-32 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
                    {/* Left: Content */}
                    <div className="text-center lg:text-left">
                        <p className="text-red-600 font-semibold tracking-widest uppercase mb-4">
                            Montreal&apos;s Favorite
                        </p>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-stone-900 mb-6 tracking-tight leading-tight">
                            YOUR GO-TO
                            <br />
                            <span className="text-red-600">SHAWARMA SPOT</span>
                        </h1>

                        <p className="text-stone-600 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mb-10">
                            Fresh, authentic Mediterranean cuisine made with premium ingredients and served with passion.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="/menu"
                                className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full font-bold text-lg tracking-wide transition-all hover:scale-105 text-center"
                            >
                                VIEW MENU
                            </Link>
                            <LinkPreview
                                url="https://www.ubereats.com/ca/store/shawarmania/MUsajDhtVBGQZA2tN689gw?diningMode=DELIVERY"
                                className="border-2 border-stone-900 hover:border-red-600 hover:text-red-600 text-stone-900 px-10 py-4 rounded-full font-bold text-lg tracking-wide transition-all inline-block text-center"
                            >
                                ORDER ONLINE
                            </LinkPreview>
                        </div>
                    </div>

                    {/* Right: Marquee Gallery */}
                    <div className="hidden lg:flex relative h-[600px] flex-row items-center justify-center overflow-hidden">
                        <Marquee pauseOnHover vertical className="[--duration:25s]">
                            {firstColumn.map((item) => (
                                <FoodCard key={item.name} {...item} />
                            ))}
                        </Marquee>
                        <Marquee reverse pauseOnHover vertical className="[--duration:25s]">
                            {secondColumn.map((item) => (
                                <FoodCard key={item.name} {...item} />
                            ))}
                        </Marquee>
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-amber-50 via-amber-50/80 to-transparent"></div>
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
                    </div>
                </div>
            </div>

            {/* Mobile: Show simple grid instead */}
            <div className="lg:hidden container mx-auto px-4 pb-12">
                <div className="grid grid-cols-2 gap-3">
                    {foodItems.slice(0, 4).map((item, idx) => (
                        <div key={idx} className="aspect-square rounded-xl overflow-hidden shadow-lg">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
