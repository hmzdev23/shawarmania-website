'use client';

import { MenuCategory, MenuItem as MenuItemType } from '@/types/database';
import MenuItem from './MenuItem';
import { BlurFade } from './ui/blur-fade';

interface CategorySectionProps {
    category: MenuCategory;
    items: MenuItemType[];
}

export default function CategorySection({ category, items }: CategorySectionProps) {
    const availableItems = items.filter(item => item.available);

    if (availableItems.length === 0) return null;

    return (
        <section className="mb-16" id={`category-${category.id}`}>
            {/* Category Header */}
            <BlurFade inView delay={0.1}>
                <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-2 tracking-wide">
                        {category.name.toUpperCase()}
                    </h2>
                    <div className="w-12 h-1 bg-red-600 rounded-full" />
                </div>
            </BlurFade>

            {/* Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {availableItems.map((item, idx) => (
                    <BlurFade key={item.id} inView delay={0.1 + idx * 0.05}>
                        <MenuItem item={item} />
                    </BlurFade>
                ))}
            </div>
        </section>
    );
}
