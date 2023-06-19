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
  amount: string;
};

type Brand = string;

type ProductStore = {
  products: Product[];
  brands: Brand[];
  initialPageSize: number;
  increasePageSize: () => void;
  fetchProduct: (keyword: string) => void;
  fetchBrands: () => void;
  searchProduct: (keyword: string) => void;
};
