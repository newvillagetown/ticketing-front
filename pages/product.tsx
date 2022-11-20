import React from "react";
import LinkAtom from "src/components/atoms/link/Link.atom";
import MainLayout from "src/components/layouts/main/main.layout";
import ProductPage from "src/pages/product/Product.page";

const Product = () => {
  return (
    <div>
      <ProductPage />
      <br />
      <LinkAtom href="/">홈 화면으로</LinkAtom>
    </div>
  );
};

Product.getLayout = (page: React.ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Product;
