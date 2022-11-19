import React, { ReactNode } from "react";
import HeaderOrganism from "src/components/organisms/header/Header.organism";
import styles from "./main.layout.module.scss";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  console.log(children, 832783728937);
  return (
    <>
      <HeaderOrganism />
      <main className={styles.children}>{children}</main>
    </>
  );
};

export default MainLayout;
