import React, { useEffect, useRef, useState } from 'react';
import styles from './about-us-content.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import ImgTextB from '@/components/imgTextB';

const AboutUsContent = ({ whatdo, whatdo_new }) => {

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const [maxHeight, setMaxHeight] = useState('auto');

  useEffect(() => {
    AOS.init();

    const resizeHeights = () => {
      
      if (section1Ref.current) section1Ref.current.style.height = 'auto';
      if (section2Ref.current) section2Ref.current.style.height = 'auto';

      setTimeout(() => {
        const height1 = section1Ref.current ? section1Ref.current.offsetHeight : 0;
        const height2 = section2Ref.current ? section2Ref.current.offsetHeight : 0;
    
        const highest = Math.max(height1, height2);
        
        if (highest > 0) {
          setMaxHeight(`${highest}px`);
        }
      }, 50);
    };

    resizeHeights();

    window.addEventListener('resize', resizeHeights);
    return () => window.removeEventListener('resize', resizeHeights);
  }, [whatdo, whatdo_new]);

  const exactHeightStyle = { height: maxHeight };

  return (
    <div className={`container ${styles.aboutContainer}`}>
      <h2
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="0"
        className={` ${styles.titleSection}`}
        dangerouslySetInnerHTML={{ __html: whatdo?.title }}
      />

      {whatdo && whatdo.sideText !== '' && (
        <div
          ref={section1Ref}
          style={exactHeightStyle}
          className={`${styles.contentContainer}`}
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="0">
          <div
            className={`${styles.imgPanel}`}
            style={{
              backgroundImage: `${`url(${
                whatdo.image ? whatdo.image['super-large'] : ''
              })`}`,
            }}
          />

          <div
            className={`${styles.textContainer}`}
            dangerouslySetInnerHTML={{ __html: whatdo.sideText }}
          />
        </div>
      )}

      {whatdo_new && whatdo_new.sideText !== '' && (
        <div
          ref={section2Ref}
          style={exactHeightStyle}
          className={`${styles.contentContainerLeft}`}
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="0">
          <div
            className={`${styles.imgPanelLeft}`}
            style={{
              backgroundImage: `${`url(${
                whatdo.image ? whatdo_new.image['super-large'] : ''
              })`}`,
            }}
          />

          <div
            className={`${styles.textContainerLeft}`}
            dangerouslySetInnerHTML={{ __html: whatdo_new.sideText }}
          />
        </div>
      )}
    </div>
  );
};

export default AboutUsContent;
