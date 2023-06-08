import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import Menu from '../menu';
import styles from './header.module.css';
import { useRouter } from 'next/router';
import { ThinkTrue } from '@/context/ThinkTrueContext';

const Header = () => {
  const { setPageLoaded } = useContext(ThinkTrue);
  const [menuOpened, setMenuOpened] = useState(false);
  const [hideMenu, setHideMenu] = useState(true);
  // const [isInHero, setIsInHero] = useState(true);
  const router = useRouter();
  const { pathname } = router;

  const changePath = () => {
    setPageLoaded(false);
    setTimeout(() => {
      setMenuOpened(false);
    }, 3000);
  };

  useEffect(() => {
    let clearTimeOut;
    if (menuOpened) {
      setHideMenu(false);
    } else {
      clearTimeOut = setTimeout(() => {
        setHideMenu(true);
      }, 1000);
    }
    return () => {
      // 👇️ clear timeout when the component unmounts
      clearTimeout(clearTimeOut);
    };
  }, [menuOpened]);

  useEffect(() => {
    // const switchHeader = () => {
    //   if (isInHero) {
    //     if (window.scrollY >= window.innerHeight / 2) {
    //       setIsInHero(false);
    //     }
    //   }
    //   if (!isInHero) {
    //     if (window.scrollY <= window.innerHeight / 2) {
    //       setIsInHero(true);
    //     }
    //   }
    // };
    // window.addEventListener('scroll', switchHeader);
    // return () => {
    //   window.removeEventListener('scroll', switchHeader);
    // };
  }, []);

  return (
    <>
      <header
        className={`${styles.siteHeader} ${
          menuOpened ? styles.activeMenu : ''
        } `}>
        <div className={`container flex j-b a-c ${styles.containerHeader}`}>
          <div
            className={`${styles.siteLogo} bg-ct`}
            onClick={() => changePath()}>
            {pathname !== '/' && <Link href="/"></Link>}
          </div>

          <div
            className={`${styles.burger} bg-ct `}
            onClick={() => setMenuOpened(!menuOpened)}></div>
        </div>
      </header>
      {!hideMenu && (
        <Menu menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
      )}
    </>
  );
};

export default Header;
