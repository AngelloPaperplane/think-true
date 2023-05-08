import Link from 'next/link';
import React, { useState } from 'react';
import Menu from '../menu';
import styles from './header.module.css';
import { useRouter } from 'next/router';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const router = useRouter();
  const { pathname } = router;
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
      {menuOpened && <Menu setMenuOpened={setMenuOpened} />}
    </>
  );
};

export default Header;
