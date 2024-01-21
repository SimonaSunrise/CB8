import styles from "./index.module.scss";
import Navbar from "../../components/navbar/Navbar";

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <Navbar />
      <div className={styles.Contact_}>
        <h1>Contatti</h1>
        <p>
          Benvenuto nella pagina dei contatti di LibrApp! Per qualsiasi domanda
          o informazione, non esitare a contattarci.
        </p>

        <div>
          <h2>Ecco come:</h2>
          <p>
            Email:{" "}
            <a href="mailto:supporto@librapp.com">supporto@librapp.com</a>
          </p>
          <p>Telefono: +39 012 345 6789</p>
          <p>Indirizzo: Via dei Libri, 123, 00123 Città dei Libri, Italia</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
