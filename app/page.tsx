'use client';

import Hero from '@/components/Hero';
import Link from 'next/link';
import Image from 'next/image';

const featuredItems = [
  { name: 'Shawarma Wrap', image: '/food-photos/Chicken-Shawarma.png', desc: 'Tender marinated meat in fresh pita' },
  { name: 'Mixed Bowl', image: '/food-photos/Shawarma-Bowl-Mix.png', desc: 'Rice, salad, and your choice of protein' },
  { name: 'Skewer Plate', image: '/food-photos/Skewer-Mix-Bowl.png', desc: 'Grilled to perfection with fresh sides' },
  { name: 'Falafel Bowl', image: '/food-photos/Falafel-Bowl.png', desc: 'Crispy falafel with hummus and salad' },
  { name: 'Beef Shawarma', image: '/food-photos/Beef-Shawarma.png', desc: 'Slow-roasted beef with garlic sauce' },
  { name: 'Kafta Skewers', image: '/food-photos/Kafta-Skewers.png', desc: 'Seasoned ground beef skewers' },
];

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />

      {/* Categories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">Popular Items</h2>
              <p className="text-neutral-500 mt-2 text-sm">Explore our most ordered dishes.</p>
            </div>
            <Link
              href="/menu"
              className="hidden md:flex items-center text-neutral-500 hover:text-orange-600 font-medium text-sm gap-1 transition-colors"
            >
              See all
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredItems.map((item, idx) => (
              <Link href="/menu" key={idx} className="group cursor-pointer">
                <div className="aspect-square rounded-2xl glass-card overflow-hidden relative mb-3 p-2">
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <h3 className="text-center font-medium text-sm text-neutral-800 group-hover:text-orange-600 transition-colors">{item.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 border-t border-neutral-200/50 bg-white/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-3xl p-10 md:p-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-6">
                Authentic Mediterranean <br />flavors in Montreal
              </h2>
              <p className="text-lg text-neutral-500 leading-relaxed font-light">
                At Shawarmania, we bring the rich flavors of the Middle East to downtown Montreal.
                Our recipes use fresh ingredients, traditional spices, and time-honored techniques
                to create dishes that taste like home.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="p-6 bg-white/50 rounded-2xl border border-white/60 text-center shadow-sm">
                <h3 className="text-4xl font-bold text-orange-600 mb-2 tracking-tight">100%</h3>
                <p className="text-neutral-600 font-medium text-sm">Halal Certified</p>
              </div>
              <div className="p-6 bg-white/50 rounded-2xl border border-white/60 text-center shadow-sm">
                <h3 className="text-4xl font-bold text-orange-600 mb-2 tracking-tight">Fresh</h3>
                <p className="text-neutral-600 font-medium text-sm">Made Daily</p>
              </div>
              <div className="p-6 bg-white/50 rounded-2xl border border-white/60 text-center shadow-sm">
                <h3 className="text-4xl font-bold text-orange-600 mb-2 tracking-tight">Fast</h3>
                <p className="text-neutral-600 font-medium text-sm">Quick & Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-4">Visit Us Today</h2>
            <p className="text-neutral-500 mb-8 max-w-md mx-auto">
              896 Sherbrooke St W, Montreal<br />
              Open 11am – 12am daily
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://maps.app.goo.gl/TL6ptSscu3EcaAHCA"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium rounded-xl shadow-lg shadow-neutral-900/10 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Get Directions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </a>
              <a
                href="tel:+15147467602"
                className="px-8 py-3.5 bg-white/50 border border-white/60 backdrop-blur-sm hover:bg-white text-neutral-900 text-sm font-medium rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
