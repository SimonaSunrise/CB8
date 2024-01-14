import { useState } from "react";
import styles from "./index.module.scss";
const Todoitem = ({ todoData, setTodoList }) => {
  const { id, todo, completed } = todoData;

  const [Checked, setChecked] = useState(completed);

  const onHandleChange = () => {
    setChecked(!Checked);
  };

  const onHandleDelete = () => {
    const confirmIt = confirm("For sure?");

    if (confirmIt) {
      setTodoList((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  return (
    <div className={styles.Todoitem}>
      <li className={styles.custom_underline}> {todo} </li>
      <div className={styles.Option}>
        <input
          type="checkbox"
          id="myCheckbox"
          checked={Checked}
          onChange={onHandleChange}
        />
        <span className={styles.Trash} onClick={onHandleDelete}>
          🗑️
        </span>
      </div>
    </div>
  );
};

export default Todoitem;
