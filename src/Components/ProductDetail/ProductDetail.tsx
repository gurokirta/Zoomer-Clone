import React, { useState } from "react";

import { useParams, useNavigation } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType | null>(null);

  const fetchSingleProduct = async () => {
    const response = await ajax.get(`/product/${product.id}`);
    const product = await response.data;
    console.log("product", product);
    setProduct(product);
  };

  useEffect(() => {
    fetchSingleProduct();
  }, [ProductId]);
  return <div></div>;
};

export default ProductDetail;
