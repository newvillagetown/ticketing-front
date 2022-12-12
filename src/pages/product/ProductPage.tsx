import React, { Suspense, useState } from "react";
import ProductItemsOrganism from "src/components/organisms/product-items/ProductItemsOrganism";
import ProductPreviewOrganism from "src/components/organisms/product-preview/ProductPreviewOrganism";
import ProductHeaderOrganism from "src/components/organisms/product-header/ProductHeaderOrganism";
import styles from "./ProductPage.module.scss";
import { productDummy } from "src/assets/dummy/product";
import { ViewType } from "src/config/enum";
import clsx from "clsx";
import useViewTypeRecoil from "src/hooks-recoil/useViewTypeRecoil";
import useProductRecoil from "src/hooks-recoil/useProductRecoil";

const ProductPage = () => {
  const { viewType, setViewType, isCard, isList } = useViewTypeRecoil();
  const { isOpenPreview } = useProductRecoil();

  const handleChangeViewType = () => {
    isCard ? setViewType(ViewType.LIST) : setViewType(ViewType.CARD);
  };

  return (
    <div className={styles.wrap}>
      <ProductHeaderOrganism
        onClickViewBtn={handleChangeViewType}
        viewType={viewType}
      />
      <div className={clsx(styles.view, { ["expand"]: isOpenPreview })}>
        <Suspense fallback={"등록된 이벤트가 없어요🫤"}>
          <ProductItemsOrganism items={productDummy(30)} />
        </Suspense>
        {isOpenPreview && (
          <div className={styles.preview}>
            <Suspense fallback={"이벤트를 불러오는데 실패했어요😰"}>
              <ProductPreviewOrganism />
            </Suspense>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
