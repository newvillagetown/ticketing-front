import React, { useState } from "react";
import styles from "./ProductHeader.organism.module.scss";
import InputAtom from "src/components/atoms/input/Input.atom";
import { PRODUCT_SEARCH_INPUT_ID } from "src/config/dom-id";
import { ViewType } from "src/config/enum";

interface Props {
  viewType: ViewType;
  onClickViewBtn(): void;
}

const ProductHeaderOrganism = ({ viewType, onClickViewBtn }: Props) => {
  const [inputValue, setInputValue] = useState<string>("");

  const onChangeInput = (ev: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(ev.target.value);
  };

  return (
    <div className={styles.wrap}>
      <label htmlFor={PRODUCT_SEARCH_INPUT_ID} className="blind">
        검색 창
      </label>
      <InputAtom
        id={PRODUCT_SEARCH_INPUT_ID}
        value={inputValue}
        type="text"
        placeholder="검색할 단어를 입력해주세요."
        onChange={onChangeInput}
      />

      <div>
        <button type="button" onClick={onClickViewBtn}>
          필터
        </button>
        <button type="button" onClick={onClickViewBtn}>
          카드뷰
        </button>
        <button type="button">리스트뷰</button>
      </div>
    </div>
  );
};

export default ProductHeaderOrganism;
