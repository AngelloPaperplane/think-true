import Link from 'next/link';
import React, { useContext, useEffect, useId, useRef, useState } from 'react';
import Menu from '../menu';
import styles from './header.module.css';
import { useRouter } from 'next/router';
import { ThinkTrue } from '@/context/ThinkTrueContext';

const Header = ({ mainMenu, headerClass }) => {
  const { setPageLoaded } = useContext(ThinkTrue);
  const [menuOpened, setMenuOpened] = useState(false);
  const [hideMenu, setHideMenu] = useState(true);
  const [isInHero, setIsInHero] = useState(true);
  const router = useRouter();
  const { pathname } = router;
  const header = useRef(null);
  const burgerId = useId();

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
          setIsInHero(false);
        }
      }
      if (header.current.classList.contains(styles.lightHeader)) {
        if (window.scrollY <= 50) {
          setIsInHero(true);
        }
      }
    };
    window.addEventListener('scroll', switchHeader);
    return () => {
      window.removeEventListener('scroll', switchHeader);
    };
  }, []);

  const classesBurger = [styles.active, styles['not-active']];

  const openMenu = (close = false) => {
    console.log(close);
    const burgerIdElement = document.getElementById(burgerId);
    if (close) {
      burgerIdElement.classList.remove(styles.active);
      burgerIdElement.classList.add(styles['not-active']);
      setMenuOpened(false);
      return;
    }
    classesBurger.map((v) => burgerIdElement.classList.toggle(v));
    setMenuOpened(!menuOpened);
  };

  useEffect(() => {
    openMenu(true);
  }, [pathname]);

  return (
    <>
      <header
        ref={header}
        className={`${styles.siteHeader} ${styles[headerClass]}  ${
          !isInHero ? styles.lightHeader : ''
        }  ${menuOpened ? styles.activeMenu : ''} `}>
        <div className={`container flex j-b a-c ${styles.containerHeader}`}>
          <div
            className={`${styles.siteLogo} ${
              pathname === '/' ? styles.hideLogo : ''
            } bg-ct`}
            onClick={() => changePath()}>
            {pathname !== '/' && <Link href="/"></Link>}
          </div>

          <div
            className={`${styles.burger} bg-ct `}
            onClick={() => {
              openMenu();
            }}>
            <div
              id={burgerId}
              className={`${styles.btnBurger} ${styles['not-active']}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
      {!hideMenu && (
        <Menu
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
          menuitems={mainMenu}
        />
      )}
    </>
  );
};

export default Header;
