import styles from './Testimonials.module.css';

const testimonials = [
  {
    text: "The Morrow Latte is pure magic. I've been coming here every morning for six months and it never gets old. The atmosphere is warm, the staff remembers your name, and the coffee is consistently perfect.",
    author: 'Sarah M.',
    role: 'Regular since day one',
  },
  {
    text: "CA`FE MORROW is my remote office, my meeting spot, and my Sunday ritual. The harvest grain bowl is incredible and the wifi is fast. What more could you want?",
    author: 'James K.',
    role: 'Freelance designer',
  },
  {
    text: "I brought my mom here for her birthday and she absolutely loved it. The cardamom buns are out of this world. This place has such a special energy — it feels like a hug in cafe form.",
    author: 'Priya R.',
    role: 'Weekend visitor',
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Kind Words</p>
          <h2 className={styles.heading}>
            What Our <span className={styles.accent}>Guests</span> Say
          </h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.stars}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className={styles.quote}>&ldquo;{t.text}&rdquo;</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.author[0]}</div>
                <div>
                  <p className={styles.name}>{t.author}</p>
                  <p className={styles.role}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
