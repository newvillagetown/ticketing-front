import React from "react";
import styles from "./Header.organism.module.scss";
import LinkAtom, { LinkTarget } from "src/components/atoms/link/Link.atom";

const HeaderOrganism = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <LinkAtom href="/" target={LinkTarget.Self}>
          <h1 className={styles.title}>JoyTicket</h1>
        </LinkAtom>
        <div className={styles.profile_area}>
          <LinkAtom
            href="https://dev-ticketing.breathings.net/google/signin"
            className={styles.login}
          >
            <span className={styles.text}>Sign in</span>
          </LinkAtom>
        </div>
      </div>
    </div>
  );
};

export default HeaderOrganism;
