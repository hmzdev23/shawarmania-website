import Hero from '@/components/Hero';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Hero />

      {/* About Section */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-yellow-400 font-semibold tracking-widest uppercase mb-4">
              About Us
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Modern Mediterranean Cuisine
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Shawarmania captures a truly modern taste of Mediterranean cuisine while giving
              guests the luxury of customizing their preferences. We use the highest quality
              ingredients to deliver traditional recipes freshly interpreted and served with passion.
            </p>
            <Link
              href="/menu"
              className="inline-block text-yellow-400 hover:text-yellow-300 font-bold tracking-wide"
            >
              DISCOVER OUR MENU →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-yellow-400 font-semibold tracking-widest uppercase mb-4">
              Our Food
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Fan Favorites
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Chicken Shawarma', image: '/food-photos/Chicken-Shawarma.png' },
              { name: 'Beef Shawarma Bowl', image: '/food-photos/Beef-Shawarma-Bowl.png' },
              { name: 'Chicken Shawarma Bowl', image: '/food-photos/Chicken-Shawarma-Bowl.png' },
            ].map((item) => (
              <Link
                key={item.name}
                href="/menu"
                className="group relative aspect-square rounded-2xl overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold">{item.name}</h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-3 rounded-full font-bold tracking-wide transition-colors"
            >
              VIEW FULL MENU
            </Link>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            {/* Location */}
            <a
              href="https://maps.app.goo.gl/TL6ptSscu3EcaAHCA"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6"
            >
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">LOCATION</h3>
              <p className="text-white/60">896 Sherbrooke St W<br />Montreal, QC</p>
            </a>

            {/* Hours */}
            <div className="p-6">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">HOURS</h3>
              <p className="text-white/60">11am – 12am<br />7 Days a Week</p>
            </div>

            {/* Phone */}
            <a
              href="tel:+15147467602"
              className="group p-6"
            >
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">CALL US</h3>
              <p className="text-white/60">(514) 746-7602</p>
            </a>
          </div>
        </div>
      </section>

      {/* Delivery CTA */}
      <section className="py-16 bg-yellow-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Order For Delivery
          </h2>
          <p className="text-black/70 mb-8 max-w-lg mx-auto">
            Get your favorite shawarma delivered right to your door.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.ubereats.com/ca/store/shawarmania/MUsajDhtVBGQZA2tN689gw?diningMode=DELIVERY"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-zinc-800 text-white px-8 py-3 rounded-full font-bold transition-colors"
            >
              UBER EATS
            </a>
            <a
              href="https://www.doordash.com/en-CA/store/shawarmania-896-rue-sherbrooke-o-montr%C3%A9al-32839777/85761963/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-zinc-800 text-white px-8 py-3 rounded-full font-bold transition-colors"
            >
              DOORDASH
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
