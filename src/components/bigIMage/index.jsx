import React, { useEffect } from 'react';
import styles from './big-image.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BigImage = ({ image, text, dataImage }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  if (dataImage) {
    const { image, text } = dataImage;
    return (
      <section
        className={`bg-cv siteSection ${styles.bigImageSection}`}
        style={{ backgroundImage: `url(${image['super-large']})` }}>
        <div className={`container ${styles.bigImgContainer}`}>
          {text && (
            <h2
              className={styles.textBigImg}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aous-delay="0"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          )}
          <div className={styles.ballLine}>
            <div className={styles.ball}></div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section
      className={`bg-cv siteSection ${styles.bigImageSection}`}
      style={{ backgroundImage: `url(${image})` }}>
      <div className={`container ${styles.bigImgContainer}`}>
        {text && (
          <h2
            className={styles.textBigImg}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aous-delay="0">
            {text}
          </h2>
        )}
        <div className={styles.ballLine}>
          <div className={styles.ball}></div>
        </div>
      </div>
    </section>
  );
};

export default BigImage;
