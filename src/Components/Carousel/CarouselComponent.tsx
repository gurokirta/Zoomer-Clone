import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import { Carousel } from "react-responsive-carousel";
import { Ajax } from "../../Utils/Ajax";

const CarouselComponent = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  const fetchProduct = async () => {
    try {
      const data = {
        page_size: 5,
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
      {products.map(product => (
        <Link to={`/product/${product.id}`}>
          <img src={product.images[0]} key={product.images[0]} />
        </Link>
      ))}
    </div>
  );
};

export default CarouselComponent;
