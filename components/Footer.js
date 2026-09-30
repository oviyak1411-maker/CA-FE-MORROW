import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <p className={styles.logo}>
              CA`FE <span className={styles.logoAccent}>MORROW</span>
            </p>
            <p className={styles.tagline}>
              Tomorrow's comfort food, today. Artisan coffee, fresh pastries, 
              and seasonal dishes in the heart of the neighborhood.
            </p>
            <div className={styles.socials}>
              <a href="#" aria-label="Instagram" className={styles.social}>&#128247;</a>
              <a href="#" aria-label="Twitter" className={styles.social}>&#120143;</a>
              <a href="#" aria-label="Facebook" className={styles.social}>&#120336;</a>
            </div>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Explore</h4>
              <a href="#about" className={styles.link}>About Us</a>
              <a href="#menu" className={styles.link}>Menu</a>
              <a href="#gallery" className={styles.link}>Gallery</a>
              <a href="#visit" className={styles.link}>Visit</a>
            </div>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Hours</h4>
              <p className={styles.linkText}>Mon–Fri: 7am – 6pm</p>
              <p className={styles.linkText}>Sat–Sun: 8am – 5pm</p>
            </div>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Contact</h4>
              <p className={styles.linkText}>123 Morrow Lane</p>
              <p className={styles.linkText}>(555) 123-4567</p>
              <p className={styles.linkText}>hello@cafemorrow.com</p>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} CA`FE MORROW. All rights reserved.</p>
          <p className={styles.credit}>Made with &#10084; and lots of coffee</p>
        </div>
      </div>
    </footer>
  );
}
