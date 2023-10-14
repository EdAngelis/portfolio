import { AppProvider } from "../context";
import Home from "../home/home";
import Header from "../components/header/header";
import styles from "./page.module.css";

export default function Page() {
  return (
    <AppProvider>
      <main className={styles.container}>
        <Header />
        <Home />
      </main>
    </AppProvider>
  );
}
