import { Metadata } from 'next';
import Image from 'next/image';
import { supabase } from '@/lib/supabaseClient';
import { MenuItem } from '@/types/database';
import { getImageUrl } from '@/lib/imageUrl';

export const metadata: Metadata = {
    title: "Gallery",
    description: "See our delicious shawarma, bowls, and skewers. Fresh Middle Eastern food made daily in Montreal.",
};

export const dynamic = 'force-dynamic';

async function getGalleryImages(): Promise<string[]> {
    if (!supabase) return [];

    try {
        const { data: items, error } = await supabase
            .from('menu_items')
            .select('image_filename, name')
            .not('image_filename', 'is', null)
            .order('name');

        if (error || !items) return [];

        const urls = items
            .map((item: Pick<MenuItem, 'image_filename'>) => getImageUrl(item.image_filename))
            .filter((url): url is string => url !== null);

        return [...new Set(urls)];
    } catch {
        return [];
    }
}

export default async function GalleryPage() {
    const images = await getGalleryImages();

    return (
        <div className="min-h-screen bg-zinc-900">
            {/* Header */}
            <div className="bg-black text-white py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-yellow-400 font-semibold tracking-widest uppercase mb-4">
                        Our Food
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        GALLERY
                    </h1>
                    <p className="text-white/60 text-lg">
                        A taste of what we offer
                    </p>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="container mx-auto px-4 py-12 md:py-16">
                {images.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                        {images.map((url, index) => (
                            <div
                                key={url}
                                className="relative aspect-square bg-zinc-800 rounded-xl overflow-hidden group"
                            >
                                <Image
                                    src={url}
                                    alt={`Food photo ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className="w-20 h-20 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-10 h-10 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-semibold text-white mb-2">Gallery Coming Soon</h2>
                        <p className="text-white/50">Check back later for photos of our dishes.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
