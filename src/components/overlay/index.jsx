import useSessionStorage from '@/hooks/useSessionStorage';
import local from 'next/font/local';
import React, { useEffect, useRef, useState } from 'react';
import styles from './overlay.module.css';

const Overlay = () => {
  const words = ['WE', 'SEE', 'THE', 'GAP'];
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);
  // const [count, setCount] = useState(0);
  const [isOnline, setIsOnline] = useState(false);
  const [showText, setShowText] = useState(false);

  const textOverlayContainer = useRef(null);

  useEffect(() => {
    // console.log(localStorage);

    if (localStorage.getItem('date')) {
      const firstDate = localStorage.getItem('date');
      const now = Date.now();
      if (now < Number(firstDate) + 24 * 60 * 60 * 1000) {
        setIsOnline(true);
        return;
      }
      localStorage.removeItem('date');
    }

    localStorage.setItem('date', Date.now());

    if (isOnline) {
      return;
    }

    sessionStorage.setItem('isOnline', true);

    setShowText(true);

    setTimeout(() => {
      setIndex(1);
      setTimeout(() => {
        setIndex(2);
        setTimeout(() => {
          setIndex(3);
          setTimeout(() => {
            setShow(false);
          }, 350);
        }, 350);
      }, 350);
    }, 350);
  }, []);

  if (isOnline) {
    return <></>;
  }
  return (
    <div
      className={`${index % 2 !== 0 ? styles.grayBg : ''} ${
        !show ? styles.hideDiv : ''
      } ${styles.overlayContainer} ${!showText ? styles.transparentText : ''}`}>
      <span
        ref={textOverlayContainer}
        className={`news ${styles.textOverlayContainer}`}>
        {words[index]}
      </span>
    </div>
  );
};

export default Overlay;
