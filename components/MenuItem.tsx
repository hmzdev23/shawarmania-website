'use client';

import type { MenuItem as MenuItemType } from '@/types/database';
import Image from 'next/image';
import { BlurFade } from './ui/blur-fade';

interface MenuItemProps {
    item: MenuItemType;
    index?: number;
}

export default function MenuItem({ item, index = 0 }: MenuItemProps) {
    return (
        <BlurFade delay={0.1 + index * 0.05} inView>
            <div className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full">
                {/* Image */}
                <div className="h-48 overflow-hidden relative">
                    {item.image_url ? (
                        <Image
                            src={item.image_url}
                            alt={item.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    ) : (
                        <div className="w-full h-full bg-neutral-100 flex items-center justify-center">
                            <span className="text-neutral-400 text-sm">No image</span>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-neutral-900 text-lg tracking-tight leading-tight">
                            {item.name}
                        </h3>
                        <span className="font-medium text-neutral-900 bg-white/50 px-2 py-0.5 rounded-lg border border-white text-sm">
                            ${item.price.toFixed(2)}
                        </span>
                    </div>

                    {item.description && (
                        <p className="text-neutral-500 text-xs mb-4 line-clamp-2 leading-relaxed">
                            {item.description}
                        </p>
                    )}

                    <div className="mt-auto pt-4 border-t border-neutral-200/50">
                        <span className="bg-neutral-100/50 px-2 py-1 rounded text-neutral-600 border border-white/50 text-[10px] font-medium uppercase tracking-wider">
                            {item.category}
                        </span>
                    </div>
                </div>
            </div>
        </BlurFade>
    );
}
