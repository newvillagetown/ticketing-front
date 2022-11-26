import React, { Suspense } from "react";
import ProductItemsOrganism from "src/components/organisms/product-items/ProductItems.organism";
import styles from "./Product.page.module.scss";
import { productDummy } from "src/assets/dummy/product";

const ProductPage = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <Suspense fallback={"데이터가 없어요"}>
          <ProductItemsOrganism items={productDummy(30)} />
        </Suspense>
      </div>
    </div>
  );
};

export default ProductPage;
