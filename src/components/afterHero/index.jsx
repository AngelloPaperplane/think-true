import React from "react";
import styles from "./after-hero.module.css";

const AfterHero = ({ content }) => {
  return (
    <section className={`siteSection ${styles.afterHeroSection}`}>
      <div className={`container ${styles.afterHeroContainer}`}>
        {content && content.layout === "home" && (
          <>
            {content.posterVideo && content.video && (
              <div className={`${styles.bigCircle}`}></div>
            )}

            <div className={styles.wrapperAfterHeroHome}>
              {content.text &&
                content.text.map((text, i) => (
                  <p
                    key={
                      typeof window !== "undefined"
                        ? window.crypto.randomUUID()
                        : i
                    }
                    className={styles.textAfterHero}
                  >
                    {text}
                  </p>
                ))}
              {content.posterVideo && content.video && (
                <div
                  className={`${styles.videoContainer} bg-cv`}
                  style={{ backgroundImage: `url(${content.posterVideo})` }}
                >
                  <div className={`bg-ct ${styles.playVideo}`}></div>
                </div>
              )}
            </div>
          </>
        )}
        {content && content.layout === "team" && (
          <>

            <div className={styles.wrapperAfterHeroTeam}>
              {content.text &&
                content.text.map((text, i) => (
                  <p
                    key={
                      typeof window !== "undefined"
                        ? window.crypto.randomUUID()
                        : i
                    }
                    className={styles.textAfterHero}
                  >
                    {text}
                  </p>
                ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default AfterHero;
