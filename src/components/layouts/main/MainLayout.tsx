import React, { ReactNode } from "react";
import HeaderOrganism from "src/components/organisms/header/HeaderOrganism";
import styles from "./MainLayout.module.scss";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <HeaderOrganism />
      <main className={styles.children}>{children}</main>
    </>
  );
};

export default MainLayout;
