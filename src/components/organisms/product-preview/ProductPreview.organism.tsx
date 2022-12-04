import React from "react";
import useProductRecoil from "src/hooks-recoil/useProductRecoil";
import styles from "./ProductPreview.organism.module.scss";

const ProductCardViewOrganism = () => {
  const { selectedItemKey } = useProductRecoil();

  return (
    <div className={styles.wrap}>
      <div>이미지</div>
      <div>제목</div>
      <div>날짜</div>
      <div>부연설명</div>
    </div>
  );
};

export default ProductCardViewOrganism;
