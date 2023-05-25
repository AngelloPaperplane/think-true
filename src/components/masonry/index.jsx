import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import styles from './masonry.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Masonry = ({ columns, gridPictures, heightColumn, layout }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={`siteSection ${styles.masonrySection}`}>
      <div
        className={`container ${styles.masonryContainer}`}
        style={{
          gridAutoRows: `${heightColumn ?? 30}vh`,
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
        }}>
        {gridPictures.map((img, i) => (
          <div
            key={typeof window !== 'undefined' ? window.crypto.randomUUID() : i}
            className={`${styles.innerImgMasonry} ${
              layout === 'ourWork' ? styles.ourWorkLayout : ''
            }`}
            style={{
              gridColumn:
                img.spaceColumn !== 'normal' ? img.spaceColumn : 'initial',
              gridRow: img.spaceRow !== 'normal' ? img.spaceRow : 'initial',
            }}
            data-aos="fade-up"
            data-aos-duration="900"
            data-aous-delay="0"
            data-aos-offset="-100">
            {img.content && (
              <>
                <Link
                  href={`/work/${img.content.link}`}
                  className={styles.linkDetailWork}></Link>
                <div className={styles.contentImgGrid}>
                  <h2 className={`news ${styles.titleGridImg}`}>
                    {img.content.title}{' '}
                    <span
                      className={styles.line}
                      style={{ backgroundColor: img.content.color }}>
                      <span
                        className={styles.ball}
                        style={{ backgroundColor: img.content.color }}></span>
                    </span>
                  </h2>
                  <h3
                    className={`news ${styles.subTitleGridImg}`}
                    style={{ color: img.content.color }}>
                    {img.content.subtitle}
                  </h3>
                </div>
              </>
            )}

            <Image
              src={img.img.large ? img.img.large : img.img}
              alt={img.img.alt ? img.img.alt : ''}
              fill
              className={styles.imgMasonry}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Masonry;
