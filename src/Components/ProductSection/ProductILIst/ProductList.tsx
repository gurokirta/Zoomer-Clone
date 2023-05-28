import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

import "./ProductList.scss";

const ProductList = ({ products }: { products: ProductType[] }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 280px)",
        gap: "1rem",
        marginTop: "1rem",
      }}
    >
      {products.map(product => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <Box
            key={product.id}
            sx={{
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "5px",
              width: "250px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Box>
              <img src={product.images[0]} alt="" className="prod-img" />
            </Box>
            <Box>{product.title}</Box>
            <Box>{product.price}</Box>
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default ProductList;
