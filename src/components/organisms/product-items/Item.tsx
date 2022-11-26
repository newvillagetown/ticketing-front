import React from "react";
import ImgAtom from "src/components/atoms/img/Img.atom";
import styles from "./Item.module.scss";

interface Props {
  src: string;
  itemName: string;
  date: string;
  onClick(): void;
}

const Item = ({ src, itemName, date, onClick }: Props) => {
  return (
    <button type="button" className={styles.wrap} onClick={onClick}>
      <span className={styles.img}>
        <ImgAtom src={src} fill={true} alt="" />
      </span>
      <span className={styles.date}>{date}</span>
      <strong>{itemName}</strong>
    </button>
  );
};

export default Item;
