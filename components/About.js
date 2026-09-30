import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.text}>
            <p className={styles.eyebrow}>Our Story</p>
            <h2 className={styles.heading}>
              A Place Where <span className={styles.accent}>Tomorrow</span> Meets Today
            </h2>
            <p className={styles.paragraph}>
              CA`FE MORROW was born from a simple belief: that the best moments in life 
              happen over a perfect cup of coffee. We source our beans from sustainable 
              farms around the world, roast them in-house, and pour our hearts into every cup.
            </p>
            <p className={styles.paragraph}>
              But we're more than just coffee. Our kitchen serves seasonal comfort food 
              made with locally sourced ingredients — from flaky croissants at sunrise 
              to hearty grain bowls at lunch. Every dish is crafted to make your tomorrow 
              a little brighter.
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>12+</span>
                <span className={styles.statLabel}>Single Origin Beans</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Locally Sourced</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>7</span>
                <span className={styles.statLabel}>Days a Week</span>
              </div>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <div className={styles.imagePlaceholder}>
              <div className={styles.imageContent}>
                <span className={styles.imageIcon}>&#9749;</span>
                <p>Crafting moments since 2024</p>
              </div>
            </div>
            <div className={styles.floatingCard}>
              <span className={styles.floatingIcon}>&#10024;</span>
              <p>&ldquo;The coziest spot in town&rdquo;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
