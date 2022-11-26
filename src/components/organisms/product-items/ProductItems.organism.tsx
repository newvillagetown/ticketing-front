import React from "react";
import Item from "./Item";
import styles from "./ProductItems.organism.module.scss";

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
          src={src}
          itemName={itemName}
          date={date}
          onClick={() => {
            console.log("hello");
          }}
        />
      ))}
    </div>
  );
};

export default ProductItemsOrganism;
