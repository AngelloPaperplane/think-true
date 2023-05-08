import Link from 'next/link';
import React from 'react';
import styles from './menu.module.css';
import { useRouter } from 'next/router';

const Menu = ({ setMenuOpened }) => {
  const router = useRouter();
  const {pathname} = router;
  return (
    <div className={styles.wrapperMenu}>
      <div className={`container ${styles.containerMenu}`}>
        <ul className={styles.ulMenu}>
          <li className={styles.itemMenu}>
            <p
              className={`news bold uppercase ${styles.itemName}`}
              onClick={() => setMenuOpened(false)}>
              Agency
            </p>
            <ul className={styles.innerUlItemMenu}>
              <li
                className={`${styles.innerItemMenu} news`}
                onClick={() => setMenuOpened(false)}>
                <Link href={'/about-us'}>ABOUT</Link>
              </li>
              <li
                className={`${styles.innerItemMenu} news`}
                onClick={() => setMenuOpened(false)}>
                PHILOSOPHY
              </li>
              <li
                className={`${styles.innerItemMenu} news`}
                onClick={() => setMenuOpened(false)}>
                <Link href={'/our-team'}>TEAM</Link>
              </li>
              <li
                className={`${styles.innerItemMenu} news`}
                onClick={() => setMenuOpened(false)}>
                <Link href={'/what-we-do'}>SERVICES</Link>
              </li>
              <li
                className={`${styles.innerItemMenu} news`}
                onClick={() => setMenuOpened(false)}>
                JOBS
              </li>
            </ul>
          </li>
          <li className={styles.itemMenu}>
            <p
              className={`news bold uppercase ${styles.itemName}`}
              onClick={() => setMenuOpened(false)}>
              OUR WORK
            </p>
          </li>
          <li className={styles.itemMenu}>
            <p
              className={`news bold uppercase ${styles.itemName}`}
              onClick={() => setMenuOpened(false)}>
              NEWS
            </p>
          </li>
          <li className={styles.itemMenu}>
            <p
              className={`news bold uppercase ${styles.itemName}`}
              onClick={() => setMenuOpened(false)}>
              CONTACT
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
