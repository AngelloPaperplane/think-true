import Image from 'next/image';
import React, { useEffect } from 'react';
import styles from './yellow-text-img.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const YellowTextImg = ({ text, yellowText, image, contentData }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  // console.log(contentData);
  if (contentData) {
    const { text, yellowText, image } = contentData;
    return (
      <section className={`siteSection ${styles.yellowTextImgSection}`}>
        <div className={`container ${styles.yellowTextImgContainer}`}>
          {text && (
            <p
              className={styles.topText}
              data-aos="fade-down"
              data-aos-duration="600"
              data-aous-delay="0"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          )}

          <div
            className={`flex j-c a-e ${styles.wrapperItems}`}
            data-aos="fade-right"
            data-aos-duration="600"
            data-aous-delay="0">
            <p
              className={styles.sideYellowText}
              dangerouslySetInnerHTML={{ __html: yellowText }}
              style={{ backgroundColor: contentData.color ?? '#faa300' }}
            />
            <div
              className={styles.wrapperSideImg}
              data-aos="fade-left"
              data-aos-duration="600"
              data-aous-delay="0">
              <Image
                className={styles.innerImg}
                src={image.large ? image.large : ''}
                alt={image.alt ? image.alt : ''}
                fill
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className={`siteSection ${styles.yellowTextImgSection}`}>
      <div className={`container ${styles.yellowTextImgContainer}`}>
        {text && (
          <p
            className={styles.topText}
            data-aos="fade-down"
            data-aos-duration="600"
            data-aous-delay="0">
            {text}
          </p>
        )}

        <div
          className={`flex j-c a-e ${styles.wrapperItems}`}
          data-aos="fade-right"
          data-aos-duration="600"
          data-aous-delay="0">
          <p className={styles.sideYellowText}>{yellowText}</p>

          <div
            className={styles.wrapperSideImg}
            data-aos="fade-left"
            data-aos-duration="600"
            data-aous-delay="0">
            <Image src={image} alt="" fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default YellowTextImg;
