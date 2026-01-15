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
  category: string;
  image_url: string | null;
  created_at: string;
}

// For convenience, a menu item with its category
export interface MenuItemWithCategory extends MenuItem {
  categoryData: MenuCategory;
}

// Grouped menu data for display
export interface MenuByCategory {
  category: MenuCategory;
  items: MenuItem[];
}
