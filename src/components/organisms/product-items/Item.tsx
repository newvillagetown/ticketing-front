import React from "react";
import ImgAtom from "src/components/atoms/img/ImgAtom";
import styles from "./Item.module.scss";
import useProductRecoil from "src/hooks-recoil/useProductRecoil";

interface Props {
  productId: string;
  src: string;
  itemName: string;
  date: string;
}

const Item = ({ productId, src, itemName, date }: Props) => {
  const { selectedItemKey, setSelectedItemKey, isOpenPreview } =
    useProductRecoil();

  const handleItemClick = () => {
    if (selectedItemKey === productId) {
      setSelectedItemKey("");
    } else {
      setSelectedItemKey(productId);
    }
  };

  return (
    <button type="button" className={styles.wrap} onClick={handleItemClick}>
      <span className={styles.img}>
        <ImgAtom src={src} fill={true} alt="" />
      </span>
      <span className={styles.date}>{date}</span>
      <strong>{itemName}</strong>
      <p>{productId}</p>
    </button>
  );
};

export default Item;
