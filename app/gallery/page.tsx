'use client';

import { useEffect, useState } from 'react';
import { supabase, isSupabaseConfigured } from '@/lib/supabaseClient';
import Image from 'next/image';
import { BlurFade } from '@/components/ui/blur-fade';

interface GalleryImage {
    id: string;
    image_url: string;
    alt_text?: string;
}

// Fallback images
const fallbackImages: GalleryImage[] = [
    { id: '1', image_url: '/food-photos/Chicken-Shawarma.png', alt_text: 'Chicken Shawarma' },
    { id: '2', image_url: '/food-photos/Beef-Shawarma-Bowl.png', alt_text: 'Beef Shawarma Bowl' },
    { id: '3', image_url: '/food-photos/Falafel-Bowl.png', alt_text: 'Falafel Bowl' },
    { id: '4', image_url: '/food-photos/Skewer-Mix-Bowl.png', alt_text: 'Mixed Skewers' },
    { id: '5', image_url: '/food-photos/Chicken-Shawarma-Bowl.png', alt_text: 'Chicken Shawarma Bowl' },
    { id: '6', image_url: '/food-photos/Kafta-Skewers-Bowl.png', alt_text: 'Kafta Skewers' },
    { id: '7', image_url: '/food-photos/Beef-Shawarma.png', alt_text: 'Beef Shawarma' },
    { id: '8', image_url: '/food-photos/Shawarma-Bowl-Mix.png', alt_text: 'Mixed Bowl' },
    { id: '9', image_url: '/food-photos/Mandi-Bowl.png', alt_text: 'Mandi Bowl' },
    { id: '10', image_url: '/food-photos/Beef-Skewers.png', alt_text: 'Beef Skewers' },
    { id: '11', image_url: '/food-photos/Chicken-Skewers.png', alt_text: 'Chicken Skewers' },
    { id: '12', image_url: '/food-photos/Shawarma-Burger.png', alt_text: 'Shawarma Burger' },
];

export default function GalleryPage() {
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchGallery() {
            if (!isSupabaseConfigured() || !supabase) {
                setImages(fallbackImages);
                setLoading(false);
                return;
            }

            try {
                const { data, error } = await supabase
                    .from('gallery')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (error) throw error;
                setImages(data && data.length > 0 ? data : fallbackImages);
            } catch (error) {
                console.error('Error fetching gallery:', error);
                setImages(fallbackImages);
            } finally {
                setLoading(false);
            }
        }

        fetchGallery();
    }, []);

    return (
        <div className="pt-16 min-h-screen">
            {/* Hero Banner */}
            <div className="bg-white/30 border-b border-white/40 py-16 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-neutral-900">
                        Our Gallery
                    </h1>
                    <p className="text-neutral-500 max-w-2xl mx-auto font-light">
                        A taste of what awaits you at Shawarmania.
                    </p>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {loading ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className="aspect-square glass-card rounded-2xl animate-pulse" />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {images.map((image, idx) => (
                            <BlurFade key={image.id} delay={0.05 * idx} inView>
                                <div className="glass-card rounded-2xl overflow-hidden group cursor-pointer p-2">
                                    <div className="relative aspect-square rounded-xl overflow-hidden">
                                        <Image
                                            src={image.image_url}
                                            alt={image.alt_text || 'Gallery image'}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </div>
                            </BlurFade>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
