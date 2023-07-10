import React, { useEffect, useRef } from 'react';
import styles from './horizontal-seciton.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Hero from '../hero';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

gsap.registerPlugin(ScrollTrigger);

const HorizontalSection = ({
  blocksToIterate,
  type,
  classParent,
  heroData,
}) => {
  const { pathname } = useRouter();
  const scroller = useRef();
  useEffect(() => {
    const blocks = gsap.utils.toArray(
      `.siteSection-${classParent} .itemHorizontal`
    );

    // const text = new SplitType('.splitText', { types: 'words, chars' });

    ScrollTrigger.matchMedia({
      '(min-width: 1025px)': () => {
        const to = gsap.to(blocks, {
          xPercent: () => -100 * (blocks.length - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: scroller.current,
            pin: true,
            pinSpacing: true,
            scrub: 3,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            end: () => `+=${5000}`,
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
        let splitTextB;
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
          if (block.querySelector('.splitTextB')) {
            splitTextB = gsap.from(block.querySelector('.splitTextB'), {
              transform: 'translateY(100%)',
              scrollTrigger: {
                trigger: block.querySelector('.splitTextB'),
                containerAnimation: to,
                start: '-60% 100%',
                end: '100% 50%',
                scrub: 5,
                onEnter: () => {
                  block
                    .querySelector('.splitTextB')
                    .classList.add(styles.active);
                },
                onEnterBack: () => {
                  block
                    .querySelector('.splitTextB')
                    .classList.add(styles.active);
                },
                onLeave: () => {
                  block
                    .querySelector('.splitTextB')
                    .classList.remove(styles.active);
                },
                onLeaveBack: () => {
                  block
                    .querySelector('.splitTextB')
                    .classList.remove(styles.active);
                  // tweenChars.reverse();
                },
              },
            });
          }
          if (block.querySelector('.partnersCircle')) {
            partnersCircle = gsap.from(block.querySelector('.partnersCircle'), {
              transform: 'translateX(5%)',
              scrollTrigger: {
                trigger: block.querySelector('.partnersCircle'),
                containerAnimation: to,
                start: '-0% 100%',
                end: '100% 50%',
                scrub: 5,
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
                transform: 'translateX(70%)',
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
              transform: `translateX(${'25'}%)`,
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
                i === blocks.length - 1 ? '200' : '200'
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
              transform: 'translateX(60%)',
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
            if (splitTextB) {
              splitTextB.kill();
            }
            if (imgAnimation) {
              imgAnimation.kill();
            }

            if (partnersCircle) {
              partnersCircle.kill();
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
        let splitTextB;
        let imgAnimation;
        let partnersCircle;

        blocks.forEach((block, i) => {
          if (block.querySelector('.partnersCircle')) {
            partnersCircle = gsap.from(block.querySelector('.partnersCircle'), {
              transform: 'translateY(50%)',
              scrollTrigger: {
                trigger: block.querySelector('.partnersCircle'),
                start: '-100% 50%',
                end: '100% 100%',
                scrub: 3,
              },
            });
          }
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
          if (block.querySelector('.splitTextB')) {
            splitTextB = gsap.from(block.querySelector('.splitTextB'), {
              transform: 'translateY(100%)',
              scrollTrigger: {
                trigger: block.querySelector('.splitTextB'),
                start: '-50% 100%',
                end: '100% 100%',
                scrub: 5,
                // markers: true,
                onEnter: () => {
                  block
                    .querySelector('.splitTextB')
                    .classList.add(styles.active);
                },
                onEnterBack: () => {
                  block
                    .querySelector('.splitTextB')
                    .classList.add(styles.active);
                },
                onLeave: () => {
                  block
                    .querySelector('.splitTextB')
                    .classList.remove(styles.active);
                },
                onLeaveBack: () => {
                  block
                    .querySelector('.splitTextB')
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
                start: '-50% 100%',
                end: '100% 50%',
                scrub: 3,
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
                transform: 'translateX(25%)',
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
              transform: `translateX(${'70'}%)`,
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
            if (splitTextB) {
              splitTextB.kill();
            }
            if (imgAnimation) {
              imgAnimation.kill();
            }
            if (partnersCircle) {
              partnersCircle.kill();
            }
          });
        };
      },
    });
  }, []);

  function get_blocks(block, i) {
    console.log(block);
    const bgColorClass =
      block.bgcolor === 'na'
        ? styles.embraceBlockContainer
        : styles.afterHeroAbout;
    const classParent =
      block.bgcolor === 'na' ? styles.embraceBlock : styles.blockAfterHero;
    const pattern_curr =
      block.pattern === 'plus-light' ? 'plus' : block.pattern;
    const isRight = block.imageposition === 'right';
    const isImpactClass =
      block.textboxPosition === 'Bottom'
        ? styles.callToActionBlock
        : styles.impactBlock;
    const impactInner = styles.textImpactBlock;
    const impactTitle =
      block.textboxPosition === 'Bottom'
        ? styles.titleImpact
        : styles.titleImpact;
    const impactText =
      block.textboxPosition === 'Bottom'
        ? styles.textImpact
        : styles.textImpact;
    const titleSize = styles[block.titleSize];
    const innerTitle =
      block.title !== '' ? (
        <h2
          className={`${impactTitle} ${titleSize}`}
          style={{ color: block.titleColor }}
          dangerouslySetInnerHTML={{ __html: block.title }}
        />
      ) : (
        <></>
      );

    let buttonHtml = '';
    if (
      block.text !== '' &&
      block.button_label !== '' &&
      block.button_link !== ''
    ) {
      buttonHtml = (
        <div
          className={`${styles.ctaBlock} ${styles.lastCta} splitTextB flex `}>
          <Link
            className={`news ${styles.ctaText}`}
            href={block.button_link}
            style={{
              backgroundImage: `url(/icons/${block.button_color_name}.png)`,
            }}
            target={block.button_target}
            dangerouslySetInnerHTML={{ __html: block.button_label }}></Link>
          <div
            className={styles.ballLine}
            style={{
              backgroundColor: block.button_color,
            }}>
            <div
              className={styles.ball}
              style={{
                backgroundColor: block.button_color,
              }}></div>
          </div>
        </div>
      );
    }

    const textSize = styles[block.textSize];
    const innerText =
      block.text !== '' ? (
        <div className={styles.lastWrapperText}>
          <p
            dangerouslySetInnerHTML={{ __html: block.text }}
            style={{ color: block.textColor }}
            className={`${impactText} ${textSize}`}
          />
          {buttonHtml}
        </div>
      ) : (
        <></>
      );
    switch (block.type) {
      case 'text_block':
        return (
          <>
            {block.pattern !== '' ? (
              <div
                className={`${styles.block} ${styles.titleBlock} itemHorizontal flex j-c a-c`}>
                <div
                  className={`bg-ct ${styles.bgPatternAbout}`}
                  style={{
                    backgroundImage: `url(/icons/${pattern_curr}.png)`,
                  }}></div>
                <div
                  className={`${
                    block.textboxPosition === 'Top'
                      ? 'a-s'
                      : block.textboxPosition === 'Middle'
                      ? 'a-c'
                      : 'a-e'
                  } ${styles.titleBlockWrapper}`}
                  style={{ backgroundColor: block.bgcolor }}>
                  <div className={`splitText ${styles.infoBlockWrapper}`}>
                    {/* {block.subtitle !== '' && (
                      <h3
                        className={`revealText ${styles.committedSubtitle}`}
                        dangerouslySetInnerHTML={{ __html: block.subtitle }}
                        style={{ color: block.subtitlecolor }}
                      />
                    )} */}
                    <h3
                      className={` ${styles.committedSubtitle}`}
                      style={{ color: block.subtitlecolor }}>
                      PHILANTHROPY
                    </h3>
                    {/* {block.title !== '' && (
                      <h2
                        className={`splitText ${styles.textTitleBlock}`}
                        dangerouslySetInnerHTML={{ __html: block.title }}
                        style={{ color: block.titlecolor }}
                      />
                    )}
                    {block.text !== '' && (
                      <p
                        className={`revealText ${styles.textAfterHeroAbout}`}
                        dangerouslySetInnerHTML={{ __html: block.text }}
                        style={{ color: block.textcolor }}
                      />
                    )} */}
                    <p
                      className={`${styles.textNewSection} ${styles.textAfterHeroAbout}`}
                      style={{ color: block.textcolor }}>
                      We actively seek opportunities to contribute our expertise
                      through in-kind offerings and provide pro bono services,
                      dedicated to supporting and uplifting our communities.
                    </p>
                  </div>
                  <div className={styles.imgBlockWrapper}>
                    {/* La segunda Clase es para colocar la imagen contain o cover */}
                    <img
                      className={`imgAnimation ${styles.innerImgTitleBlockWrapper} ${styles.innerIgmContain}`}
                      src="/images/06-about.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div
                key={`textblock${i}`}
                className={`${styles.block} ${classParent} itemHorizontal`}>
                <div
                  className={bgColorClass}
                  style={{
                    backgroundColor: `${
                      block.bgcolor === 'na' ? 'none' : styles.bgcolor
                    }`,
                  }}>
                  {block.subtitle !== '' && (
                    <h3
                      className={`splitText ${styles.committedSubtitle}`}
                      dangerouslySetInnerHTML={{ __html: block.subtitle }}
                      style={{ color: block.subtitlecolor }}
                    />
                  )}
                  {block.title !== '' && (
                    <h2
                      className={`titleAfterHeroAbout ${styles.titleAfterHeroAbout}`}
                      dangerouslySetInnerHTML={{ __html: block.title }}
                      style={{ color: block.titlecolor }}
                    />
                  )}
                  {block.text !== '' && (
                    <p
                      className={`splitTextB ${styles.textAfterHeroAbout}`}
                      dangerouslySetInnerHTML={{ __html: block.text }}
                      style={{ color: block.textcolor }}
                    />
                  )}
                </div>
              </div>
            )}
          </>
        );

      case 'split_block':
        return (
          <div
            key={`splitblock${i}`}
            className={`${styles.block} ${isImpactClass} itemHorizontal`}
            style={{ backgroundColor: block.bgcolor_content }}>
            <div
              className={`bg-ct ${styles.bgPatternAbout}`}
              style={{
                backgroundImage: `url(/icons/${pattern_curr}.png)`,
              }}></div>
            <div
              style={{ backgroundColor: block.bgcolor }}
              className={`${styles.titleBlockWrapper} ${
                block.textboxPosition === 'Top'
                  ? 'a-s'
                  : block.textboxPosition === 'Middle'
                  ? 'a-c'
                  : 'a-e'
              } ${isRight ? styles.imgTextRight : ''}`}>
              {isRight && (
                <>
                  {impactInner !== '' ? (
                    <div className={`splitText ${impactInner}`}>
                      {innerTitle}
                      {innerText}
                    </div>
                  ) : (
                    <div className={`splitText ${impactInner}`}>
                      {innerTitle}
                      {innerText}
                    </div>
                  )}
                </>
              )}
              <div className={styles.imgBlockWrapper}>
                <img
                  className={`imgAnimation ${
                    styles.innerImgTitleBlockWrapper
                  } ${
                    block.imagesize === 'cover'
                      ? styles.innerIgmCover
                      : styles.innerIgmContain
                  }`}
                  src={block.image.large ? block.image.large : ''}
                  alt={innerTitle}
                />
              </div>
              {!isRight && (
                <>
                  {impactInner !== '' ? (
                    <div className={`splitText ${impactInner}`}>
                      {innerTitle}
                      {innerText}
                    </div>
                  ) : (
                    <div className={`splitText ${impactInner}`}>
                      {innerTitle}
                      {innerText}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        );
      case 'video_block':
        return (
          <>
            {block.videotype === 'vm' && block.videourl !== '' && (
              <div
                key={`videoblock${i}`}
                className={`${styles.block} ${styles.videoBlock} itemHorizontal`}>
                <div className={`imgAnimation ${styles.videoContainerBlock}`}>
                  <iframe
                    src={block.videourl}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    className={`iframeVideo ${styles.iframeVideo}`}></iframe>
                </div>
              </div>
            )}
          </>
        );
      case 'key_words_block':
        return (
          <div
            className={`${styles.block} ${styles.circlesBlock} itemHorizontal`}>
            <div
              className={`${styles.circleContainer} ${styles.partnersCircle} partnersCircle`}>
              <h3
                className={`splitText ${styles.textInnerCircle}`}
                dangerouslySetInnerHTML={{ __html: block.word1 }}
              />
              <div
                className={`${styles.circleContainer} ${styles.thinkCircle} `}>
                <h3
                  className={`splitText ${styles.textInnerCircle}`}
                  dangerouslySetInnerHTML={{ __html: block.word2 }}
                />
                <div
                  className={`${styles.circleContainer} ${styles.communitiesCircle}`}>
                  <h3
                    className={`splitText ${styles.textInnerCircle}`}
                    dangerouslySetInnerHTML={{ __html: block.word2 }}
                  />
                </div>
              </div>
            </div>
          </div>
        );
    }
  }

  return (
    <section
      className={`siteSection ${
        classParent ? `siteSection-${classParent}` : ''
      } ${styles.horizontalSection} ${
        type === 'whatWeDo' ? styles.whatWeDoSec : ''
      }`}>
      {pathname === '/' && (
        <h2 className={`news ${styles.titleOurWork}`}>OUR WORK</h2>
      )}
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
              {/*
              <div
                className={`${styles.block} ${styles.firstBlock} itemHorizontal`}>
                <Hero dataHero={heroData} />
              </div>
              */}
              {blocksToIterate.map((block, i) => get_blocks(block, i))}
            </>
          )}
          {type !== 'about-1' &&
            type !== 'about-2' &&
            type !== 'about-3' &&
            blocksToIterate &&
            blocksToIterate.map((block, i) => (
              <div
                key={i}
                className={`${styles.block} itemHorizontal itemHorizontal-${i}`}>
                <div
                  className={`${styles.wrapperBlock} ${
                    type === 'whatWeDo' ? styles.wrapperBlockWhatWeDo : ''
                  } wrapperBlock flex j-b a-s`}>
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
                              block.img.large ? block.img['super-large'] : ''
                            })`}`,
                          }
                    }></div>
                  <div
                    className={`translateX ${styles.contentBlock} ${
                      type === 'whatWeDo' ? styles.contentWhatWeDo : ''
                    }`}>
                    <h2
                      className={`news  ${styles.titleBlock}`}
                      style={{ width: block.titleWidth }}
                      dangerouslySetInnerHTML={{ __html: block.title }}
                    />
                    {block.subtitle && (
                      <h3
                        className={` ${styles.subtitleBlock} newsR`}
                        style={{
                          color: block.color,
                        }}>
                        {block.subtitle}
                      </h3>
                    )}

                    <p
                      className={` ${styles.infoBlock}`}
                      dangerouslySetInnerHTML={{ __html: block.text }}
                    />

                    {type !== 'whatWeDo' && (
                      <div className={`${styles.ctaBlock}  flex j-b a-c`}>
                        <Link
                          className={`news ${styles.ctaText}`}
                          href={`${process.env.NEXT_PUBLIC_HOST_NAME}work/${block.link}`}>
                          READ MORE
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
