import { ThinkTrue } from '@/context/ThinkTrueContext';
import React, { useContext } from 'react';
import Header from '../header';
import styles from './layout.module.css';

const Layout = ({ children }) => {
  const { Aleo } = useContext(ThinkTrue);
  return (
    <>
      <main className={`${styles.siteMain} ${Aleo.className}`}>
        <Header />
        {children}
      </main>
    </>
  );
};

export default Layout;
