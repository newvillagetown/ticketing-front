import React from "react";
import MainLayout from "src/components/layouts/main/MainLayout";
import ProductPage from "src/pages/product/ProductPage";

const Product = () => {
  return <ProductPage />;
};

Product.getLayout = (page: React.ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Product;
