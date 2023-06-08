import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Ajax } from "../../utils/Ajax";

import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<ProductType | null>(null);

  const fetchSingleProduct = async () => {
    const { data: productItem } = await Ajax.get(`/product/${id}`);
    console.log(productItem);
    setProduct(productItem);
  };

  useEffect(() => {
    fetchSingleProduct();
  }, [id]);
  return (
    <Box>
      <Link to="/">
        <Button>Back To Home</Button>
      </Link>
      <Typography>{product?.title}</Typography>
      <Box>
        {product?.images.map(image => {
          return <img src={image} />;
        })}
      </Box>
      <Typography>{product?.category}</Typography>
      <Typography>{product?.description}</Typography>
    </Box>
  );
};

export default ProductDetail;
