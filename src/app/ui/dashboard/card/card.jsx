import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const item = {
    title: "Valor del Dolar",
    number: 10.900,
    change: 12
}

function Card() {
  return (
    <div className={styles.container}>
    <MdSupervisedUserCircle size={24} />
    <div className={styles.texts}>
      <span className={styles.title}>{item.title}</span>
      <span className={styles.number}>{item.number}</span>
      <span className={styles.detail}>
        <span className={item.change > 0 ? styles.positive : styles.negative}>
          {item.change}%
        </span>{" "}
        {item.change > 0 ? "more" : "less"} que la semana anterior.
      </span>
    </div>
  </div>
  )
}

export default Card