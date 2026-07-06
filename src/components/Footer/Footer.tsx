import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h2>✈ Travel Explorer</h2>

      <p>
        Descubra lugares incríveis e inspire sua próxima aventura.
      </p>

      <div className={styles.links}>
        <Link href="/">Home</Link>

        <Link href="/destinos">Destinos</Link>
      </div>

      <span>
        © 2026 Travel Explorer • Desenvolvido com Next.js + TypeScript
      </span>
    </footer>
  );
}