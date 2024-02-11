import styles from "./index.module.scss";
import BackButton from "@/components/backbutton";

export default function About() {
  return (
    <div className={styles.About}>
      <div className={styles.About_}>
        <h4>Ricamine</h4>
        <p>
          Il nostro gestionale clienti è uno strumento completo e intuitivo
          progettato per semplificare la gestione dei tuoi contatti più
          preziosi: i clienti. Con una vasta gamma di funzionalità e strumenti
          personalizzati, ti offriamo tutto ciò di cui hai bisogno per mantenere
          una visione chiara e organizzata dei tuoi clienti e delle tue
          attività. Ciascun cliente è più di un semplice nome nella lista. Con
          <span> Ricamine</span>, puoi creare schede personali dettagliate per
          ogni cliente, complete di informazioni anagrafiche, immagini,
          frequenze di acquisto e livello di fiducia. Questo ti consente di
          avere sempre a portata di mano tutte le informazioni necessarie per
          offrire un servizio personalizzato e di qualità superiore.{" "}
        </p>
        <p>
          Ma non è tutto: il nostro gestionale clienti va oltre la semplice
          archiviazione dei dati. Ti mettiamo anche a disposizione strumenti
          potenti per gestire la tua clientela in modo efficace. Puoi facilmente
          aggiungere o rimuovere clienti dalla <span>black list</span>,
          garantendo la massima sicurezza e tutela per la tua attività. Inoltre,
          ti offriamo la possibilità di accedere a statistiche dettagliate sui
          tuoi prodotti e sui tuoi clienti. Questo ti permette di analizzare le
          tendenze di acquisto, individuare i prodotti più popolari e capire
          meglio le esigenze dei tuoi clienti, consentendoti di prendere
          decisioni informate per migliorare le tue strategie di vendita. E se
          mai dovessi avere bisogno di trovare un cliente specifico tra la tua
          vasta lista, non preoccuparti: la nostra barra di ricerca intuitiva ti
          permette di trovare rapidamente il cliente che stai cercando,
          risparmiandoti tempo prezioso.
        </p>
        <p>
          Con <span>Ricamine </span>, prendi il controllo della gestione dei
          tuoi clienti e porta la tua attività al livello successivo. Siamo qui
          per aiutarti a crescere e avere successo! Grazie per aver scelto{" "}
          <span>Ricamine </span>. <br />
          Se hai domande o hai bisogno di assistenza, non esitare a contattare
          il nostro team di supporto. Siamo qui per te!
        </p>
        <BackButton />
      </div>
    </div>
  );
}
