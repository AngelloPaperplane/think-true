import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import styles from './masonry.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const loadIsotope = () => require('isotope-layout');
let Isotope;
const Masonry = ({ columns, gridPictures, heightColumn, layout }) => {
  const isotope = useRef(null);
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    AOS.init();
    Isotope = loadIsotope();
    isotope.current = new Isotope('.filter-container', {
      itemSelector: '.filter-item', 
      layoutMode: 'masonry', 
    });
    return () => isotope.current.destroy();
  }, []);
  return (
    <section className={`siteSection ${styles.masonrySection}`}>
      <div className={`container filter-container ${styles.masonryContainer}`}>
        {gridPictures.map((img, i) => (
          <div
            key={typeof window !== 'undefined' ? window.crypto.randomUUID() : i}
            className={`${styles.innerImgMasonry} filter-item ${
              layout === 'ourWork' ? styles.ourWorkLayout : ''
            }`}
            style={{ height: '400px', width: '30%' }}
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
