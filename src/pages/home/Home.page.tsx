import React from "react";
import HeaderOrganism from "src/components/organisms/header/Header.organism";
import styles from "./Home.page.module.scss";

const HomePage = () => {
  return (
    <div className={styles.wrap}>
      <HeaderOrganism />
    </div>
  );
};

export default HomePage;
