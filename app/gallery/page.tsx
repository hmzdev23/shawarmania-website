'use client';

import Image from 'next/image';
import { supabase } from '@/lib/supabaseClient';
import { MenuItem } from '@/types/database';
import { getImageUrl } from '@/lib/imageUrl';
import { BlurFade } from '@/components/ui/blur-fade';
import { useEffect, useState } from 'react';

// Local food images as fallback
const localImages = [
    '/food-photos/Beef-Shawarma.png',
    '/food-photos/Chicken-Shawarma-Bowl.png',
    '/food-photos/Falafel-Bowl.png',
    '/food-photos/Beef-Shawarma-Bowl.png',
    '/food-photos/Chicken-Shawarma.png',
    '/food-photos/Shawarma-Bowl-Mix.png',
    '/food-photos/Kafta-Skewers-Bowl.png',
    '/food-photos/Mandi-Bowl.png',
    '/food-photos/Skewer-Mix-Bowl.png',
    '/food-photos/Beef-Skewers.png',
    '/food-photos/Chicken-Skewers.png',
    '/food-photos/Shawarma-Burger.png',
    '/food-photos/Kafta-Skewers.png',
    '/food-photos/Vegan-Skewers.png',
    '/food-photos/Beef-Poutine.png',
    '/food-photos/Shawarma-Sushi.png',
];

async function getGalleryImages(): Promise<string[]> {
    if (!supabase) return localImages;

    try {
        const { data: items, error } = await supabase
            .from('menu_items')
            .select('image_filename, name')
            .not('image_filename', 'is', null)
            .order('name');

        if (error || !items || items.length === 0) return localImages;

        const urls = items
            .map((item: Pick<MenuItem, 'image_filename'>) => getImageUrl(item.image_filename))
            .filter((url): url is string => url !== null);

        return urls.length > 0 ? [...new Set(urls)] : localImages;
    } catch {
        return localImages;
    }
}

export default function GalleryPage() {
    const [images, setImages] = useState<string[]>(localImages);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getGalleryImages().then((data) => {
            setImages(data);
            setLoading(false);
        });
    }, []);

    return (
        <div className="min-h-screen bg-amber-50">
            {/* Header */}
            <div className="bg-gradient-to-b from-white to-amber-50 text-stone-900 py-16 md:py-24 pt-24">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-red-600 font-semibold tracking-widest uppercase mb-4">
                        Our Food
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        GALLERY
                    </h1>
                    <p className="text-stone-600 text-lg">
                        A taste of what we offer
                    </p>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                    {images.map((url, index) => (
                        <BlurFade key={url + index} inView delay={0.05 * (index % 8)}>
                            <div className="relative aspect-square bg-white rounded-xl overflow-hidden shadow-md group">
                                <Image
                                    src={url}
                                    alt={`Food photo ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                    loading="lazy"
                                />
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </div>
    );
}
