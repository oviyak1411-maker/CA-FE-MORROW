import styles from './Gallery.module.css';

const galleryItems = [
  { icon: '&#9749;', label: 'Signature Latte Art', color: '#c8956c' },
  { icon: '&#127838;', label: 'Fresh Pastries Daily', color: '#e8d5c4' },
  { icon: '&#127869;', label: 'Cozy Morning Vibes', color: '#8b9a7d' },
  { icon: '&#127807;', label: 'Garden Patio Seating', color: '#a3b899' },
  { icon: '&#127856;', label: 'Fresh Baked Goods', color: '#d4a574' },
  { icon: '&#9728;', label: 'Golden Hour Here', color: '#f0c8a0' },
];

export default function Gallery() {
  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Gallery</p>
          <h2 className={styles.heading}>
            Moments at <span className={styles.accent}>CA`FE MORROW</span>
          </h2>
          <p className={styles.subtitle}>
            A glimpse into our world — where every cup tells a story and every visit feels like home.
          </p>
        </div>

        <div className={styles.grid}>
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={styles.galleryItem}
              style={{ backgroundColor: item.color }}
            >
              <span className={styles.icon}>{item.icon}</span>
              <p className={styles.label}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
