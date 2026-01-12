import { Metadata } from 'next';
import { supabase } from '@/lib/supabaseClient';
import { MenuCategory, MenuItem as MenuItemType, MenuByCategory } from '@/types/database';
import CategorySection from '@/components/CategorySection';

export const metadata: Metadata = {
    title: "Menu",
    description: "Browse our menu of fresh shawarma wraps, hearty bowls, and sizzling skewers. Order for pickup or delivery in Montreal.",
};

export const dynamic = 'force-dynamic';

async function getMenuData(): Promise<MenuByCategory[]> {
    if (!supabase) return [];

    try {
        const { data: categories, error: categoriesError } = await supabase
            .from('menu_categories')
            .select('*')
            .order('order', { ascending: true });

        if (categoriesError) return [];

        const { data: items, error: itemsError } = await supabase
            .from('menu_items')
            .select('*')
            .order('name', { ascending: true });

        if (itemsError) return [];

        return (categories as MenuCategory[]).map((category) => ({
            category,
            items: (items as MenuItemType[]).filter((item) => item.category_id === category.id),
        }));
    } catch {
        return [];
    }
}

export default async function MenuPage() {
    const menuData = await getMenuData();

    return (
        <div className="min-h-screen bg-zinc-900">
            {/* Hero Header */}
            <div className="bg-black text-white py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-yellow-400 font-semibold tracking-widest uppercase mb-4">
                        Our Food
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        THE MENU
                    </h1>
                    <p className="text-white/60 text-lg max-w-lg mx-auto">
                        Fresh, authentic flavors made daily with premium ingredients
                    </p>
                </div>
            </div>

            {/* Category Quick Nav */}
            {menuData.length > 0 && (
                <div className="sticky top-16 md:top-20 z-40 bg-black/95 backdrop-blur-sm border-b border-zinc-800">
                    <div className="container mx-auto px-4">
                        <nav className="flex gap-2 overflow-x-auto py-4 scrollbar-hide" aria-label="Menu categories">
                            {menuData.map(({ category, items }) => {
                                const availableCount = items.filter(i => i.available).length;
                                if (availableCount === 0) return null;
                                return (
                                    <a
                                        key={category.id}
                                        href={`#category-${category.id}`}
                                        className="px-5 py-2 bg-zinc-800 hover:bg-yellow-400 hover:text-black text-white rounded-full text-sm font-semibold whitespace-nowrap transition-colors tracking-wide"
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
                {menuData.length > 0 ? (
                    menuData.map(({ category, items }) => (
                        <CategorySection key={category.id} category={category} items={items} />
                    ))
                ) : (
                    <div className="text-center py-20">
                        <div className="w-20 h-20 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-10 h-10 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-semibold text-white mb-2">Menu Coming Soon</h2>
                        <p className="text-white/50">Check back later for our delicious offerings.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
