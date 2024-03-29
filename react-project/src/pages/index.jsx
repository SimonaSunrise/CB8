import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ricamine</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.Main_Page}>
        <div className={styles.Section_Btn}>
          <ul>
            <li>
              <Link href="/add">
                <button className={styles.button}>ADD RICAMINA</button>{" "}
              </Link>
            </li>
            <li>
              <Link href="/statistics">
                <button className={styles.button}>STATISTICS</button>
              </Link>
            </li>
            <li>
              <Link href="/blacklist">
                <button className={styles.button}>BLACK LIST</button>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <button className={styles.button}>ABOUT</button>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.Section_Todo}>
          <textarea
            className={styles.Post_it}
            placeholder="Scrivi le tue note"
          ></textarea>
          <textarea
            className={styles.Post_it}
            placeholder="Anche qui puoi scrivere le tue note"
          ></textarea>
          <button className={styles.button_}>SALVA</button>
        </div>
      </div>
    </>
  );
}
