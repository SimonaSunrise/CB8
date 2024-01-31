import styles from "./index.module.scss";
const Quotes = ({ paragraph, title, imageSrc }) => {
  return (
    <div className={styles.Quotes}>
      <div className={styles.text}>
        <p>{paragraph}</p>
        <h2>{title} </h2>
      </div>
      <div className={styles.pics}>
        <img src={imageSrc} alt={title} />
      </div>
    </div>
  );
};

export default Quotes;
