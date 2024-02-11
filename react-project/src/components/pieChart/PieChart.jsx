import { useState, useEffect } from "react";
import Chart from "react-google-charts";
import styles from "./index.module.scss";

const PieChart = () => {
  const [paymentData, setPaymentData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const paymentCounts = countPaymentMethods(data);
        setPaymentData(paymentCounts);
      });
  }, []);

  const countPaymentMethods = (data) => {
    const paymentCounts = {};

    data.forEach((client) => {
      const paymentMethod = client.payment;
      if (paymentCounts[paymentMethod]) {
        paymentCounts[paymentMethod]++;
      } else {
        paymentCounts[paymentMethod] = 1;
      }
    });

    return Object.entries(paymentCounts);
  };
  return (
    <div className={styles.PieChart}>
      <Chart
        width={"500px"}
        height={"300px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[["Payment Method", "Count"], ...paymentData]}
        options={{
          title: "Metodi di pagamento",
        }}
      />
    </div>
  );
};

export default PieChart;
