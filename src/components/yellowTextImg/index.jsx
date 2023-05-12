import Image from 'next/image';
import React from 'react';
import styles from './yellow-text-img.module.css';

const YellowTextImg = ({ text, yellowText, image }) => {
  return (
    <section className={`siteSection ${styles.yellowTextImgSection}`}>
      <div className={`container ${styles.yellowTextImgContainer}`}>
        {text && <p className={styles.topText}>{text}</p>}

        <div className={`flex j-c a-e ${styles.wrapperItems}`}>
          <p className={styles.sideYellowText}>{yellowText}</p>

          <div className={styles.wrapperSideImg}>
            <Image src={image} alt="" fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default YellowTextImg;
