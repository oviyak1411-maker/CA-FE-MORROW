import './globals.css';

export const metadata = {
  title: "CA`FE MORROW — Artisan Coffee & Kitchen",
  description: "A neighborhood cafe serving artisan coffee, fresh pastries, and seasonal dishes. Tomorrow's comfort food, today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
