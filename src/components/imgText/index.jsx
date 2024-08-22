// import DOMPurify from 'dompurify';
import Image from 'next/image';
import React, { useEffect } from 'react';
import styles from './img-text.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

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
            data-aos-duration="600"
            data-aous-delay="0"
            className={styles.wrapperTextBlock}
            dangerouslySetInnerHTML={{
              __html: content.text,
            }}></div>
          {content.email_address && content.email_address !== '' && (
            <div
              className={styles.line}
              data-aos="fade-up"
              data-aos-duration="600"
              data-aous-delay="0">
              <div className={styles.ball}></div>
              <Link
                href={`mailto:${content.email_address.trim()}`}
                className={`news ${styles.textBallLine}`}>
                {content.email_label}
              </Link>
            </div>
          )}
        </div>
        <div
          className={styles.imgBlock}
          data-aos="fade-left"
          data-aos-duration="600"
          data-aous-delay="0">
          <Image
            src={content.img.large}
            fill
            alt={content.img.alt}
            className={styles.innerImgBlock}
          />
        </div>
      </div>
    </section>
  );
};

export default ImgText;
