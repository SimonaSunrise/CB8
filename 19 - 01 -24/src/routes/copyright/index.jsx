import styles from "./index.module.scss";
import Navbar from "../../components/navbar/Navbar";

export default function Copyright() {
  return (
    <section className={styles.Copyright}>
      <Navbar />

      <header>
        <h1>Copyright e Regolamento</h1>{" "}
      </header>

      <main>
        <h2>Diritti d'autore</h2>
        <p>
          Tutti i diritti d'autore dell'applicazione e dei suoi contenuti sono
          riservati. È vietato copiare, riprodurre, distribuire o utilizzare in
          qualsiasi modo senza il permesso esplicito degli sviluppatori.
        </p>
        <h2>Marchi commerciali</h2>
        <p>
          I marchi commerciali, i loghi e i nomi dei prodotti sono di proprietà
          dei rispettivi proprietari. L'uso di tali marchi è solo a scopo
          identificativo e non implica alcuna affiliazione con o approvazione da
          parte dei titolari dei marchi.
        </p>

        <h2>Regolamento dell'utente</h2>
        <p>
          L'uso dell'applicazione è soggetto ai seguenti termini e condizioni:
        </p>
        <ul>
          <li>1. Gli utenti devono rispettare la legge applicabile.</li>
          <li>
            2. È vietato utilizzare l'applicazione in modo fraudolento o
            dannoso.
          </li>
          <li>
            3. L'utente è responsabile delle informazioni condivise tramite
            l'applicazione.
          </li>
        </ul>
      </main>
      <footer>
        <p>&copy; 2024 Nome dell'Applicazione. Tutti i diritti riservati.</p>
      </footer>
    </section>
  );
}
