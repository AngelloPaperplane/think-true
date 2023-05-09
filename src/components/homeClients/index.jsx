import React from 'react';
import styles from './home-clients.module.css';

const Clients = () => {
  return (
    <section className={`siteSection ${styles.clientsSection}`}>
      <div className={`container ${styles.clientsContainer}`}>
        <h2 className={`${styles.clientsTitle} bold uppercase news`}>
          Clients
        </h2>
        <h3 className={`${styles.subtitleClients} news`}>
          MULTICULTURALISM IS THE DEFAULT
        </h3>
        <p className={styles.infoClients}>
          We aim to raise the standards of the marketing industry to ensure
          diverse perspectives are acknowledged, engaged, and amplified.
        </p>
        <p className={styles.infoCollaborators}>These are our collaborators.</p>
      </div>
      <div className={`${styles.collaboratorsContainer} flex j-c a-c`}>
        <div
          className={`bg-ct ${styles.collaboratorBox}`}
          style={{ backgroundImage: 'url(/icons/logo-nike.png)' }}></div>
        <div
          className={`bg-ct ${styles.collaboratorBox}`}
          style={{ backgroundImage: 'url(/icons/jp-logo.png)' }}></div>
        <div
          className={`bg-ct ${styles.collaboratorBox}`}
          style={{ backgroundImage: 'url(/icons/una-logo.png)' }}></div>
        <div
          className={`bg-ct ${styles.collaboratorBox}`}
          style={{ backgroundImage: 'url(/icons/rise-logo.png)' }}></div>
      </div>
    </section>
  );
};

export default Clients;
