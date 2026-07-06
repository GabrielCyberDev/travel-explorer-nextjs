import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          ✈ Travel Explorer
        </Link>

        <nav>
          <ul className={styles.menu}>
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/destinos">Destinos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}