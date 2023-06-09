import Link from 'next/link';
import React, { useContext, useEffect, useRef, useState } from 'react';
import Menu from '../menu';
import styles from './header.module.css';
import { useRouter } from 'next/router';
import { ThinkTrue } from '@/context/ThinkTrueContext';

const Header = ({ mainMenu }) => {
  console.log(mainMenu);
  const { setPageLoaded } = useContext(ThinkTrue);
  const [menuOpened, setMenuOpened] = useState(false);
  const [hideMenu, setHideMenu] = useState(true);
  const [isInHero, setIsInHero] = useState(true);
  const router = useRouter();
  const { pathname } = router;
  const header = useRef(null);

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
    const switchHeader = () => {
      if (!header.current.classList.contains(styles.lightHeader)) {
        if (window.scrollY >= 50) {
          setIsInHero((prev) => (prev = false));
        }
      }
      if (header.current.classList.contains(styles.lightHeader)) {
        if (window.scrollY <= 50) {
          setIsInHero((prev) => (prev = true));
        }
      }
    };
    window.addEventListener('scroll', switchHeader);
    return () => {
      window.removeEventListener('scroll', switchHeader);
    };
  }, []);

  return (
    <>
      <header
        ref={header}
        className={`${styles.siteHeader} ${
          !isInHero ? styles.lightHeader : ''
        }  ${menuOpened ? styles.activeMenu : ''} `}>
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
        <Menu
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
          menuData={mainMenu}
        />
      )}
    </>
  );
};

export default Header;
