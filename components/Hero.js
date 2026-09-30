import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect fill='%232a1810' width='1920' height='1080'/%3E%3C/svg%3E"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-pouring-coffee-into-a-glass-3537/1080p.mp4"
          type="video/mp4"
        />
      </video>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <p className={styles.tagline}>Specialty Coffee &amp; Thoughtful Food</p>
        <h1 className={styles.title}>
          Slow Down.
          <br />
          <span className={styles.titleAccent}>Savor More.</span>
        </h1>
        <p className={styles.subtitle}>
          Specialty coffee, thoughtful food, and
          moments worth lingering over.
        </p>
        <div className={styles.buttons}>
          <a href="#menu" className={styles.primaryBtn}>Explore Menu</a>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  );
}
