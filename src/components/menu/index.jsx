import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './menu.module.css';
import { useRouter } from 'next/router';
import { gsap } from 'gsap';

const Menu = ({ setMenuOpened }) => {
  const [isOpened, setIsOpened] = useState(false);
  const router = useRouter();
  const { pathname } = router;
  console.log(pathname);
  useEffect(() => {
    // setIsOpened(true);
    // const path = document.querySelector('.pathNode');
    // console.log(path);
    // const tl = gsap.timeline({ paused: true });
    // gsap.set(`.${styles.wrapperMenu}`, { visibility: 'hidden', opacity:  });
    // const start = 'M0 502S175 272 500 272s500 230 500 230V0H0Z';
    // const end = 'M0,10055175,995,500,995s500,5,500,5V0H0Z';
    // const power2 = 'power2.inOut';
    // tl.to(
    //   path,
    //   0.8,
    //   {
    //     attr: {
    //       d: start,
    //     },
    //     ease: 'Power2.easeIn',
    //   },
    //   '<'
    // ).to(
    //   path,
    //   0.8,
    //   {
    //     attr: {
    //       d: end,
    //     },
    //     ease: 'Power2.easeIn',
    //   },
    //   '-=0.5'
    // );
    // tl.to(
    //   `-${styles.wrapperMenu}`,
    //   1,
    //   {
    //     visibility: 'visible',
    //   },
    //   '-=0.5'
    // );
  }, []);
  return (
    <>
      <div className={styles.overlayMenu}>
        <svg className={styles.svgNode} viewBox="0 0 1000 1000">
          <path className="pathNode" d="M0 2S175 1 500 1s500 1 500 1V0H0Z" />
        </svg>
      </div>
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
