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
      <div className={styles.wrapperCollaborators}>
        <div className={`${styles.collaboratorsContainer} flex j-c a-c`}>
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aous-delay="0"
            className={`bg-ct ${styles.collaboratorBox}`}
            style={{ backgroundImage: 'url(/icons/nike.jpg)' }}></div>
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aous-delay="0"
            className={`bg-ct ${styles.collaboratorBox}`}
            style={{ backgroundImage: 'url(/icons/jp-logo.jpg)' }}></div>
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aous-delay="0"
            className={`bg-ct ${styles.collaboratorBox}`}
            style={{ backgroundImage: 'url(/icons/ubs.jpg)' }}></div>
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aous-delay="0"
            className={`bg-ct ${styles.collaboratorBox}`}
            style={{ backgroundImage: 'url(/icons/visa.jpg)' }}></div>
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aous-delay="0"
            className={`bg-ct ${styles.collaboratorBox}`}
            style={{ backgroundImage: 'url(/icons/nba.jpg)' }}></div>
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aous-delay="0"
            className={`bg-ct ${styles.collaboratorBox}`}
            style={{ backgroundImage: 'url(/icons/ote.jpg)' }}></div>
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aous-delay="0"
            className={`bg-ct ${styles.collaboratorBox}`}
            style={{ backgroundImage: 'url(/icons/paypal.jpg)' }}></div>
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aous-delay="0"
            className={`bg-ct ${styles.collaboratorBox}`}
            style={{ backgroundImage: 'url(/icons/rise.jpg)' }}></div>
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aous-delay="0"
            className={`bg-ct ${styles.collaboratorBox}`}
            style={{ backgroundImage: 'url(/icons/robert.jpg)' }}></div>
        </div>
        <div className={`${styles.collaboratorsContainer} flex j-c a-c`}>
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aous-delay="0"
            className={`bg-ct ${styles.collaboratorBox}`}
            style={{ backgroundImage: 'url(/icons/nike.jpg)' }}></div>
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aous-delay="0"
            className={`bg-ct ${styles.collaboratorBox}`}
            style={{ backgroundImage: 'url(/icons/jp-logo.jpg)' }}></div>
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aous-delay="0"
            className={`bg-ct ${styles.collaboratorBox}`}
            style={{ backgroundImage: 'url(/icons/ubs.jpg)' }}></div>
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aous-delay="0"
            className={`bg-ct ${styles.collaboratorBox}`}
            style={{ backgroundImage: 'url(/icons/visa.jpg)' }}></div>
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aous-delay="0"
            className={`bg-ct ${styles.collaboratorBox}`}
            style={{ backgroundImage: 'url(/icons/nba.jpg)' }}></div>
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aous-delay="0"
            className={`bg-ct ${styles.collaboratorBox}`}
            style={{ backgroundImage: 'url(/icons/ote.jpg)' }}></div>
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aous-delay="0"
            className={`bg-ct ${styles.collaboratorBox}`}
            style={{ backgroundImage: 'url(/icons/paypal.jpg)' }}></div>
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aous-delay="0"
            className={`bg-ct ${styles.collaboratorBox}`}
            style={{ backgroundImage: 'url(/icons/rise.jpg)' }}></div>
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aous-delay="0"
            className={`bg-ct ${styles.collaboratorBox}`}
            style={{ backgroundImage: 'url(/icons/robert.jpg)' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
