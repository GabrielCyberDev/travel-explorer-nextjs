import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { destinos } from "../../data/destinos";
import styles from "../../styles/Detalhes.module.css";

export default function DetalhesDestino() {
  const router = useRouter();

  const { id } = router.query;

  const destino = destinos.find(
    (item) => item.id === Number(id)
  );

  if (!destino) {
    return <h2>Destino não encontrado.</h2>;
  }

  return (
    <div className={styles.container}>
      <Image
        src={destino.imagem}
        alt={destino.nome}
        width={1200}
        height={675}
        priority
        className={styles.image}
      />

      <h1>{destino.nome}</h1>

      <p>{destino.descricao}</p>

      <Link
        href="/destinos"
        className={styles.button}
      >
        ← Voltar para Destinos
      </Link>
    </div>
  );
}