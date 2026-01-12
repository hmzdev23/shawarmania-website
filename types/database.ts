// Database types matching Supabase tables

export interface MenuCategory {
  id: string;
  name: string;
  order: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category_id: string;
  image_filename: string | null;
  available: boolean;
}

// For convenience, a menu item with its category
export interface MenuItemWithCategory extends MenuItem {
  category: MenuCategory;
}

// Grouped menu data for display
export interface MenuByCategory {
  category: MenuCategory;
  items: MenuItem[];
}
