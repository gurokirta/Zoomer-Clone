import React, { useState, useEffect } from "react";
import { Ajax } from "../../utils/Ajax";
import CarouselComponent from "../Carousel/CarouselComponent";
import ProductList from "./ProductILIst/ProductList";

const ProductSection = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  const fetchProduct = async () => {
    try {
      const data = {
        page_size: 15,
        page: 1,
        keyword: "",
      };
      const response = await Ajax.post("/products", data);
      const { products } = await response.data;
      setProducts(products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default ProductSection;
