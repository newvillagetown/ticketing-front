import React from "react";
import LinkAtom from "src/components/atoms/link/Link.atom";
import styles from "./Home.page.module.scss";

const HomePage = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        컨텐츠
        <LinkAtom href="/product" className={styles.link}>
          <span className={styles.text}>예매하러 가기</span>
        </LinkAtom>
      </div>
    </div>
  );
};

export default HomePage;
