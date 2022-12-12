import React from "react";
import styles from "./HeaderOrganism.module.scss";
import LinkAtom, { LinkTarget } from "src/components/atoms/link/LinkAtom";
import { loginURL } from "src/config/url.config";

const HeaderOrganism = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <LinkAtom href="/" target={LinkTarget.Self}>
          <h1 className={styles.title}>JoyTicket</h1>
        </LinkAtom>
        <div className={styles.profile_area}>
          <LinkAtom href={loginURL} className={styles.login}>
            <span className={styles.text}>Sign in</span>
          </LinkAtom>
        </div>
      </div>
    </div>
  );
};

export default HeaderOrganism;
