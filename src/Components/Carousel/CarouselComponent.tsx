import React, { useEffect, useState } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import "./carousel.scss";

// import { Carousel } from "react-responsive-carousel";
import { Ajax } from "../../Utils/Ajax";
import { Key } from "@mui/icons-material";

const CarouselComponent = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  // const nextSlide = () => {
  //   setProducts(products === products.length - 1 ? 0 : products + 1);
  // };

  // const prevSlide = () => {
  //   setProducts(products === 0 ? products.length - 1 : products - 1);
  // };

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
    <>
      {/* {products.map(product => (
        <Link to={`/product/${product.id}`}>
          <img src={product.images[0]} key={product.images[0]} />
        </Link>
      ))} */}

      <div className="carousel">
        {/* <button className="arrow left" onClick={prevSlide}>
          &lt;
        </button> */}
        <div className="imageContainer">
          {products.map((product, index) => (
            <Link to={`/product/${product.id}`} key={[index]}>
              <img
                key={index}
                className="img"
                src={product.images[0]}
                alt={`Slide ${index}`}
                style={{ height: "150px" }}
              />
            </Link>
          ))}
        </div>
        {/* <button className="arrow right" onClick={nextSlide}>
          &gt;
        </button> */}
      </div>
    </>
  );
};

export default CarouselComponent;
