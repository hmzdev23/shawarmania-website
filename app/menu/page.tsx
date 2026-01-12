'use client';

import { useEffect, useState } from 'react';
import { supabase, isSupabaseConfigured } from '@/lib/supabaseClient';
import type { MenuItem as MenuItemType } from '@/types/database';
import CategorySection from '@/components/CategorySection';
import MenuItem from '@/components/MenuItem';

// Fallback data for when Supabase isn't configured
const fallbackMenuItems: MenuItemType[] = [
    { id: '1', name: 'Chicken Shawarma Wrap', description: 'Tender marinated chicken in fresh pita with garlic sauce', price: 12.99, category: 'Shawarma Wraps', image_url: '/food-photos/Chicken-Shawarma.png', created_at: '' },
    { id: '2', name: 'Beef Shawarma Wrap', description: 'Slow-roasted beef with pickles and tahini', price: 13.99, category: 'Shawarma Wraps', image_url: '/food-photos/Beef-Shawarma.png', created_at: '' },
    { id: '3', name: 'Falafel Wrap', description: 'Crispy falafel with hummus and fresh vegetables', price: 10.99, category: 'Shawarma Wraps', image_url: '/food-photos/Falafel-Bowl.png', created_at: '' },
    { id: '4', name: 'Chicken Shawarma Bowl', description: 'Rice, salad, chicken shawarma with all the fixings', price: 15.99, category: 'Bowls', image_url: '/food-photos/Chicken-Shawarma-Bowl.png', created_at: '' },
    { id: '5', name: 'Beef Shawarma Bowl', description: 'Rice, salad, beef shawarma with garlic and tahini', price: 16.99, category: 'Bowls', image_url: '/food-photos/Beef-Shawarma-Bowl.png', created_at: '' },
    { id: '6', name: 'Mixed Shawarma Bowl', description: 'Best of both worlds - chicken and beef', price: 17.99, category: 'Bowls', image_url: '/food-photos/Shawarma-Bowl-Mix.png', created_at: '' },
    { id: '7', name: 'Chicken Skewers', description: 'Grilled chicken skewers with rice and salad', price: 14.99, category: 'Skewers', image_url: '/food-photos/Chicken-Skewers.png', created_at: '' },
    { id: '8', name: 'Kafta Skewers', description: 'Seasoned ground beef skewers', price: 15.99, category: 'Skewers', image_url: '/food-photos/Kafta-Skewers.png', created_at: '' },
    { id: '9', name: 'Mixed Skewer Plate', description: 'Assortment of grilled skewers', price: 18.99, category: 'Skewers', image_url: '/food-photos/Skewer-Mix-Bowl.png', created_at: '' },
];

export default function MenuPage() {
    const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    useEffect(() => {
        async function fetchMenu() {
            if (!isSupabaseConfigured() || !supabase) {
                setMenuItems(fallbackMenuItems);
                setLoading(false);
                return;
            }

            try {
                const { data, error } = await supabase
                    .from('menu_items')
                    .select('*')
                    .order('category', { ascending: true });

                if (error) throw error;
                setMenuItems(data && data.length > 0 ? data : fallbackMenuItems);
            } catch (error) {
                console.error('Error fetching menu:', error);
                setMenuItems(fallbackMenuItems);
            } finally {
                setLoading(false);
            }
        }

        fetchMenu();
    }, []);

    // Group items by category
    const categories = menuItems.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {} as Record<string, MenuItemType[]>);

    const categoryNames = Object.keys(categories);

    return (
        <div className="pt-16 min-h-screen">
            {/* Hero Banner */}
            <div className="relative overflow-hidden bg-neutral-900 text-white py-20">
                <div className="absolute inset-0 bg-[url('/food-photos/Shawarma-Bowl-Mix.png')] bg-cover bg-center opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Our Menu</h1>
                    <p className="text-neutral-300 mt-2 max-w-xl font-light">
                        Authentic Mediterranean dishes made fresh daily with premium ingredients.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters Sidebar */}
                    <aside className="w-full lg:w-64 flex-shrink-0">
                        <div className="glass-panel p-6 rounded-2xl sticky top-24">
                            <h3 className="font-semibold text-neutral-900 mb-4 text-sm uppercase tracking-wide">Categories</h3>
                            <div className="space-y-2">
                                <button
                                    onClick={() => setActiveCategory(null)}
                                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeCategory === null
                                            ? 'bg-orange-600 text-white'
                                            : 'text-neutral-600 hover:bg-white/50 hover:text-neutral-900'
                                        }`}
                                >
                                    All Items
                                </button>
                                {categoryNames.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeCategory === cat
                                                ? 'bg-orange-600 text-white'
                                                : 'text-neutral-600 hover:bg-white/50 hover:text-neutral-900'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Menu Grid */}
                    <div className="flex-grow">
                        {loading ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="glass-card rounded-2xl h-80 animate-pulse" />
                                ))}
                            </div>
                        ) : (
                            <div className="space-y-12">
                                {(activeCategory ? [activeCategory] : categoryNames).map((category) => (
                                    <CategorySection key={category} title={category}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {categories[category].map((item, idx) => (
                                                <MenuItem key={item.id} item={item} index={idx} />
                                            ))}
                                        </div>
                                    </CategorySection>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
