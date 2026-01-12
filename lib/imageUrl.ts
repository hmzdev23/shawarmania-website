/**
 * Helper to build Supabase Storage public URLs for images
 */

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const BUCKET_NAME = 'food-images';

/**
 * Builds a public URL for an image stored in Supabase Storage
 * @param filename - The filename (e.g., "Chicken-Shawarma.jpg")
 * @returns Full public URL or null if filename is empty
 */
export function getImageUrl(filename: string | null | undefined): string | null {
    if (!filename || !SUPABASE_URL) {
        return null;
    }

    // Strip extension and always use .png (actual format in storage)
    const baseName = filename.replace(/\.[^.]+$/, '');

    return `${SUPABASE_URL}/storage/v1/object/public/${BUCKET_NAME}/${baseName}.png`;
}
