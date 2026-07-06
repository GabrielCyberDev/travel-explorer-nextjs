import CardDestino from "../../components/CardDestino/CardDestino";
import { destinos } from "../../data/destinos";
import styles from "../../styles/Destinos.module.css";

export default function Destinos() {
  return (
    <>
      <h1 className={styles.title}>Destinos Turísticos</h1>

      <div className={styles.grid}>
        {destinos.map((destino) => (
          <CardDestino
            key={destino.id}
            destino={destino}
          />
        ))}
      </div>
    </>
  );
}