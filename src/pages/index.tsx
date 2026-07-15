import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.overlay}>
          <h1>Travel Explorer</h1>

          <p>Descubra os destinos mais incríveis do mundo</p>

          <Link href="/destinos" className={styles.button}>
            Explorar destinos
          </Link>
        </div>
      </section>

      <section className={styles.stats}>
        <div>🌍 6 Destinos</div>
        <div>✈️ Experiências únicas</div>
        <div>📷 Lugares incríveis</div>
      </section>
    </main>
  );
}