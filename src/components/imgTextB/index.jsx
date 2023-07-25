import React, { useEffect } from 'react';
import styles from './what-we-do.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ImgTextB = ({
  title,
  subtitle,
  color,
  topText,
  image,
  withList,
  sideText,
  contentData, // Quitar los otros, este es el que va a quedar....
}) => {
  const router = useRouter();
  const { pathname } = router;
  useEffect(() => {
    AOS.init();
  }, []);
  if (contentData) {
    const {
      title,
      subtitle,
      color,
      topText,
      image,
      withList,
      list,
      link,
      buttoncolor,
      buttonlabel,
      sideText,
      position_image,
    } = contentData;
    return (
      <section
        className={`siteSection ${styles.whatWeDoSection} ${
          pathname === '/about-us' ? styles.agencyAbout : ''
        }`}>
        <div className={`container ${styles.whatWeDoCo}`}>
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aous-delay="0"
            className={`bg-ct ${styles.imgSection} ${styles.imgSectionMobile}`}
            style={{
              backgroundImage: `url(${image.large ? image.large : ''})`,
            }}></div>
          {title && (
            <h2
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="0"
              className={`titleSec ${styles.titleSection} news`}
              dangerouslySetInnerHTML={{ __html: title }}
            />
          )}

          {subtitle && (
            <h3
              data-aos="fade-up"
              data-aos-duration="900"
              data-aous-delay="0"
              className={`news ${styles.subtitleSection}`}
              style={{ color }}
              dangerouslySetInnerHTML={{ __html: subtitle }}
            />
          )}

          {topText && (
            <p
              data-aos="fade-up"
              data-aos-duration="900"
              data-aous-delay="0"
              className={`${styles.infoSection}`}
              dangerouslySetInnerHTML={{ __html: topText }}
            />
          )}

          <div
            className={`flex j-b ${
              position_image === 'right' && styles.reverseImage
            }  ${styles.detailsSec}`}>
            <div
              data-aos="fade-up"
              data-aos-duration="900"
              data-aous-delay="0"
              className={`bg-cv ${styles.imgSection}`}
              style={{
                backgroundImage: `url(${image.large ? image.large : ''})`,
              }}>
              {buttonlabel && link !== '' && buttonlabel !== '' && (
                <div
                  className={styles.redLine}
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aous-delay="0">
                  <div className={styles.ballRedLine}>
                    <Link
                      href={`/${link}`}
                      style={{
                        backgroundImage: `url(/icons/${buttoncolor}.png)`,
                      }}
                      className={`news ${styles.linkBallRedLine}`}>
                      {buttonlabel}
                    </Link>
                  </div>
                </div>
              )}
            </div>
            {withList && (
              <ul className={`${styles.detailsWhatWeDo}`}>
                {list.map((item, i) => (
                  <li
                    key={i}
                    className={`flex j-s a-c ${styles.itemWhatWeDo}`}
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aous-delay="0">
                    <div className={`bg-ct ${styles.line}`}>
                      <div className={`bg-ct ${styles.ballLine}`}></div>
                    </div>
                    <p className={styles.textFeature}>{item}</p>
                  </li>
                ))}
              </ul>
            )}

            {!withList && sideText && (
              <div
                className={styles.sideText}
                dangerouslySetInnerHTML={{ __html: sideText }}
                data-aos="fade-left"
                data-aos-duration="1900"
                data-aous-delay="0"></div>
            )}
          </div>
          {buttonlabel &&
            link !== '' &&
            buttonlabel !== '' &&
            pathname !== '/about-us' && (
              <div
                className={`${styles.redLine} ${styles.mobileLine}`}
                data-aos="fade-up"
                data-aos-duration="900"
                data-aous-delay="0">
                <div className={styles.ballRedLine}>
                  <Link
                    href={`/${link}`}
                    style={{
                      backgroundImage: `url(/icons/${buttoncolor}.png)`,
                    }}
                    className={`news ${styles.linkBallRedLine}`}>
                    {buttonlabel}
                  </Link>
                </div>
              </div>
            )}
        </div>
      </section>
    );
  }

  return (
    <section className={`siteSection ${styles.whatWeDoSection}`}>
      <div className={`container ${styles.whatWeDoCo}`}>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          data-aous-delay="0"
          className={`bg-cv ${styles.imgSection} ${styles.imgSectionMobile}`}
          style={{ backgroundImage: `url(${image})` }}></div>
        {title && (
          <h2
            data-aos="fade-up"
            data-aos-duration="900"
            data-aous-delay="0"
            className={`titleSec ${styles.titleSection} news`}>
            {title}
          </h2>
        )}

        {subtitle && (
          <h3
            data-aos="fade-up"
            data-aos-duration="900"
            data-aous-delay="0"
            className={`news ${styles.subtitleSection}`}
            style={{ color }}>
            {subtitle}
          </h3>
        )}

        {topText && (
          <p
            data-aos="fade-up"
            data-aos-duration="900"
            data-aous-delay="0"
            className={`${styles.infoSection}`}>
            {topText}
          </p>
        )}

        <div className={`flex j-b  ${styles.detailsSec}`}>
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aous-delay="0"
            className={`bg-cv ${styles.imgSection} `}
            style={{ backgroundImage: `url(${image})` }}>
            <div
              className={styles.redLine}
              data-aos="fade-up"
              data-aos-duration="900"
              data-aous-delay="0">
              <div className={styles.ballRedLine}></div>
            </div>
          </div>
          {withList && (
            <ul className={`${styles.detailsWhatWeDo}`}>
              <li
                className={`flex j-s a-c ${styles.itemWhatWeDo}`}
                data-aos="fade-up"
                data-aos-duration="900"
                data-aous-delay="0">
                <div className={`bg-ct ${styles.line}`}>
                  <div className={`bg-ct ${styles.ballLine}`}></div>
                </div>
                <p className={styles.textFeature}>BRAND CONSULTING</p>
              </li>
              <li
                className={`flex j-s a-c ${styles.itemWhatWeDo}`}
                data-aos="fade-up"
                data-aos-duration="900"
                data-aous-delay="0">
                <div className={`bg-ct ${styles.line}`}>
                  <div className={`bg-ct ${styles.ballLine}`}></div>
                </div>
                <p className={styles.textFeature}>AUDIENCE INSIGHTS</p>
              </li>
              <li
                className={`flex j-s a-c ${styles.itemWhatWeDo}`}
                data-aos="fade-up"
                data-aos-duration="900"
                data-aous-delay="0">
                <div className={`bg-ct ${styles.line}`}>
                  <div className={`bg-ct ${styles.ballLine}`}></div>
                </div>
                <p className={styles.textFeature}>TALENT MANAGEMENT</p>
              </li>
              <li
                className={`flex j-s a-c ${styles.itemWhatWeDo}`}
                data-aos="fade-up"
                data-aos-duration="900"
                data-aous-delay="0">
                <div className={`bg-ct line ${styles.line}`}>
                  <div className={`bg-ct ballLine ${styles.ballLine}`}></div>
                </div>
                <p className={styles.textFeature}>
                  PR CONSULTATION & ISSUE MARKETIG
                </p>
              </li>
              <li
                className={`flex j-s a-c ${styles.itemWhatWeDo}`}
                data-aos="fade-up"
                data-aos-duration="900"
                data-aous-delay="0">
                <div className={`bg-ct ${styles.line}`}>
                  <div className={`bg-ct ${styles.ballLine}`}></div>
                </div>
                <p className={styles.textFeature}>
                  GRASSROOTS MARKETING & COMMUNITY ENGAGEMENT
                </p>
              </li>
              <li
                className={`flex j-s a-c ${styles.itemWhatWeDo}`}
                data-aos="fade-up"
                data-aos-duration="900"
                data-aous-delay="0">
                <div className={`bg-ct ${styles.line}`}>
                  <div className={`bg-ct ${styles.ballLine}`}></div>
                </div>
                <p className={styles.textFeature}>CREATIVE TECHNOLOGY</p>
              </li>
              <li
                className={`flex j-s a-c ${styles.itemWhatWeDo}`}
                data-aos="fade-up"
                data-aos-duration="900"
                data-aous-delay="0">
                <div className={`bg-ct ${styles.line}`}>
                  <div className={`bg-ct ${styles.ballLine}`}></div>
                </div>
                <p className={styles.textFeature}>
                  DIGITAL CAMPAIGNS & STRATEGY
                </p>
              </li>
            </ul>
          )}
          {!withList && sideText && (
            <div
              className={styles.sideText}
              dangerouslySetInnerHTML={{ __html: sideText }}
              data-aos="fade-left"
              data-aos-duration="1900"
              data-aous-delay="0"></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImgTextB;
