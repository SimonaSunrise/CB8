import styles from "./index.module.scss";
import { useRouter } from "next/router";

function BackButton() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <button onClick={handleGoBack} className={styles.button}>
      Indietro
    </button>
  );
}

export default BackButton;
