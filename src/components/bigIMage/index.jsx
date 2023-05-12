import React from 'react';
import styles from './big-image.module.css';

const BigImage = ({ image, text }) => {
  return (
    <section
      className={`bg-cv siteSection ${styles.bigImageSection}`}
      style={{ backgroundImage: `url(${image})` }}>
      <div className={`container ${styles.bigImgContainer}`}>
        {text && <h2 className={styles.textBigImg}>{text}</h2>}
        <div className={styles.ballLine}>
          <div className={styles.ball}></div>
        </div>
      </div>
    </section>
  );
};

export default BigImage;
