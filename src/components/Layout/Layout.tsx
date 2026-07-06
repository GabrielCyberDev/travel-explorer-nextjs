import { ReactNode } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className={styles.layout}>
      <Header />

      <main className={styles.main}>{children}</main>

      <Footer />
    </div>
  );
}