import React from "react";
import Item from "./Item";
import styles from "./ProductItemsOrganism.module.scss";

export interface ProductItemProps {
  key: string;
  src: string;
  itemName: string;
  date: string;
}

interface Props {
  items: ProductItemProps[];
}

const ProductItemsOrganism = ({ items }: Props) => {
  return (
    <div className={styles.wrap}>
      {items?.map(({ key, src, itemName, date }) => (
        <Item
          key={key}
          productId={key}
          src={src}
          itemName={itemName}
          date={date}
        />
      ))}
    </div>
  );
};

export default ProductItemsOrganism;
