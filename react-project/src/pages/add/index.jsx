import styles from "./index.module.scss";
import BackButton from "@/components/backbutton";

export default function Add() {
  return (
    <>
      <div className={styles.Add}>
        <div className={styles.Add_Form}>
          <h2>Add Client</h2>
          <form action="/submit_client" className={styles.Form}>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="surname">Cognome:</label>
            <input type="text" id="surname" name="surname" required />
            <label htmlFor="gender">Sesso:</label>
            <select id="gender" name="gender" required>
              <option value="F">Femmina</option>
              <option value="M">Maschio</option>
              <option value="Altro">Altro</option>
            </select>
            <br />
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" required />
            <label htmlFor="phone">Telefono</label>
            <input type="text" id="phone" name="phone" required />
            <label htmlFor="city">Città</label>
            <input type="text" id="city" name="city" required />
            <label htmlFor="social">Account Social</label>
            <input type="text" id="social" name="social" required />
            <label htmlFor="model">Attrezzatura</label>
            <input type="text" id="model" name="model" required />
            <label htmlFor="chassis">Telaio</label>
            <input type="text" id="chassis" name="chassis" required />
            <label htmlFor="text">Note</label> <br />
            <textarea
              type="text-area"
              id="text"
              name="text"
              required
              rows="8"
              cols="22"
              readOnly
            />
            <input
              type="file"
              accept="image/jpeg"
              className={styles.Add_File}
            />
            <input type="submit" value="Add" className={styles.Btn_Add} />
            <br />
            <BackButton className={styles.BackButton} />
          </form>
        </div>
      </div>
    </>
  );
}
