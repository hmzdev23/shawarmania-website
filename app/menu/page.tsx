'use client';

import { supabase } from '@/lib/supabaseClient';
import { MenuCategory, MenuItem as MenuItemType, MenuByCategory } from '@/types/database';
import CategorySection from '@/components/CategorySection';
import { useEffect, useState } from 'react';

// Fallback menu data using local images
const fallbackMenu: MenuByCategory[] = [
    {
        category: { id: 1, name: 'Shawarma Wraps', order: 1 },
        items: [
            { id: 1, name: 'Chicken Shawarma', price: 12.99, description: 'Tender marinated chicken with garlic sauce', image_filename: 'Chicken-Shawarma', available: true, category_id: 1 },
            { id: 2, name: 'Beef Shawarma', price: 13.99, description: 'Seasoned beef with tahini and vegetables', image_filename: 'Beef-Shawarma', available: true, category_id: 1 },
        ]
    },
    {
        category: { id: 2, name: 'Bowls', order: 2 },
        items: [
            { id: 3, name: 'Chicken Shawarma Bowl', price: 15.99, description: 'Rice, salad, and chicken shawarma', image_filename: 'Chicken-Shawarma-Bowl', available: true, category_id: 2 },
            { id: 4, name: 'Beef Shawarma Bowl', price: 16.99, description: 'Rice, salad, and beef shawarma', image_filename: 'Beef-Shawarma-Bowl', available: true, category_id: 2 },
            { id: 5, name: 'Falafel Bowl', price: 14.99, description: 'Fresh falafel with hummus and salad', image_filename: 'Falafel-Bowl', available: true, category_id: 2 },
            { id: 6, name: 'Mixed Shawarma Bowl', price: 17.99, description: 'Chicken and beef shawarma combo', image_filename: 'Shawarma-Bowl-Mix', available: true, category_id: 2 },
        ]
    },
    {
        category: { id: 3, name: 'Skewers', order: 3 },
        items: [
            { id: 7, name: 'Chicken Skewers', price: 14.99, description: 'Grilled chicken skewers', image_filename: 'Chicken-Skewers', available: true, category_id: 3 },
            { id: 8, name: 'Beef Skewers', price: 15.99, description: 'Grilled beef skewers', image_filename: 'Beef-Skewers', available: true, category_id: 3 },
            { id: 9, name: 'Kafta Skewers', price: 15.99, description: 'Seasoned ground beef skewers', image_filename: 'Kafta-Skewers', available: true, category_id: 3 },
        ]
    },
];

async function getMenuData(): Promise<MenuByCategory[]> {
    if (!supabase) return fallbackMenu;

    try {
        const { data: categories, error: categoriesError } = await supabase
            .from('menu_categories')
            .select('*')
            .order('order', { ascending: true });

        if (categoriesError || !categories || categories.length === 0) return fallbackMenu;

        const { data: items, error: itemsError } = await supabase
            .from('menu_items')
            .select('*')
            .order('name', { ascending: true });

        if (itemsError || !items || items.length === 0) return fallbackMenu;

        return (categories as MenuCategory[]).map((category) => ({
            category,
            items: (items as MenuItemType[]).filter((item) => item.category_id === category.id),
        }));
    } catch {
        return fallbackMenu;
    }
}

export default function MenuPage() {
    const [menuData, setMenuData] = useState<MenuByCategory[]>(fallbackMenu);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMenuData().then((data) => {
            setMenuData(data);
            setLoading(false);
        });
    }, []);

    return (
        <div className="min-h-screen bg-amber-50">
            {/* Hero Header */}
            <div className="bg-gradient-to-b from-white to-amber-50 text-stone-900 py-16 md:py-24 pt-24">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-red-600 font-semibold tracking-widest uppercase mb-4">
                        Our Food
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        THE MENU
                    </h1>
                    <p className="text-stone-600 text-lg max-w-lg mx-auto">
                        Fresh, authentic flavors made daily with premium ingredients
                    </p>
                </div>
            </div>

            {/* Category Quick Nav */}
            {menuData.length > 0 && (
                <div className="sticky top-16 md:top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-stone-200 shadow-sm">
                    <div className="container mx-auto px-4">
                        <nav className="flex gap-2 overflow-x-auto py-4 scrollbar-hide" aria-label="Menu categories">
                            {menuData.map(({ category, items }) => {
                                const availableCount = items.filter(i => i.available).length;
                                if (availableCount === 0) return null;
                                return (
                                    <a
                                        key={category.id}
                                        href={`#category-${category.id}`}
                                        className="px-5 py-2 bg-stone-100 hover:bg-red-600 hover:text-white text-stone-700 rounded-full text-sm font-semibold whitespace-nowrap transition-colors tracking-wide"
                                    >
                                        {category.name.toUpperCase()}
                                    </a>
                                );
                            })}
                        </nav>
                    </div>
                </div>
            )}

            {/* Menu Content */}
            <div className="container mx-auto px-4 py-12 md:py-16">
                {menuData.map(({ category, items }) => (
                    <CategorySection key={category.id} category={category} items={items} />
                ))}
            </div>
        </div>
    );
}
