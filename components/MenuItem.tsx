import Image from 'next/image';
import { MenuItem as MenuItemType } from '@/types/database';
import { getImageUrl } from '@/lib/imageUrl';

interface MenuItemProps {
    item: MenuItemType;
}

export default function MenuItem({ item }: MenuItemProps) {
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(price);
    };

    const imageUrl = getImageUrl(item.image_filename);

    if (!item.available) {
        return null;
    }

    return (
        <div className="bg-zinc-800 rounded-2xl overflow-hidden group hover:ring-2 hover:ring-yellow-400 transition-all">
            {/* Image */}
            <div className="relative aspect-square bg-zinc-700">
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-zinc-700">
                        <svg className="w-16 h-16 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="flex justify-between items-start gap-3">
                    <h3 className="text-lg font-bold text-white leading-tight">
                        {item.name}
                    </h3>
                    <span className="text-xl font-bold text-yellow-400 whitespace-nowrap">
                        {formatPrice(item.price)}
                    </span>
                </div>

                {item.description && (
                    <p className="mt-2 text-sm text-white/50 leading-relaxed line-clamp-2">
                        {item.description}
                    </p>
                )}
            </div>
        </div>
    );
}
