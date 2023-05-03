import React from "react";
import styles from "./agency.module.css";

const Agency = ({ image }) => {
  return (
    <section
      className={`siteSection bg-cv ${styles.agencySection}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={`${styles.agencyContainer} container`}>
        <h2 className={`${styles.titleAgency} news`}>AGENCY </h2>
        <h3 className={`news ${styles.subtitleAgency}`}>OUR TEAM</h3>

        <div className={styles.floatInfoAgency}>
          <p className={styles.infoAgency}>
            We pride ourselves on having a mighty, nimble, and fierce team
            comprised of individuals from diverse backgrounds and perspectives.
          </p>
          <p className={styles.infoAgency}>
            Our team is passionate about delivering results and exceeding our
            partners expectations. We are committed to excellence and constantly
            striving to innovate and evolve our approach to marketing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Agency;
