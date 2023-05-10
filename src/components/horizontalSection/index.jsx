import React, { useEffect, useRef } from 'react';
import styles from './horizontal-seciton.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Hero from '../hero';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const HorizontalSection = ({ blocksToIterate, type, classParent }) => {
  const scroller = useRef();
  useEffect(() => {
    const blocks = gsap.utils.toArray(
      `.siteSection-${classParent} .itemHorizontal`
    );
    console.log(blocks);
    ScrollTrigger.matchMedia({
      '(min-width: 1025px)': () => {
        const to = gsap.to(blocks, {
          xPercent: () => -100 * (blocks.length - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: scroller.current,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,

            end: () => `+=${window.innerWidth}`,
          },
        });

        // let changeBackground = (bg, parent) => {
        //   parent.classList.remove(styles.hide);
        //   gsap.to(scroller.current, {
        //     backgroundColor: bg,
        //   });
        // };

        // let blockTl;

        // blocks.forEach((block, i) => {
        //   blockTl = gsap.to(block.querySelector(".wrapperBlock"), {
        //     transform: `translateX(-${
        //       i === blocks.length - 1 ? 0 : 0
        //     }%) scale(1)`,
        //     scrollTrigger: {
        //       trigger: block.querySelector(".wrapperBlock"),
        //       containerAnimation: to,
        //       start:
        //         i === blocks.length - 1
        //           ? "-70% 0%"
        //           : i === 0
        //           ? "-40% 0%"
        //           : "top 80%",
        //       end:
        //         i === blocks.length - 1
        //           ? "100% 95%"
        //           : i === 0
        //           ? "120% 80%"
        //           : "end -50%",
        //       scrub: 3,
        //       onEnter: (e) => {
        //         changeBackground(
        //           e.trigger._gsap.target.parentElement.getAttribute("data-bg"),
        //           e.trigger._gsap.target.parentElement
        //         );
        //       },
        //       onEnterBack: (e) => {
        //         changeBackground(
        //           e.trigger._gsap.target.parentElement.getAttribute("data-bg"),
        //           e.trigger._gsap.target.parentElement
        //         );
        //       },
        //       onLeave: (e) => {
        //         e.trigger._gsap.target.parentElement.classList.add(styles.hide);
        //       },
        //       onLeaveBack: (e) => {
        //         i === blocks.length - 1 || i === 0
        //           ? ""
        //           : e.trigger._gsap.target.parentElement.classList.add(
        //               styles.hide
        //             );
        //       },
        //       // markers: i === blocks.length - 1 ? true : false
        //     },
        //   });
        // });

        return () => {
          to.kill();
          //   blocks.forEach((block, i) => {
          //     blockTl.kill();
          //   });
        };
      },
    });
    // ScrollTrigger.matchMedia({
    //   "(max-width: 1024px)": () => {
    //     let changeBackground = (bg, parent) => {
    //       parent.classList.remove(styles.hide);
    //       gsap.to(scroller.current, {
    //         backgroundColor: bg,
    //       });
    //     };

    //     let blockTl;

    //     blocks.forEach((block, i) => {
    //       blockTl = gsap.to(block.querySelector(".wrapperBlock"), {
    //         transform: `translateX(-${
    //           i === blocks.length - 1 ? 0 : 0
    //         }%) scale(1)`,
    //         scrollTrigger: {
    //           trigger: block.querySelector(".wrapperBlock"),
    //           // containerAnimation: to,
    //           start: "top 80%",
    //           end: "100% 0%",
    //           scrub: 3,
    //           onEnter: (e) => {
    //             changeBackground(
    //               e.trigger._gsap.target.parentElement.getAttribute("data-bg"),
    //               e.trigger._gsap.target.parentElement
    //             );
    //           },
    //           onEnterBack: (e) => {
    //             changeBackground(
    //               e.trigger._gsap.target.parentElement.getAttribute("data-bg"),
    //               e.trigger._gsap.target.parentElement
    //             );
    //           },
    //         },
    //       });
    //     });

    //     return () => {
    //       blocks.forEach((block, i) => {
    //         blockTl.kill();
    //       });
    //     };
    //   },
    // });
  }, []);
  return (
    <section
      className={`siteSection ${
        classParent ? `siteSection-${classParent}` : ''
      } ${styles.horizontalSection} ${
        type === 'whatWeDo' ? styles.whatWeDoSec : ''
      }`}>
      <div className={styles.horizontalContainer}>
        <div
          id="block"
          className={`${styles.wrapperScroller} wrapperScroller`}
          style={{
            width: `${blocksToIterate.length * 100}vw`,
          }}
          ref={scroller}>
          {type === 'about-1' && (
            <>
              <div className={`${styles.block} itemHorizontal`}>
                <Hero
                  image={'/images/01-about.jpg'}
                  title="ABOUT US"
                  type="secondary"
                  colorTitle="#fff"
                />
              </div>
              <div
                className={`${styles.block} ${styles.blockAfterHero} itemHorizontal`}>
                <div className={styles.afterHeroAbout}>
                  <h2 className={styles.titleAfterHeroAbout}>
                    What does it mean to Think True?
                  </h2>
                  <p className={styles.textAfterHeroAbout}>
                    There’s a gap, a gap in diversity, a gap in culture, and a
                    gap in inclusion.
                    <br /> <br />
                    Think True acknowledges that gap, and commits to
                    authenticity, understanding cultures and having a community
                    and people first mentality.
                  </p>
                </div>
              </div>

              <div
                className={`${styles.block} ${styles.embraceBlock} itemHorizontal`}>
                <div className={styles.embraceBlockContainer}>
                  <h2 className={styles.titleEmbrace}>
                    We embrace our responsibility
                  </h2>
                </div>
              </div>

              <div
                className={`${styles.block} ${styles.callToActionBlock} itemHorizontal`}>
                <div
                  className={`${styles.callToActionBlockContainer} flex j-c`}>
                  <div
                    className={`${styles.imgCallToAction} bg-cv`}
                    style={{
                      backgroundImage: 'url(/images/02-about.jpg)',
                    }}></div>
                  <h2 className={styles.titleCallToAction}>
                    We are a paradigm shift and clarion call to action.
                  </h2>
                </div>
              </div>

              <div
                className={`${styles.block} ${styles.callToActionBlock} itemHorizontal`}>
                <div
                  className={`${styles.callToActionBlockContainer} flex j-c`}>
                  <div
                    className={`${styles.bigTitle} bg-ct`}
                    style={{
                      backgroundImage: 'url(/icons/logo-white.png)',
                      backgroundColor: '#00B099',
                    }}></div>
                  <h2 className={styles.textBigTitleBlock}>
                    Makes a social and cultural impact by starting conversations
                    and finding common ground while also celebrating our
                    differences...
                  </h2>
                </div>
              </div>
            </>
          )}
          {type === 'about-2' && (
            <>
              <div
                className={`${styles.block} ${styles.callToActionBlock} itemHorizontal`}>
                <div
                  className={`${styles.callToActionBlockContainer} ${styles.imgTextRight} flex j-c`}>
                  <h2 className={styles.titleCallToAction}>
                    And we keep the industry and partners honest to understand
                    that multiculturalism is the norm, not the exception.
                  </h2>
                  <div
                    className={`${styles.imgBlockImgText} bg-cv`}
                    style={{
                      backgroundImage: 'url(/images/about-03.jpg)',
                    }}></div>
                </div>
              </div>

              <div
                className={`${styles.block} ${styles.videoBlock} itemHorizontal`}>
                <div className={styles.videoContainerBlock}>
                  <div className={`${styles.iconPlay} bg-ct`}></div>
                </div>
              </div>

              <div
                className={`${styles.block} itemHorizontal ${styles.impactBlock} flex j-c a-c`}>
                <div className={styles.textImpactBlock}>
                  <h2 className={styles.titleImpact}>
                    Impact is our North Star
                  </h2>
                  <p className={styles.textImpact}>
                    We reverence cultural movements with a community and people
                    first focus. <br /> <br /> This way of living and seeing
                    multicultural marketing help us to set the tone and close
                    gaps between our partners, communities, and leaders.
                  </p>
                </div>
                <div className={styles.contImgImpact}>
                  <div className={styles.wrapperImgImpact}>
                    <Image
                      fill
                      src="/images/06-about.jpg"
                      alt=""
                      className={styles.imgImpact}
                    />
                  </div>
                </div>
              </div>

              <div
                className={`${styles.block} ${styles.embraceBlock} ${styles.committed} itemHorizontal`}>
                <div className={styles.embraceBlockContainer}>
                  <h3 className={styles.committedSubtitle}>
                    THINK TRUE ALSO MEANS
                  </h3>
                  <h2 className={styles.titleEmbrace}>COMMITTED</h2>
                </div>
              </div>

              <div
                className={`${styles.block} ${styles.circlesBlock} itemHorizontal`}>
                <div
                  className={`${styles.circleContainer} ${styles.partnersCircle}`}>
                  <h3 className={styles.textInnerCircle}>Partners </h3>
                  <div
                    className={`${styles.circleContainer} ${styles.thinkCircle} `}>
                    <h3 className={styles.textInnerCircle}>Think True </h3>
                    <div
                      className={`${styles.circleContainer} ${styles.communitiesCircle}`}>
                      <h3 className={styles.textInnerCircle}>Communities</h3>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {type === 'about-3' && (
            <>
              <div
                className={`${styles.block} ${styles.titleBlock} itemHorizontal flex j-c a-c`}>
                <div
                  className={styles.titleBlockWrapper}
                  style={{ backgroundColor: '#D02E2A' }}>
                  <h2 className={styles.textTitleBlock}>PHILANTHROPY</h2>
                </div>
              </div>
              <div
                className={`${styles.block} ${styles.titleBlock} itemHorizontal flex j-c a-c`}>
                <div className={`${styles.smallBlockTextImg} flex j-c a-c`}>
                  <p className={styles.smallTextBlockImgText}>
                    Whenever possible we will seek out opportunities to share
                    its expertise as an in-kind offering as well as provide pro
                    bono services to elevate our communities.
                  </p>
                  <div className={styles.wrapperImgBlockImgText}>
                    <Image
                      src="/images/06-about.jpg"
                      alt=""
                      fill
                      className={styles.innerImgBlockImgtext}
                    />
                  </div>
                </div>
              </div>
              <div
                className={`${styles.block} ${styles.titleBlock} itemHorizontal flex j-c a-c`}>
                <div
                  className={styles.titleBlockWrapper}
                  style={{ backgroundColor: '#00B099' }}>
                  <h2 className={styles.textTitleBlock}>PEOPLE</h2>
                </div>
              </div>
              <div
                className={`${styles.block} ${styles.titleBlock} itemHorizontal flex j-c a-c`}>
                <div className={`${styles.smallBlockTextImg} flex j-c a-c`}>
                  <p className={styles.smallTextBlockImgText}>
                    Think True has its roots firmly planted in ensuring all
                    businesses not only expand their consumer base, but also
                    create opportunities for a wider range of talented
                    professionals and service providers.
                  </p>
                  <div className={styles.wrapperImgBlockImgText}>
                    <Image
                      src="/images/08-team.jpg"
                      alt=""
                      fill
                      className={styles.innerImgBlockImgtext}
                    />
                  </div>
                </div>
              </div>
              <div
                className={`${styles.block} ${styles.titleBlock} itemHorizontal flex j-c a-c`}>
                <div
                  className={styles.titleBlockWrapper}
                  style={{ backgroundColor: '#FAA300' }}>
                  <h2 className={styles.textTitleBlock}>PARTNERS</h2>
                </div>
              </div>
              <div
                className={`${styles.block} ${styles.titleBlock} itemHorizontal flex j-c a-c`}>
                <div className={`${styles.smallBlockTextImg} flex j-c a-c`}>
                  <p className={styles.smallTextBlockImgText}>
                    Think TRUE commits to partnering with diverse suppliers who
                    reflect the community of the consumer.
                  </p>
                  <div className={styles.wrapperImgBlockImgText}>
                    <Image
                      src="/images/03-about.jpg"
                      alt=""
                      fill
                      className={styles.innerImgBlockImgtext}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
          {type !== 'about-1' &&
            type !== 'about-2' &&
            type !== 'about-3' &&
            blocksToIterate &&
            blocksToIterate.map((block, i) => (
              <div
                key={
                  typeof window !== 'undefined' ? window.crypto.randomUUID() : i
                }
                className={`${styles.block} itemHorizontal itemHorizontal-${i}`}>
                <div
                  className={`${styles.wrapperBlock} wrapperBlock flex j-b a-s`}>
                  <div className={styles.solidColod}>
                    <div
                      className={`${styles.patternBg} bg-complete`}
                      style={{
                        backgroundColor: `${
                          type === 'whatWeDo' ? '' : `${block.color}`
                        }`,
                      }}>
                      <div
                        className={styles.innerPatternBg}
                        style={{
                          backgroundImage: `url(/icons/${block.pattern}.png)`,
                        }}></div>
                    </div>
                  </div>
                  <div
                    className={`bg-cv ${styles.imgBlock}`}
                    style={
                      type === 'whatWeDo'
                        ? {
                            backgroundColor: block.color,
                          }
                        : {
                            backgroundImage: `${`url(${block.img})`}`,
                          }
                    }></div>
                  <div className={styles.contentBlock}>
                    <h2
                      className={`news ${styles.titleBlock}`}
                      style={{ width: block.titleWidth }}>
                      {block.title}
                    </h2>

                    {block.subtitle && (
                      <h3
                        className={styles.subtitleBlock}
                        style={{
                          color: block.color,
                        }}>
                        STRENGTHENING A COMMUNITY THROUGH SPORT
                      </h3>
                    )}

                    <p className={styles.infoBlock}>{block.text}</p>

                    {type !== 'whatWeDo' && (
                      <div className={`${styles.ctaBlock} flex j-b a-c`}>
                        <p className={`news ${styles.ctaText}`}>
                          SEE US IN ACTION
                        </p>
                        <div
                          className={styles.ballLine}
                          style={{
                            backgroundColor: block.color,
                          }}>
                          <div
                            className={styles.ball}
                            style={{
                              backgroundColor: block.color,
                            }}></div>
                        </div>
                      </div>
                    )}

                    {type === 'whatWeDo' && (
                      <div className={`news ${styles.indexBlock}`}>
                        {i + 1 < 10 ? `0${i + 1}` : i + 1}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalSection;
