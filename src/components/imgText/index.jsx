// import DOMPurify from 'dompurify';
import Image from 'next/image';
import React, { useEffect } from 'react';
import styles from './img-text.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ImgText = ({ content }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className={`siteSection ${styles.imgTextSection} ${
        styles[content.order]
      }`}>
      <div className={`container flex j-c a-c ${styles.imgTextContainer}`}>
        <div className={styles.textBlock}>
          <div
            data-aos="fade-right"
            data-aos-duration="900"
            data-aous-delay="0"
            className={styles.wrapperTextBlock}
            dangerouslySetInnerHTML={{
              __html: content.text,
            }}></div>
          <div
            className={styles.line}
            data-aos="fade-up"
            data-aos-duration="900"
            data-aous-delay="0">
            <div className={styles.ball}></div>
            <p className={`news ${styles.textBallLine}`}>EMAIL TO HR</p>
          </div>
        </div>
        <div
          className={styles.imgBlock}
          data-aos="fade-left"
          data-aos-duration="900"
          data-aous-delay="0">
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
