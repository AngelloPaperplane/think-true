import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import styles from './menu.module.css';
import { useRouter } from 'next/router';
import { gsap } from 'gsap';
import { ThinkTrue } from '@/context/ThinkTrueContext';

const Menu = ({ menuOpened, setMenuOpened, menuitems }) => {
  // console.log(menuitems);
  const [isOpened, setIsOpened] = useState(false);
  const router = useRouter();
  const { pathname } = router;
  // console.log(pathname);
  // console.log(menuitems);
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
            {menuitems.map((item, i) => (
              <li
                className={`${styles.itemMenu} ${styles[item.color]}`}
                key={`itemmenu${i}`}>
                {item.subitems && item.subitems.length > 0 ? (
                  <>
                    <p className={`news uppercase ${styles.itemName}`}>
                      {item.label}
                    </p>
                    <ul className={styles.innerUlItemMenu}>
                      {item.subitems.map((subitem, j) => (
                        <li
                          key={`subitemmenu${j}`}
                          className={`${styles.innerItemMenu} news`}
                          onClick={() => changePath()}>
                          {pathname !== `${subitem.link}` && (
                            <Link href={`/${subitem.link.split('/')[3]}`}>
                              {subitem.label}
                            </Link>
                          )}
                          {pathname === `${subitem.link}` && subitem.label}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <p
                    className={`news  uppercase ${styles.itemName}`}
                    onClick={() => changePath()}>
                    {pathname !== `${item.link}` && (
                      <Link href={item.link}>{item.label}</Link>
                    )}
                    {pathname === `${item.link}` && item.label}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
