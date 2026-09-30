import styles from './Menu.module.css';

const menuItems = [
  {
    category: 'Coffee',
    items: [
      { name: 'Morrow Latte', description: 'Double espresso, steamed milk, house caramel drizzle', price: '$5.50' },
      { name: 'Cloud Cappuccino', description: 'Velvety microfoam, single origin espresso, cocoa dust', price: '$5.00' },
      { name: 'Golden Hour Cold Brew', description: '18-hour steep, orange peel, vanilla bean', price: '$5.75' },
      { name: 'Espresso Tonic', description: 'Bright, refreshing, botanical — served over ice', price: '$6.00' },
    ],
  },
  {
    category: 'Kitchen',
    items: [
      { name: 'Sunrise Croissant', description: 'Flaky butter croissant, house jam, whipped ricotta', price: '$6.50' },
      { name: 'Harvest Grain Bowl', description: 'Roasted vegetables, quinoa, tahini dressing, seeds', price: '$12.00' },
      { name: 'Morrow Toast', description: 'Sourdough, avocado, poached egg, chili crunch', price: '$10.50' },
      { name: 'Seasonal Tartine', description: 'Chef\'s daily selection — ask your barista', price: '$9.00' },
    ],
  },
  {
    category: 'Pastries',
    items: [
      { name: 'Cardamom Bun', description: 'Swirled with cardamom butter, pearl sugar', price: '$4.50' },
      { name: 'Brown Butter Cookie', description: 'Crispy edges, gooey center, flaky salt', price: '$3.75' },
      { name: 'Seasonal Scone', description: 'Made fresh daily with local fruit', price: '$4.25' },
      { name: 'Banana Bread', description: 'Toasted, salted butter, honey drizzle', price: '$4.00' },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className={styles.menu}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Our Menu</p>
          <h2 className={styles.heading}>
            Crafted with <span className={styles.accent}>Love</span>
          </h2>
          <p className={styles.subtitle}>
            Every item on our menu is made from scratch, using the finest ingredients 
            we can find. Here's a taste of what we're serving.
          </p>
        </div>

        <div className={styles.menuGrid}>
          {menuItems.map((section) => (
            <div key={section.category} className={styles.menuSection}>
              <h3 className={styles.categoryTitle}>{section.category}</h3>
              <div className={styles.items}>
                {section.items.map((item) => (
                  <div key={item.name} className={styles.menuItem}>
                    <div className={styles.itemHeader}>
                      <span className={styles.itemName}>{item.name}</span>
                      <span className={styles.dots}></span>
                      <span className={styles.itemPrice}>{item.price}</span>
                    </div>
                    <p className={styles.itemDescription}>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.menuFooter}>
          <p>Full menu available in-store and for order-ahead pickup</p>
          <a href="#visit" className={styles.menuCta}>Order Ahead</a>
        </div>
      </div>
    </section>
  );
}
