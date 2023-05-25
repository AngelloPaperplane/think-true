import Image from 'next/image';
import React, { useEffect } from 'react';
import styles from './yellow-text-img.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const YellowTextImg = ({ text, yellowText, image }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={`siteSection ${styles.yellowTextImgSection}`}>
      <div className={`container ${styles.yellowTextImgContainer}`}>
        {text && (
          <p
            className={styles.topText}
            data-aos="fade-down"
            data-aos-duration="1900"
            data-aous-delay="0">
            {text}
          </p>
        )}

        <div
          className={`flex j-c a-e ${styles.wrapperItems}`}
          data-aos="fade-right"
          data-aos-duration="1900"
          data-aous-delay="0">
          <p className={styles.sideYellowText}>{yellowText}</p>

          <div
            className={styles.wrapperSideImg}
            data-aos="fade-left"
            data-aos-duration="1900"
            data-aous-delay="0">
            <Image src={image} alt="" fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default YellowTextImg;
