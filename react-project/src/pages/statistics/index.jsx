import styles from "./index.module.scss";
import PieChart from "@/components/pieChart/PieChart";
export default function Statistics() {
  return (
    <div className={styles.Statistics}>
      <h1>Come sta andando?</h1>
      <div className={styles.Statistics_}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          possimus maiores, deserunt beatae soluta dolorem eum enim,
          exercitationem in quae laudantium temporibus laborum quis corporis
          dolorum magni delectus nisi sit ducimus ullam illum! Esse!
        </p>
        <div>
          <PieChart />
        </div>
      </div>
    </div>
  );
}
