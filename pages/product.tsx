import React from "react";
import MainLayout from "src/components/layouts/main/main.layout";
import ProductPage from "src/pages/product/Product.page";

const Product = () => {
  return <ProductPage />;
};

Product.getLayout = (page: React.ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Product;
