import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Menu from '../menu';
import styles from './header.module.css';
import { useRouter } from 'next/router';

const Header = () => {

  const [menuOpened, setMenuOpened] = useState(false);
  const [hideMenu, setHideMenu] = useState(true);
  const router = useRouter();
  const { pathname } = router;

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

  return (
    <>
      <header
        className={`${styles.siteHeader} ${
          menuOpened ? styles.activeMenu : ''
        }`}>
        <div className={`container flex j-b a-c ${styles.containerHeader}`}>
          <div
            className={`${styles.siteLogo} bg-ct`}
            onClick={() => setMenuOpened(false)}>
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
