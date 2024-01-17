export default function Page404() {
  return (
    <div className={styles.NotFoundPage}>
      <h1>Oops! Pagina non trovata</h1>
      <p>
        Ci dispiace, ma la pagina che stai cercando potrebbe non esistere o
        essere stata spostata altrove.
      </p>
      <img src="https://i.imgur.com/UNHWBsw.png" alt="404 Cat" />
    </div>
  );
}
