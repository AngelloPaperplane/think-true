import React, { useEffect } from 'react';
import styles from './home-clients.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Clients = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={`siteSection ${styles.clientsSection}`}>
      <div className={`container ${styles.clientsContainer}`}>
        <h2
          data-aos="fade-up"
          data-aos-duration="900"
          data-aous-delay="0"
          className={`${styles.clientsTitle} bold uppercase news`}>
          Clients
        </h2>
        <h3
          data-aos="fade-up"
          data-aos-duration="900"
          data-aous-delay="0"
          className={`${styles.subtitleClients} news`}>
          MULTICULTURALISM IS THE DEFAULT
        </h3>
        <p
          data-aos="fade-up"
          data-aos-duration="900"
          data-aous-delay="0"
          className={styles.infoClients}>
          We aim to raise the standards of the marketing industry to ensure
          diverse perspectives are acknowledged, engaged, and amplified.
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="900"
          data-aous-delay="0"
          className={styles.infoCollaborators}>
          These are our collaborators.
        </p>
      </div>
      <div className={`${styles.collaboratorsContainer} flex j-c a-c`}>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          data-aous-delay="0"
          className={`bg-ct ${styles.collaboratorBox}`}
          style={{ backgroundImage: 'url(/icons/logo-nike.png)' }}></div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          data-aous-delay="0"
          className={`bg-ct ${styles.collaboratorBox}`}
          style={{ backgroundImage: 'url(/icons/jp-logo.png)' }}></div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          data-aous-delay="0"
          className={`bg-ct ${styles.collaboratorBox}`}
          style={{ backgroundImage: 'url(/icons/una-logo.png)' }}></div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          data-aous-delay="0"
          className={`bg-ct ${styles.collaboratorBox}`}
          style={{ backgroundImage: 'url(/icons/rise-logo.png)' }}></div>
      </div>
    </section>
  );
};

export default Clients;
