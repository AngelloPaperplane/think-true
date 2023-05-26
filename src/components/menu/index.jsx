import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './menu.module.css';
import { useRouter } from 'next/router';
import { gsap } from 'gsap';

const Menu = ({ menuOpened, setMenuOpened }) => {
  const [isOpened, setIsOpened] = useState(false);
  const router = useRouter();
  const { pathname } = router;
  useEffect(() => {
    setIsOpened(menuOpened);
    const tl = gsap.timeline({});
    tl.from(
      `.${styles.itemName}`,
      0.8,
      {
        transform: 'translateX(-50%)',
        // ease: 'Power2.easeIn',
      },
      '<'
    );
  }, [menuOpened]);
  useEffect(() => {}, []);
  return (
    <>
      <div className={styles.overlayMenu}>
        <svg className={styles.svgNode} viewBox="0 0 1000 1000">
          <path className="pathNode" d="M0 2S175 1 500 1s500 1 500 1V0H0Z" />
        </svg>
      </div>
      <div className={`${styles.wrapperMenu} ${isOpened ? styles.active : ''}`}>
        <div className={`container ${styles.containerMenu}`}>
          <ul className={styles.ulMenu}>
            <li className={styles.itemMenu}>
              <p className={`news bold uppercase ${styles.itemName}`}>Agency</p>
              <ul className={styles.innerUlItemMenu}>
                <li
                  className={`${styles.innerItemMenu} news`}
                  onClick={() => setMenuOpened(false)}>
                  <Link href={'/about-us'}>ABOUT</Link>
                </li>
                {/* <li
                className={`${styles.innerItemMenu} news`}
                onClick={() => setMenuOpened(false)}>
                PHILOSOPHY
              </li> */}
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
                  <Link href={'/jobs'}>JOBS</Link>
                </li>
              </ul>
            </li>
            <li className={styles.itemMenu}>
              <p
                className={`news bold uppercase ${styles.itemName}`}
                onClick={() => setMenuOpened(false)}>
                <Link href={'/our-work'}>OUR WORK</Link>
              </p>
            </li>
            {/* <li className={styles.itemMenu}>
              <p
                className={`news bold uppercase ${styles.itemName}`}
                onClick={() => setMenuOpened(false)}>
                NEWS
              </p>
            </li> */}
            <li className={styles.itemMenu}>
              <p
                className={`news bold uppercase ${styles.itemName}`}
                onClick={() => setMenuOpened(false)}>
                <Link href={'/contact'}>CONTACT</Link>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
