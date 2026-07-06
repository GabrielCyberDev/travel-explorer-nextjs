import Image from "next/image";
import Link from "next/link";
import { Destino } from "../../data/destinos";
import styles from "./CardDestino.module.css";

interface Props {
  destino: Destino;
}

export default function CardDestino({ destino }: Props) {
  return (
    <div className={styles.card}>
      <Image
        src={destino.imagem}
        alt={destino.nome}
        width={400}
        height={250}
        className={styles.image}
      />

      <div className={styles.content}>
        <div className={styles.top}>
          <h3>📍 {destino.nome}</h3>
          <span>{destino.pais}</span>
        </div>

        <p className={styles.subtitle}>{destino.subtitulo}</p>

        <p className={styles.resume}>{destino.resumo}</p>

        <Link href={`/destinos/${destino.id}`} className={styles.button}>
          Ver detalhes →
        </Link>
      </div>
    </div>
  );
}