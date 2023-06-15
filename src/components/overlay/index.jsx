import React, { useEffect, useRef, useState } from 'react';
import styles from './overlay.module.css';

const Overlay = () => {
  const words = ['WE', 'SEE', 'THE', 'GAP'];
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);

  const textOverlayContainer = useRef(null);
  useEffect(() => {
    let pageView = sessionStorage.getItem('pageView');
    console.log(sessionStorage);
    console.log(sessionStorage.pageView);
    if (pageView === null) {
      console.log(pageView);
      pageView = 1;
    } else {
      pageView = Number(pageView) + 1;
    }
    sessionStorage.setItem('pageView', pageView);
    setCount(pageView);

    sessionStorage.setItem('isOnline', true);

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

  if (count > 1) {
    return <></>;
  }
  return (
    <div
      className={`${index % 2 !== 0 ? styles.grayBg : ''} ${
        !show ? styles.hideDiv : ''
      } ${styles.overlayContainer}`}>
      <span
        ref={textOverlayContainer}
        className={`news ${styles.textOverlayContainer}`}>
        {words[index]}
      </span>
    </div>
  );
};

export default Overlay;
