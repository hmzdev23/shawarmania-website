import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center bg-black">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/food-photos/Beef-Shawarma.png"
                    alt="Shawarma"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <p className="text-yellow-400 text-lg md:text-xl font-semibold tracking-widest uppercase mb-4">
                    Montreal&apos;s Favorite
                </p>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight">
                    YOUR GO-TO
                    <br />
                    <span className="text-yellow-400">SHAWARMA SPOT</span>
                </h1>

                <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    Fresh, authentic Mediterranean cuisine made with premium ingredients and served with passion.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/menu"
                        className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-300 text-black px-10 py-4 rounded-full font-bold text-lg tracking-wide transition-all hover:scale-105"
                    >
                        VIEW MENU
                    </Link>
                    <Link
                        href="https://www.ubereats.com/ca/store/shawarmania/MUsajDhtVBGQZA2tN689gw?diningMode=DELIVERY"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto border-2 border-white hover:border-yellow-400 hover:text-yellow-400 text-white px-10 py-4 rounded-full font-bold text-lg tracking-wide transition-all"
                    >
                        ORDER ONLINE
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}
