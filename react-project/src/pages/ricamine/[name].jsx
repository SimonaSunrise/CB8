import { useRouter } from "next/router";
import styles from "../../styles/ricamine.module.scss";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Ricamine() {
  const router = useRouter();
  const [ricamineData, setRicamineData] = useState([]);
  const nameQuery = router.query.name;
  const nameQuerySpace = nameQuery?.replace("+", " ");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setRicamineData(data));
  }, [router.query.name]);

  const [firstName, lastName] = nameQuery ? nameQuery.split("+") : ["", ""];

  const Client = ricamineData.find(
    (client) =>
      client.first_name.toLowerCase() === firstName.toLowerCase() &&
      client.last_name.toLowerCase() === lastName.toLowerCase()
  );
  const genderIcon = Client?.gender === "female" ? "💗" : "💙";
  const trustIcon = Client?.trust === "true" ? "✅" : "❌";

  let frequencyPropriety;
  switch (Client?.frequency) {
    case "Often":
      frequencyPropriety = "Spesso";
      break;
    case "Monthly":
      frequencyPropriety = "Mensilmente";
      break;
    case "Once":
      frequencyPropriety = "Una volta";
      break;
    case "Yearly":
      frequencyPropriety = "Annualmente";
      break;
    case "Weekly":
      frequencyPropriety = "Settimanalmente";
      break;
    case "Never":
      frequencyPropriety = "Quasi mai";
      break;
    case "Daily":
      frequencyPropriety = "Giornalmente";
      break;
    case "Seldom":
      frequencyPropriety = "Raramente";
      break;
    default:
      frequencyPropriety = "Valore non gestito";
  }

  return (
    <>
      {Client && (
        <div className={styles.Ricamine}>
          <div className={styles.Card}>
            <div className={styles.Btn}>
              <button className={styles.Btn_Edit}>✏️</button>
              <button className={styles.Btn_Delete}>✖️</button>
              <button className={styles.Btn_AddBlackList}>❌</button>
            </div>
            <img src={Client.image} />
            <div>
              <h3>
                {Client.first_name} {Client.last_name} {trustIcon}
              </h3>
            </div>
            <div>
              <p>{Client.email}</p>
              <p> 📞 {Client.phone} </p>
            </div>
          </div>
          <div className={styles.Card_}>
            <div>
              <p> Genere: {genderIcon}</p>
            </div>
            <div>
              <p>Città: {Client.city} 🌍</p>
            </div>
            <div>
              <p>
                Facebook: <Link href={Client.social}>#️⃣</Link>
              </p>{" "}
            </div>

            <div>
              <p>
                Ricamina <br />
                dal {Client.first}
              </p>
            </div>
          </div>

          <div className={styles.Card_Detail}>
            <h4>Dettagli</h4>
            <div>
              <p>Frequenza acquisto: {frequencyPropriety}</p>
            </div>
            <div>
              <p>
                Apparecchio: <br /> {Client.model}{" "}
              </p>
              <p> Telaio: {Client.chassis}</p>
            </div>
            <div>
              <p>
                Ultimo acquisto: <br />
                {Client.last}
              </p>
            </div>
            <div>
              <p>
                Metodo di pagamento: <br /> {Client.payment.toUpperCase()} 💳
              </p>
            </div>
            <div>
              <p>
                Spesa totale: <br /> {Client.purchases}
              </p>
            </div>
            <div>
              <br />
              <h4>File Acquistati 📁 </h4>
              <ul className={styles.Card_Products}>
                <li>{Client.file}</li>
                <li>{Client.file_a}</li>
                <li>{Client.file_b}</li>
                <li>{Client.file_c}</li>
                <li>{Client.file_d}</li>
                <li>{Client.file_e}</li>
                <li>{Client.file_f}</li>
                <li>{Client.file_g}</li>
              </ul>
            </div>
          </div>
          <div className={styles.Card_Notes}>
            <div>
              <br />
              <h4>Note</h4>
              <p>{Client.notes}</p>
            </div>
          </div>
        </div>
      )}
      {!Client && (
        <div className={styles.Ricamine}>
          <div className={styles.Ricamina_NotFound}>
            <h1>Ricamina non trovata</h1>
            <h4>
              {nameQuerySpace} non sembra essere una tua ricamina, per il
              momento!
            </h4>
            <h5>Se lo è aggiugila adesso: </h5>
            <Link href="/add">
              <button className={styles.button}>Add</button>{" "}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
