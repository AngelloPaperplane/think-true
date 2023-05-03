import React, { useEffect, useRef } from "react";
import styles from "./horizontal-seciton.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalSection = ({ blocksToIterate }) => {
  const scroller = useRef();
  useEffect(() => {
    const blocks = gsap.utils.toArray(".itemHorizontal");
    ScrollTrigger.matchMedia({
      "(min-width: 1025px)": () => {
        const to = gsap.to(blocks, {
          xPercent: () => -100 * (blocks.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: scroller.current,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,

            end: () => "+=" + window.innerWidth,
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
    <section className={`siteSection ${styles.horizontalSection}`}>
      <div className={styles.horizontalContainer}>
        <div
          id="block"
          className={`${styles.wrapperScroller} wrapperScroller`}
          style={{
            width: `${blocksToIterate.length * 100}vw`,
          }}
          ref={scroller}
        >
          {blocksToIterate &&
            blocksToIterate.map((block, i) => (
              <div
                key={
                  typeof window !== "undefined" ? window.crypto.randomUUID() : i
                }
                className={`${styles.block} itemHorizontal itemHorizontal-${i}`}
              >
                <div
                  className={`${styles.wrapperBlock} wrapperBlock flex j-b a-s`}
                >
                  <div className={styles.solidColod}>
                    <div
                      className={`${styles.patternBg} bg-complete`}
                      style={{
                        backgroundColor: block.color,
                      }}
                    >
                      <div
                        className={styles.innerPatternBg}
                        style={{
                          backgroundImage: `url(/icons/${block.pattern}.png)`,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div
                    className={`bg-cv ${styles.imgBlock}`}
                    style={{
                      backgroundImage: `url(${block.img})`,
                    }}
                  ></div>
                  <div className={styles.contentBlock}>
                    <h2 className={`news ${styles.titleBlock}`}>NIKE DREW LEAGUE</h2>
                    <h3
                      className={styles.subtitleBlock}
                      style={{
                        color: block.color,
                      }}
                    >
                      STRENGTHENING A COMMUNITY THROUGH SPORT
                    </h3>
                    <p className={styles.infoBlock}>
                      Bringing signature athletes, local legends, Hollywood
                      stars, and thousands of fans to South Central to create a
                      destination for high-caliber basketball within a resilient
                      community.
                    </p>
                    <div className={`${styles.ctaBlock} flex j-b a-c`}>
                      <p className={`news ${styles.ctaText}`}>SEE US IN ACTION</p>
                      <div
                        className={styles.ballLine}
                        style={{
                          backgroundColor: block.color,
                        }}
                      >
                        <div
                          className={styles.ball}
                          style={{
                            backgroundColor: block.color,
                          }}
                        ></div>
                      </div>
                    </div>
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
