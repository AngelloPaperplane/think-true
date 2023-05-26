import React, { useEffect, useRef } from 'react';
import styles from './horizontal-seciton.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Hero from '../hero';
import Image from 'next/image';
import SplitType from 'split-type';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const HorizontalSection = ({ blocksToIterate, type, classParent }) => {
  const scroller = useRef();
  useEffect(() => {
    const blocks = gsap.utils.toArray(
      `.siteSection-${classParent} .itemHorizontal`
    );

    const text = new SplitType('.splitText', { types: 'words, chars' });

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

        let titleTl;
        let subTitleTl;
        let textTl;
        let buttonTl;
        let imgTl;

        // Vars for about

        let bigTitleBlock;
        let revealText;
        let splitText;
        let imgAnimation;
        let partnersCircle;

        // gsap.set(text.chars, {y: 70});

        // const tweenChars = gsap.from(text.chars, {
        //   opacity: 0,
        //   y: 20,
        //   duration: 1.5,
        //   stagger: { amount: 0.1 },
        // });

        // text.chars.forEach((char, i) => {

        // });

        // gsap.from(text.chars, {
        //   scrollTrigger: {
        //     trigger: '.splitText',
        //     toggleActions: 'restart resume restart resume',
        //     // containerAnimation: to,
        //     markers: true,
        //     start: '0% 100%',
        //     end: '100% 0%',
        //   },
        //   opacity: 0,
        //   y: 20,
        //   duration: 1.5,
        //   stagger: { amount: 0.5 },
        // });
        /*
        const tween = gsap.from(text.chars, {
          opacity: 0,
          y: 20,
          duration: 1.5,
          stagger: { amount: 0.5 },
        });
*/
        blocks.forEach((block, i) => {
          if (block.querySelector('.imgAnimation')) {
            imgAnimation = gsap.from(block.querySelector('.imgAnimation'), {
              transform: 'translateY(150%)',
              scrollTrigger: {
                trigger: block.querySelector('.imgAnimation'),
                containerAnimation: to,
                start: '0% 100%',
                end: '100% 0%',
                scrub: 5,
                // markers: true,
                onEnter: () => {
                  block.querySelector('.imgAnimation').classList.add('active');
                },
                onEnterBack: () => {
                  block.querySelector('.imgAnimation').classList.add('active');
                  // tweenChars.play();
                },
                onLeave: () => {
                  block
                    .querySelector('.imgAnimation')
                    .classList.remove('active');
                  // tweenChars.reverse();
                },
                onLeaveBack: () => {
                  block
                    .querySelector('.imgAnimation')
                    .classList.remove('active');
                  // tweenChars.reverse();
                },
              },
            });
          }
          if (block.querySelector('.splitText')) {
            splitText = gsap.from(block.querySelector('.splitText'), {
              transform: 'translateY(100%)',
              scrollTrigger: {
                trigger: block.querySelector('.splitText'),
                containerAnimation: to,
                start: '-60% 100%',
                end: '100% 50%',
                scrub: 5,
                onEnter: () => {
                  block
                    .querySelector('.splitText')
                    .classList.add(styles.active);
                  console.log(text.chars);
                },
                onEnterBack: () => {
                  block
                    .querySelector('.splitText')
                    .classList.add(styles.active);
                },
                onLeave: () => {
                  block
                    .querySelector('.splitText')
                    .classList.remove(styles.active);
                },
                onLeaveBack: () => {
                  block
                    .querySelector('.splitText')
                    .classList.remove(styles.active);
                  // tweenChars.reverse();
                },
              },
            });
          }
          if (block.querySelector('.partnersCircle')) {
            partnersCircle = gsap.from(block.querySelector('.partnersCircle'), {
              transform: 'translateX(10%)',
              scrollTrigger: {
                trigger: block.querySelector('.partnersCircle'),
                containerAnimation: to,
                start: '-0% 100%',
                end: '100% 50%',
                scrub: 5,
                onEnter: () => {
                  block
                    .querySelector('.splitText')
                    .classList.add(styles.active);
                  console.log(text.chars);
                },
                onEnterBack: () => {
                  block
                    .querySelector('.splitText')
                    .classList.add(styles.active);
                },
                onLeave: () => {
                  block
                    .querySelector('.splitText')
                    .classList.remove(styles.active);
                },
                onLeaveBack: () => {
                  block
                    .querySelector('.splitText')
                    .classList.remove(styles.active);
                  // tweenChars.reverse();
                },
              },
            });
          }
          if (block.querySelector('.revealText')) {
            revealText = gsap.from(block.querySelector('.revealText'), {
              transform: 'translateX(-50%)',
              scrollTrigger: {
                trigger: block.querySelector('.revealText'),
                containerAnimation: to,
                start: '0% 100%',
                end: '100% 0%',
                scrub: 5,
                // markers: true,
                onEnter: () => {
                  block
                    .querySelector('.revealText')
                    .classList.add(styles.active);
                },
                onEnterBack: () => {
                  block
                    .querySelector('.revealText')
                    .classList.add(styles.active);
                },
                onLeave: () => {
                  block
                    .querySelector('.revealText')
                    .classList.remove(styles.active);
                },
                onLeaveBack: () => {
                  block
                    .querySelector('.revealText')
                    .classList.remove(styles.active);
                },
              },
            });
          }
          if (block.querySelector(`.${styles.titleAfterHeroAbout}`)) {
            bigTitleBlock = gsap.from(
              block.querySelector(`.${styles.titleAfterHeroAbout}`),
              {
                transform: 'translateX(100%)',
                scrollTrigger: {
                  trigger: block.querySelector(
                    `.${styles.titleAfterHeroAbout}`
                  ),
                  containerAnimation: to,
                  start: '-250% 0%',
                  end: '150% 100%',
                  scrub: 3,
                  onEnter: () => {
                    block
                      .querySelector(`.${styles.titleAfterHeroAbout}`)
                      .classList.add('active');
                  },
                  onEnterBack: () => {
                    block
                      .querySelector(`.${styles.titleAfterHeroAbout}`)
                      .classList.add('active');
                  },
                  onLeave: () => {
                    block
                      .querySelector(`.${styles.titleAfterHeroAbout}`)
                      .classList.remove('active');
                  },
                  onLeaveBack: () => {
                    block
                      .querySelector(`.${styles.titleAfterHeroAbout}`)
                      .classList.remove('active');
                  },
                },
              }
            );
          }
          if (block.querySelector('.translateX')) {
            titleTl = gsap.from(block.querySelector('.translateX'), {
              transform: `translateX(${
                i === blocks.length - 1 ? '100' : '100'
              }%)`,
              scrollTrigger: {
                trigger: block.querySelector('.wrapperBlock'),
                containerAnimation: to,
                start:
                  i === blocks.length - 1
                    ? '-70% 0%'
                    : i === 0
                    ? '-40% 0%'
                    : 'top 80%',
                end:
                  i === blocks.length - 1
                    ? '100% 95%'
                    : i === 0
                    ? '120% 80%'
                    : 'end -50%',
                scrub: 3,
                // markers: i === blocks.length - 1 ? true : false
              },
            });
          }
          if (block.querySelector('.subtitleParallax')) {
            subTitleTl = gsap.from(block.querySelector('.subtitleParallax'), {
              transform: `translateX(${
                i === blocks.length - 1 ? '170' : '170'
              }%)`,
              scrollTrigger: {
                trigger: block.querySelector('.wrapperBlock'),
                containerAnimation: to,
                start:
                  i === blocks.length - 1
                    ? '-70% 0%'
                    : i === 0
                    ? '-40% 0%'
                    : 'top 80%',
                end:
                  i === blocks.length - 1
                    ? '100% 95%'
                    : i === 0
                    ? '120% 80%'
                    : 'end -50%',
                scrub: 3,

                // markers: i === blocks.length - 1 ? true : false
              },
            });
          }

          if (block.querySelector('.textParallax')) {
            textTl = gsap.from(block.querySelector('.textParallax'), {
              transform: `translateX(${
                i === blocks.length - 1 ? '100' : '100'
              }%)`,
              scrollTrigger: {
                trigger: block.querySelector('.wrapperBlock'),
                containerAnimation: to,
                start:
                  i === blocks.length - 1
                    ? '-70% 0%'
                    : i === 0
                    ? '-40% 0%'
                    : 'top 80%',
                end:
                  i === blocks.length - 1
                    ? '100% 95%'
                    : i === 0
                    ? '120% 80%'
                    : 'end -50%',
                scrub: 3,
                // markers: i === blocks.length - 1 ? true : false
              },
            });
          }
          if (block.querySelector('.btnParallax')) {
            buttonTl = gsap.from(block.querySelector('.btnParallax'), {
              transform: `translateX(${
                i === blocks.length - 1 ? '100' : '100'
              }%)`,
              scrollTrigger: {
                trigger: block.querySelector('.wrapperBlock'),
                containerAnimation: to,
                start:
                  i === blocks.length - 1
                    ? '-70% 0%'
                    : i === 0
                    ? '-40% 0%'
                    : 'top 80%',
                end:
                  i === blocks.length - 1
                    ? '100% 95%'
                    : i === 0
                    ? '120% 80%'
                    : 'end -50%',
                scrub: 3,
                // markers: i === blocks.length - 1 ? true : false
              },
            });
          }
          if (block.querySelector('.imgParallax')) {
            imgTl = gsap.to(block.querySelector('.imgParallax'), {
              clipPath: `circle(${
                i === blocks.length - 1 ? '100' : '100'
              }% at 50% 50%)`,
              scrollTrigger: {
                trigger: block.querySelector('.wrapperBlock'),
                containerAnimation: to,
                start:
                  i === blocks.length - 1
                    ? '-70% 0%'
                    : i === 0
                    ? '-30% 0%'
                    : 'top 80%',
                end:
                  i === blocks.length - 1
                    ? '100% 95%'
                    : i === 0
                    ? '120% 80%'
                    : 'end -50%',
                scrub: 3,
                // markers: i === 0
              },
            });
          }
        });

        return () => {
          to.kill();
          blocks.forEach(() => {
            if (titleTl) {
              titleTl.kill();
            }
            if (subTitleTl) {
              subTitleTl.kill();
            }
            if (textTl) {
              textTl.kill();
            }
            if (buttonTl) {
              buttonTl.kill();
            }
            if (imgTl) {
              imgTl.kill();
            }
            if (bigTitleBlock) {
              bigTitleBlock.kill();
            }
            if (revealText) {
              revealText.kill();
            }
            if (splitText) {
              splitText.kill();
            }
            if (imgAnimation) {
              imgAnimation.kill();
            }
          });
        };
      },
    });
    ScrollTrigger.matchMedia({
      '(max-width: 1024px)': () => {
        const to = gsap.to(blocks, {
          // xPercent: () => -100 * (blocks.length - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: scroller.current,
            pin: false,
            pinSpacing: false,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            end: () => `+=${window.innerWidth}`,
          },
        });

        let titleTl;
        let subTitleTl;
        let textTl;
        let buttonTl;
        let imgTl;

        // Vars for about

        let bigTitleBlock;
        let revealText;
        let splitText;
        let imgAnimation;

        blocks.forEach((block, i) => {
          if (block.querySelector('.imgAnimation')) {
            imgAnimation = gsap.from(block.querySelector('.imgAnimation'), {
              transform: 'translateY(150%)',
              scrollTrigger: {
                trigger: block.querySelector('.imgAnimation'),
                start: '0% 100%',
                end: '100% 0%',
                scrub: 5,
                // markers: true,
                onEnter: () => {
                  block.querySelector('.imgAnimation').classList.add('active');
                },
                onEnterBack: () => {
                  block.querySelector('.imgAnimation').classList.add('active');
                  // tweenChars.play();
                },
                onLeave: () => {
                  block
                    .querySelector('.imgAnimation')
                    .classList.remove('active');
                  // tweenChars.reverse();
                },
                onLeaveBack: () => {
                  block
                    .querySelector('.imgAnimation')
                    .classList.remove('active');
                  // tweenChars.reverse();
                },
              },
            });
          }
          if (block.querySelector('.splitText')) {
            splitText = gsap.from(block.querySelector('.splitText'), {
              transform: 'translateY(100%)',
              scrollTrigger: {
                trigger: block.querySelector('.splitText'),
                start: '-50% 100%',
                end: '100% 100%',
                scrub: 5,
                // markers: true,
                onEnter: () => {
                  block
                    .querySelector('.splitText')
                    .classList.add(styles.active);
                  console.log(text.chars);
                },
                onEnterBack: () => {
                  block
                    .querySelector('.splitText')
                    .classList.add(styles.active);
                },
                onLeave: () => {
                  block
                    .querySelector('.splitText')
                    .classList.remove(styles.active);
                },
                onLeaveBack: () => {
                  block
                    .querySelector('.splitText')
                    .classList.remove(styles.active);
                  // tweenChars.reverse();
                },
              },
            });
          }
          if (block.querySelector('.revealText')) {
            revealText = gsap.from(block.querySelector('.revealText'), {
              transform: 'translateX(-50%)',
              scrollTrigger: {
                trigger: block.querySelector('.revealText'),
                start: '0% 100%',
                end: '100% 0%',
                scrub: 5,
                // markers: true,
                onEnter: () => {
                  block
                    .querySelector('.revealText')
                    .classList.add(styles.active);
                },
                onEnterBack: () => {
                  block
                    .querySelector('.revealText')
                    .classList.add(styles.active);
                },
                onLeave: () => {
                  block
                    .querySelector('.revealText')
                    .classList.remove(styles.active);
                },
                onLeaveBack: () => {
                  block
                    .querySelector('.revealText')
                    .classList.remove(styles.active);
                },
              },
            });
          }
          if (block.querySelector(`.${styles.titleAfterHeroAbout}`)) {
            bigTitleBlock = gsap.from(
              block.querySelector(`.${styles.titleAfterHeroAbout}`),
              {
                transform: 'translateX(50%)',
                scrollTrigger: {
                  trigger: block.querySelector(
                    `.${styles.titleAfterHeroAbout}`
                  ),
                  start: '0% 50%',
                  end: '100% 35%',
                  scrub: 3,
                  // markers: true,
                  onEnter: () => {
                    block
                      .querySelector(`.${styles.titleAfterHeroAbout}`)
                      .classList.add('active');
                  },
                  onEnterBack: () => {
                    block
                      .querySelector(`.${styles.titleAfterHeroAbout}`)
                      .classList.add('active');
                  },
                  onLeave: () => {
                    block
                      .querySelector(`.${styles.titleAfterHeroAbout}`)
                      .classList.remove('active');
                  },
                  onLeaveBack: () => {
                    block
                      .querySelector(`.${styles.titleAfterHeroAbout}`)
                      .classList.remove('active');
                  },
                },
              }
            );
          }
          if (block.querySelector('.translateX')) {
            titleTl = gsap.from(block.querySelector('.translateX'), {
              transform: `translateX(${
                i === blocks.length - 1 ? '100' : '100'
              }%)`,
              scrollTrigger: {
                trigger: block.querySelector('.wrapperBlock'),
                start: 'top 80%',
                end: 'end -50%',
                scrub: 3,
                // markers: i === blocks.length - 1 ? true : false
              },
            });
          }
          if (block.querySelector('.subtitleParallax')) {
            subTitleTl = gsap.from(block.querySelector('.subtitleParallax'), {
              transform: `translateX(${
                i === blocks.length - 1 ? '100' : '100'
              }%)`,
              scrollTrigger: {
                trigger: block.querySelector('.wrapperBlock'),
                start: 'top 80%',
                end: 'end -50%',
                scrub: 3,

                // markers: i === blocks.length - 1 ? true : false
              },
            });
          }

          if (block.querySelector('.textParallax')) {
            textTl = gsap.from(block.querySelector('.textParallax'), {
              transform: `translateX(${
                i === blocks.length - 1 ? '100' : '100'
              }%)`,
              scrollTrigger: {
                trigger: block.querySelector('.wrapperBlock'),
                start: 'top 80%',
                end: 'end -50%',
                scrub: 3,
                // markers: i === blocks.length - 1 ? true : false
              },
            });
          }
          if (block.querySelector('.btnParallax')) {
            buttonTl = gsap.from(block.querySelector('.btnParallax'), {
              transform: `translateX(${
                i === blocks.length - 1 ? '100' : '100'
              }%)`,
              scrollTrigger: {
                trigger: block.querySelector('.wrapperBlock'),
                start: 'top 80%',
                end: 'end -50%',
                scrub: 3,
                // markers: i === blocks.length - 1 ? true : false
              },
            });
          }
          if (block.querySelector('.imgParallax')) {
            imgTl = gsap.to(block.querySelector('.imgParallax'), {
              clipPath: `circle(${
                i === blocks.length - 1 ? '100' : '100'
              }% at 50% 50%)`,
              scrollTrigger: {
                trigger: block.querySelector('.wrapperBlock'),
                start: 'top 80%',
                end: 'end -50%',
                scrub: 3,
              },
            });
          }
        });

        return () => {
          to.kill();
          blocks.forEach(() => {
            if (titleTl) {
              titleTl.kill();
            }
            if (subTitleTl) {
              subTitleTl.kill();
            }
            if (textTl) {
              textTl.kill();
            }
            if (buttonTl) {
              buttonTl.kill();
            }
            if (imgTl) {
              imgTl.kill();
            }
            if (bigTitleBlock) {
              bigTitleBlock.kill();
            }
            if (revealText) {
              revealText.kill();
            }
            if (splitText) {
              splitText.kill();
            }
            if (imgAnimation) {
              imgAnimation.kill();
            }
          });
        };
      },
    });
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
            width: `${
              typeof window !== 'undefined'
                ? window.innerWidth > 1024
                  ? `${blocksToIterate.length * 100}vw`
                  : '100%'
                : '100%'
            }`,
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
                  <h2
                    className={`titleAfterHeroAbout ${styles.titleAfterHeroAbout}`}>
                    What does it mean to Think True?
                  </h2>
                  <p className={`revealText ${styles.textAfterHeroAbout}`}>
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
                  <h2 className={`splitText ${styles.titleEmbrace}`}>
                    We embrace our responsibility
                  </h2>
                </div>
              </div>

              <div
                className={`${styles.block} ${styles.callToActionBlock} itemHorizontal`}>
                <div
                  className={`${styles.callToActionBlockContainer} flex j-c`}>
                  <div
                    className={`${styles.imgCallToAction} imgAnimation bg-cv`}
                    style={{
                      backgroundImage: 'url(/images/02-about.jpg)',
                    }}></div>
                  <h2 className={`splitText ${styles.titleCallToAction}`}>
                    We are a paradigm shift and clarion call to action.
                  </h2>
                </div>
              </div>

              <div
                className={`${styles.block} ${styles.callToActionBlock} itemHorizontal`}>
                <div
                  className={`${styles.callToActionBlockContainer} flex j-c`}>
                  <div
                    className={`${styles.bigTitle} imgAnimation bg-ct`}
                    style={{
                      backgroundImage: 'url(/icons/logo-white.png)',
                      backgroundColor: '#00B099',
                    }}></div>
                  <h2 className={`${styles.textBigTitleBlock} splitText`}>
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
                  <h2 className={`splitText ${styles.titleCallToAction}`}>
                    And we keep the industry and partners honest to understand
                    that multiculturalism is the norm, not the exception.
                  </h2>
                  <div
                    className={`${styles.imgBlockImgText} imgAnimation bg-cv`}
                    style={{
                      backgroundImage: 'url(/images/about-03.jpg)',
                    }}></div>
                </div>
              </div>

              <div
                className={`${styles.block} ${styles.videoBlock} itemHorizontal`}>
                <div className={`imgAnimation ${styles.videoContainerBlock}`}>
                  {/* <div className={`${styles.iconPlay} bg-ct`}></div> */}
                  <iframe
                    src="https://player.vimeo.com/video/816732114?h=c558db96ab&title=0&byline=0&portrait=0"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    className={`iframeVideo ${styles.iframeVideo}`}></iframe>
                </div>
              </div>

              <div
                className={`${styles.block} itemHorizontal ${styles.impactBlock} flex j-c a-c`}>
                <div className={styles.textImpactBlock}>
                  <h2 className={`revealText ${styles.titleImpact}`}>
                    Impact is our North Star
                  </h2>
                  <p className={`splitText ${styles.textImpact}`}>
                    We reverence cultural movements with a community and people
                    first focus. <br /> <br /> This way of living and seeing
                    multicultural marketing help us to set the tone and close
                    gaps between our partners, communities, and leaders.
                  </p>
                </div>
                <div className={styles.contImgImpact}>
                  <div className={`imgAnimation ${styles.wrapperImgImpact}`}>
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
                  <h3 className={`revealText ${styles.committedSubtitle}`}>
                    THINK TRUE ALSO MEANS
                  </h3>
                  <h2 className={`splitText ${styles.titleEmbrace}`}>
                    COMMITTED
                  </h2>
                </div>
              </div>

              <div
                className={`${styles.block} ${styles.circlesBlock} itemHorizontal`}>
                <div
                  className={`${styles.circleContainer} ${styles.partnersCircle} partnersCircle`}>
                  <h3 className={`splitText ${styles.textInnerCircle}`}>
                    Partners{' '}
                  </h3>
                  <div
                    className={`${styles.circleContainer} ${styles.thinkCircle} `}>
                    <h3 className={`splitText ${styles.textInnerCircle}`}>
                      Think True{' '}
                    </h3>
                    <div
                      className={`${styles.circleContainer} ${styles.communitiesCircle}`}>
                      <h3 className={`splitText ${styles.textInnerCircle}`}>
                        Communities
                      </h3>
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
                  className={`bg-ct ${styles.bgPatternAbout}`}
                  style={{ backgroundImage: 'url(/icons/arrows.png)' }}></div>
                <div
                  className={styles.titleBlockWrapper}
                  style={{ backgroundColor: '#D02E2A' }}>
                  <h2 className={`revealText ${styles.textTitleBlock}`}>
                    PHILANTHROPY
                  </h2>
                </div>
              </div>
              <div
                className={`${styles.block} ${styles.titleBlock} itemHorizontal flex j-c a-c`}>
                <div className={`${styles.smallBlockTextImg} flex j-c a-c`}>
                  <p className={`splitText ${styles.smallTextBlockImgText}`}>
                    Whenever possible we will seek out opportunities to share
                    its expertise as an in-kind offering as well as provide pro
                    bono services to elevate our communities.
                  </p>
                  <div
                    className={`imgAnimation ${styles.wrapperImgBlockImgText}`}>
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
                  className={`bg-ct ${styles.bgPatternAbout}`}
                  style={{ backgroundImage: 'url(/icons/plus.png)' }}></div>
                <div
                  className={styles.titleBlockWrapper}
                  style={{ backgroundColor: '#00B099' }}>
                  <h2 className={`splitText ${styles.textTitleBlock}`}>
                    PEOPLE
                  </h2>
                </div>
              </div>
              <div
                className={`${styles.block} ${styles.titleBlock} itemHorizontal flex j-c a-c`}>
                <div className={`${styles.smallBlockTextImg} flex j-c a-c`}>
                  <p className={`splitText ${styles.smallTextBlockImgText}`}>
                    Think True has its roots firmly planted in ensuring all
                    businesses not only expand their consumer base, but also
                    create opportunities for a wider range of talented
                    professionals and service providers.
                  </p>
                  <div
                    className={`imgAnimation ${styles.wrapperImgBlockImgText}`}>
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
                  className={`bg-ct ${styles.bgPatternAbout}`}
                  style={{ backgroundImage: 'url(/icons/circles.png)' }}></div>
                <div
                  className={styles.titleBlockWrapper}
                  style={{ backgroundColor: '#FAA300' }}>
                  <h2 className={`splitText ${styles.textTitleBlock}`}>
                    PARTNERS
                  </h2>
                </div>
              </div>
              <div
                className={`${styles.block} ${styles.titleBlock} itemHorizontal flex j-c a-c`}>
                <div className={`${styles.smallBlockTextImg} flex j-c a-c`}>
                  <p className={`splitText ${styles.smallTextBlockImgText}`}>
                    Think TRUE commits to partnering with diverse suppliers who
                    reflect the community of the consumer.
                  </p>
                  <div
                    className={`imgAnimation ${styles.wrapperImgBlockImgText}`}>
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
                  <div
                    className={`${styles.solidColod} ${
                      type === 'whatWeDo' ? styles.solidColorWhatWeDo : ''
                    }`}>
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
                          backgroundImage: `url(/icons/${block.pattern}${
                            type === 'home'
                              ? block.pattern === 'arrows'
                                ? '-b'
                                : ''
                              : ''
                          }.png)`,
                        }}></div>
                    </div>
                  </div>
                  <div
                    className={`bg-cv imgParallax ${styles.imgBlock} ${
                      type === 'whatWeDo' ? styles.colorWhatWeDo : ''
                    }`}
                    style={
                      type === 'whatWeDo'
                        ? {
                            backgroundColor: block.color,
                          }
                        : {
                            backgroundImage: `${`url(${
                              block.img.large ? block.img.large : ''
                            })`}`,
                          }
                    }></div>
                  <div
                    className={`${styles.contentBlock} ${
                      type === 'whatWeDo' ? styles.contentWhatWeDo : ''
                    }`}>
                    <h2
                      className={`news translateX ${styles.titleBlock}`}
                      style={{ width: block.titleWidth }}
                      dangerouslySetInnerHTML={{ __html: block.title }}
                    />
                    {block.subtitle && (
                      <h3
                        className={`subtitleParallax ${styles.subtitleBlock}`}
                        style={{
                          color: block.color,
                        }}>
                        {block.subtitle}
                      </h3>
                    )}

                    <p
                      className={`textParallax ${styles.infoBlock}`}
                      dangerouslySetInnerHTML={{ __html: block.text }}
                    />

                    {type !== 'whatWeDo' && (
                      <div
                        className={`${styles.ctaBlock} btnParallax flex j-b a-c`}>
                        <Link
                          className={`news ${styles.ctaText}`}
                          href={`${process.env.NEXT_PUBLIC_HOST_NAME}work/${block.link}`}>
                          {block.label}
                        </Link>
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
