import React from "react";
import LinkAtom from "src/components/atoms/link/Link.atom";
import MainLayout from "src/components/layouts/main/main.layout";

const Product = () => {
  return (
    <div>
      아직 아무것도 없소요
      <br />
      <LinkAtom href="/">홈 화면으로</LinkAtom>
    </div>
  );
};

Product.getLayout = (page: React.ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Product;
