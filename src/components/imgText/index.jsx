import DOMPurify from 'dompurify';
import Image from 'next/image';
import React from 'react';
import styles from './img-text.module.css';

const ImgText = ({ content }) => {
  return (
    <section
      className={`siteSection ${styles.imgTextSection} ${
        styles[content.order]
      }`}>
      <div className={`container flex j-c a-c ${styles.imgTextContainer}`}>
        <div className={styles.textBlock}>
          <div
            className={styles.wrapperTextBlock}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(content.text),
            }}></div>
          <div className={styles.line}>
            <div className={styles.ball}></div>
            <p className={`news ${styles.textBallLine}`}>EMAIL TO HR</p>
          </div>
        </div>
        <div className={styles.imgBlock}>
          <Image
            src={content.img}
            fill
            alt=""
            className={styles.innerImgBlock}
          />
        </div>
      </div>
    </section>
  );
};

export default ImgText;
