import React, { useEffect, useRef, useState } from 'react';
import styles from './overlay.module.css';

const Overlay = () => {
  const words = ['WE', 'SEE', 'THE', 'GAP'];
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);
  const textOverlayContainer = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      setIndex(1);
      setTimeout(() => {
        setIndex(2);
        setTimeout(() => {
          setIndex(3);
          setTimeout(() => {
            setShow(false);
          }, 700);
        }, 700);
      }, 700);
    }, 700);
  }, []);
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
