type ProductType = {
  id: string;
  title: string;
  description: string;
  images: string[];
  brand: string;
  category: string;
  price: number;
  rating: string;
  amount: string;
};
type Product = {
  id: string;
  title: string;
  description: string;
  images: string[];
  brand: string;
  category: string;
  price: number;
  rating: string;
  amount: number;
};

type Brand = string;

type ProductStore = {
  products: Product[];
  brands: Brand[];
  cartItems: Product[];
  initialPageSize: number;
  increasePageSize: () => void;
  fetchProduct: (keyword?: string) => void;
  fetchBrands: () => void;
  setCartItems: (product: Product) => void;
  removeFromCart: (itemId: string) => void;
  getTotalPrice: () => void;
};
