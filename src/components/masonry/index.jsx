import Image from 'next/image';
import React from 'react';
import styles from './masonry.module.css';

const Masonry = ({ columns }) => {
  const girdPictures = [
    { img: '/images/01-team.jpg', spaceRow: '1/2', spaceColumn: '1/2' },
    { img: '/images/02-team.jpg', spaceRow: '1/3', spaceColumn: '2/3' },
    { img: '/images/03-team.jpg', spaceRow: '1/2', spaceColumn: '3/4' },
    { img: '/images/04-team.jpg', spaceRow: '2/4', spaceColumn: '1/2' },
    { img: '/images/05-team.jpg', spaceRow: '3/6', spaceColumn: '2/3' },
    { img: '/images/10-team.png', spaceRow: '2/4', spaceColumn: '3/4' },
    { img: '/images/08-team.jpg', spaceRow: '4/6', spaceColumn: '1/2' },
    { img: '/images/06-team.jpg', spaceRow: '4/6', spaceColumn: '3/4' },
    { img: '/images/footer.jpg', spaceRow: '6/8', spaceColumn: '1/2' },
    { img: '/images/07-team.jpg', spaceRow: '6/8', spaceColumn: '2/4' },
  ];
  return (
    <section className={`siteSection ${styles.masonrySection}`}>
      <div
        className={`container ${styles.masonryContainer}`}
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {girdPictures.map((img, i) => (
          <div
            key={typeof window !== 'undefined' ? window.crypto.randomUUID() : i}
            className={`${styles.innerImgMasonry}`}
            style={{
              gridColumn:
                img.spaceColumn !== 'normal' ? img.spaceColumn : 'initial',
              gridRow: img.spaceRow !== 'normal' ? img.spaceRow : 'initial',
            }}>
            <Image src={img.img} alt="" fill className={styles.imgMasonry} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Masonry;
