import Link from "next/link";
import React from "react";
import styles from "./menu.module.css";

const Menu = ({setMenuOpened}) => {
  return (
    <div className={styles.wrapperMenu}>
      <div className={`container ${styles.containerMenu}`}>
        <ul className={styles.ulMenu}>
          <li className={styles.itemMenu}>
            <p className={`news bold uppercase ${styles.itemName}`} onClick={() => setMenuOpened(false)}>Agency</p>
            <ul className={styles.innerUlItemMenu}>
              <li className={`${styles.innerItemMenu} news`} onClick={() => setMenuOpened(false)}>ABOUT</li>
              <li className={`${styles.innerItemMenu} news`} onClick={() => setMenuOpened(false)}>PHILOSOPHY</li>
              <li className={`${styles.innerItemMenu} news`} onClick={() => setMenuOpened(false)}>TEAM</li>
              <li className={`${styles.innerItemMenu} news`} onClick={() => setMenuOpened(false)}>SERVICES</li>
              <li className={`${styles.innerItemMenu} news`} onClick={() => setMenuOpened(false)}>JOBS</li>
            </ul>
          </li>
          <li className={styles.itemMenu}>
            <p className={`news bold uppercase ${styles.itemName}`} onClick={() => setMenuOpened(false)}><Link href={'/our-team'}>OUR WORK</Link></p>
          </li>
          <li className={styles.itemMenu}>
            <p className={`news bold uppercase ${styles.itemName}`} onClick={() => setMenuOpened(false)}>NEWS</p>
          </li>
          <li className={styles.itemMenu}>
            <p className={`news bold uppercase ${styles.itemName}`} onClick={() => setMenuOpened(false)}>CONTACT</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
