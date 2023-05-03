import React, { useState } from "react";
import Menu from "../menu";
import styles from "./header.module.css";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <>
      <header
        className={`${styles.siteHeader} ${
          menuOpened ? styles.activeMenu : ""
        }`}
      >
        <div className={`container flex j-b a-c ${styles.containerHeader}`}>
          <div className={`${styles.siteLogo} bg-ct`}></div>
          <div
            className={`${styles.burger} bg-ct `}
            onClick={() => setMenuOpened(!menuOpened)}
          ></div>
        </div>
      </header>
      {menuOpened && <Menu setMenuOpened={setMenuOpened}/>}
    </>
  );
};

export default Header;
