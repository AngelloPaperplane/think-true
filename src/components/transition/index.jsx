import { ThinkTrue } from '@/context/ThinkTrueContext';
import gsap from 'gsap';
import React, { useContext, useEffect, useRef } from 'react';
import styles from './transition.module.css';

const Transition = () => {
  const { pageLoaded } = useContext(ThinkTrue);
  const svgNode = useRef(null);
  useEffect(() => {
    const tl1 = gsap.timeline();
    const curve = 'M0 502S175 272 500 272s500 230 500 230V0H0Z';
    const flat = 'M0 2S175 1 500 1s500 1 500 1V0H0Z';
    const start = 'M0,1005S175,995,500,995s500,5,500,5V0H0Z';
    if (pageLoaded) {
      tl1
        .to(svgNode.current, {
          duration: 0.8,
          attr: { d: curve },
          ease: 'power2.easeIn',
        })
        .to(svgNode.current, {
          duration: 0.8,
          attr: { d: flat },
          ease: 'power2.easeOut',
        });
    } else {
      tl1
        .to(svgNode.current, {
          duration: 0.8,
          attr: { d: flat },
          ease: 'power2.easeIn',
        })
        .to(svgNode.current, {
          duration: 0.8,
          attr: { d: curve },
          ease: 'power2.easeOut',
        })
        .to(svgNode.current, {
          duration: 0.8,
          attr: { d: start },
          ease: 'power2.easeOut',
        });
    }
  }, [pageLoaded]);
  return (
    <div className={styles.overlayMenu}>
      <svg className={styles.svgNode} viewBox="0 0 1000 1000">
        <path
          ref={svgNode}
          className="pathNode"
          d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"
        />
      </svg>
    </div>
  );
};

export default Transition;
