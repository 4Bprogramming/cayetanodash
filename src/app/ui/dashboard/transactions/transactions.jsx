import styles from "./transactions.module.css";
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";

function Transactions() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Nombre</td>
            <td>Estatus</td>
            <td>Date</td>
            <td>Correo</td>
            <td>Edad</td>
            <td>Acción</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>John Doe</div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>hola@gmail.com</td>
            <td>25</td>
            <td>
              <FiEdit />
              <BsTrash />
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>John Doe</div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>14.02.2024</td>
            <td>hola@gmail.com</td>
            <td>25</td>
            <td>
              <FiEdit />
              <BsTrash />
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>John Doe</div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>14.02.2024</td>
            <td>hola@gmail.com</td>
            <td>25</td>
            <td>
              <FiEdit />
              <BsTrash />
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>John Doe</div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>hola@gmail.com</td>
            <td>25</td>
            <td>
              <FiEdit />
              <BsTrash />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
