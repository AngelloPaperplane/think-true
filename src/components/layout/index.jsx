import { ThinkTrue } from '@/context/ThinkTrueContext';
import React, { useContext } from 'react';
import Header from '../header';
import styles from './layout.module.css';

const Layout = ({ children }) => {
  const { Aleo } = useContext(ThinkTrue);
  const mainMenu = children.props.data ? children.props.data.menu : false;
  const header_class = children.props.data ? children.props.data.hero.colorMenu : '';
  return (
    <>
      <main className={`${styles.siteMain} ${Aleo.className}`}>
        <Header mainMenu={mainMenu} headerClass={header_class} />
        {children}
      </main>
    </>
  );
};

export default Layout;
