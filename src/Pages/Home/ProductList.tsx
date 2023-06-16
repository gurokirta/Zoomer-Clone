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
          <div className="product_label">
            ზუმერული ფასები
            <div className="product_label_after"></div>
            <div className="product_label_before"></div>
          </div>
          <Box
            key={product.id}
            sx={{
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "5px",
              width: "245px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
              height: "250px",
              color: "black",
            }}
          >
            <Box>
              <img src={product.images[0]} alt="" className="prod-img" />
            </Box>
            <Box
              sx={{
                fontSize: "12px",
              }}
              onClick={() => console.log(product.brand)}
            >
              {product.title}
            </Box>
            <Box
              sx={{
                color: "#fb7613",
                fontWeight: "600",
                fontSize: "17px",
              }}
            >
              {parseFloat(product.price.toString()).toFixed(2)} ₾
            </Box>
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default ProductList;
