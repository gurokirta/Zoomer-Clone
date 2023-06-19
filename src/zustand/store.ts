import { create } from "zustand";
import { Ajax } from "../../src/Utils/Ajax";
export const useStore = create<ProductStore>(set => ({
  products: [],
  brands: [],
  initialPageSize: 15,

  increasePageSize: () =>
    set(state => ({ initialPageSize: state.initialPageSize + 15 })),

  fetchProduct: async keyword => {
    const { initialPageSize } = useStore.getState();
    try {
      const data = {
        page_size: initialPageSize,
        page: 1,
        keyword: keyword,
      };
      const response = await Ajax.post("/products", data);
      const { products } = await response.data;
      set({ products });
    } catch (error) {
      console.log(error);
    }
  },
  searchProduct: async keyword => {
    const { initialPageSize } = useStore.getState();
    try {
      const data = {
        page_size: initialPageSize,
        page: 1,
        keyword: keyword,
      };
      const response = await Ajax.post("/products", data);
      const { products } = await response.data;
      set({ products });
    } catch (error) {
      console.log(error);
    }
  },
  fetchBrands: async () => {
    try {
      const {
        data: { brands },
      } = await Ajax.get("/brands");
      set({ brands });
    } catch (error) {
      console.log(error);
    }
  },
}));
