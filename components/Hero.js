import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <p className={styles.tagline}>Est. 2024 — Artisan Coffee & Kitchen</p>
        <h1 className={styles.title}>
          Where Every Morning
          <br />
          <span className={styles.titleAccent}>Begins Beautifully</span>
        </h1>
        <p className={styles.subtitle}>
          Handcrafted coffee, fresh-baked pastries, and seasonal comfort food
          in the heart of the neighborhood.
        </p>
        <div className={styles.buttons}>
          <a href="#menu" className={styles.primaryBtn}>Explore Our Menu</a>
          <a href="#visit" className={styles.secondaryBtn}>Find Us</a>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  );
}
