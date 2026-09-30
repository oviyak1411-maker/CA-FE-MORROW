import styles from './Visit.module.css';

export default function Visit() {
  return (
    <section id="visit" className={styles.visit}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.info}>
            <p className={styles.eyebrow}>Visit Us</p>
            <h2 className={styles.heading}>
              Come Say <span className={styles.accent}>Hello</span>
            </h2>
            <p className={styles.text}>
              We're located in the heart of the neighborhood, just steps from the park. 
              Whether you're grabbing a quick coffee on your commute or settling in for a 
              slow Sunday morning, we'd love to see you.
            </p>

            <div className={styles.details}>
              <div className={styles.detail}>
                <span className={styles.icon}>&#128205;</span>
                <div>
                  <p className={styles.detailLabel}>Address</p>
                  <p className={styles.detailValue}>123 Morrow Lane, Downtown</p>
                </div>
              </div>
              <div className={styles.detail}>
                <span className={styles.icon}>&#128337;</span>
                <div>
                  <p className={styles.detailLabel}>Hours</p>
                  <p className={styles.detailValue}>Mon–Fri: 7am – 6pm</p>
                  <p className={styles.detailValue}>Sat–Sun: 8am – 5pm</p>
                </div>
              </div>
              <div className={styles.detail}>
                <span className={styles.icon}>&#128222;</span>
                <div>
                  <p className={styles.detailLabel}>Phone</p>
                  <p className={styles.detailValue}>(555) 123-4567</p>
                </div>
              </div>
              <div className={styles.detail}>
                <span className={styles.icon}>&#9993;</span>
                <div>
                  <p className={styles.detailLabel}>Email</p>
                  <p className={styles.detailValue}>hello@cafemorrow.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.mapPlaceholder}>
            <div className={styles.mapContent}>
              <span className={styles.mapIcon}>&#128506;</span>
              <p>Find us at 123 Morrow Lane</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapLink}
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
