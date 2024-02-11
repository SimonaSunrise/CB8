import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import BackButton from "@/components/backbutton";

export default function Blacklist() {
  const [badClients, setBadClients] = useState([]);
  const router = useRouter();
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredClients = data.filter((client) => client.trust === false);
        setBadClients(filteredClients);
      });
  }, []);

  return (
    <div className={styles.Blacklist}>
      <div className={styles.Blacklist_Card}>
        <h2>❌ Black List ❌</h2>
        <table>
          <thead>
            <tr>
              <th>Chi?</th>
              <th>e perchè?</th>
            </tr>
          </thead>
          <tbody>
            {badClients.map((client, index) => (
              <tr key={index}>
                <td>
                  {client.first_name} {client.last_name}
                </td>
                <td>{client.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <button className={styles.button}>
            Aggiungi Ricamina alla BlackList
          </button>
          <button className={styles.button}>Modifica la BlackList</button>
          <BackButton />
        </div>
      </div>
    </div>
  );
}
