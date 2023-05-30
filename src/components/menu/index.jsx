import Link from 'next/link';
import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './menu.module.css';
import { useRouter } from 'next/router';
import { gsap } from 'gsap';
import { ThinkTrue } from '@/context/ThinkTrueContext';

const Menu = ({ menuOpened, setMenuOpened }) => {
  const [isOpened, setIsOpened] = useState(false);
  const router = useRouter();
  const { pathname } = router;
  const { setPageLoaded } = useContext(ThinkTrue);
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
  const changePath = () => {
    setPageLoaded(false);
    setTimeout(() => {
      setMenuOpened(false);
    }, 3000);
  };
  return (
    <>
      <div className={`${styles.wrapperMenu} ${isOpened ? styles.active : ''}`}>
        <div className={`container ${styles.containerMenu}`}>
          <ul className={styles.ulMenu}>
            <li className={styles.itemMenu}>
              <p className={`news bold uppercase ${styles.itemName}`}>Agency</p>
              <ul className={styles.innerUlItemMenu}>
                <li
                  className={`${styles.innerItemMenu} news`}
                  onClick={() => changePath()}>
                  {pathname !== '/about-us' && (
                    <Link href={'/about-us'}>ABOUT</Link>
                  )}
                  {pathname === '/about-us' && 'ABOUT'}
                </li>
                {/* <li
                className={`${styles.innerItemMenu} news`}
                onClick={() => changePath()}>
                PHILOSOPHY
              </li> */}
                <li
                  className={`${styles.innerItemMenu} news`}
                  onClick={() => changePath()}>
                  <Link href={'/our-team'}>TEAM</Link>
                </li>
                <li
                  className={`${styles.innerItemMenu} news`}
                  onClick={() => changePath()}>
                  
                  {pathname !== '/what-we-do' && (
                    <Link href={'/what-we-do'}>SERVICES</Link>
                  )}
                  {pathname === '/what-we-do' && 'SERVICES'}
                </li>
                <li
                  className={`${styles.innerItemMenu} news`}
                  onClick={() => changePath()}>
                  <Link href={'/jobs'}>JOBS</Link>
                </li>
              </ul>
            </li>
            <li className={styles.itemMenu}>
              <p
                className={`news bold uppercase ${styles.itemName}`}
                onClick={() => changePath()}>
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
                onClick={() => changePath()}>
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
