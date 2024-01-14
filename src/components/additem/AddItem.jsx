import styles from "./index.module.scss";
import { useState } from "react";

const Additem = ({ setTodoList }) => {
  const [InputValue, SetInputValue] = useState("");

  const onInputChange = (e) => {
    SetInputValue(e.target.value);
  };
  const onHandleBtnClick = (e) => {
    SetInputValue("");
  };
  const onHandleSumbmit = (e) => {
    const newTodo = {
      id: Math.floor(Math.random() * 9999) * new Date(),
      completed: false,
      userId: 5678,
      todo: InputValue,
    };

    e.preventDefault();
    setTodoList((prev) => [newTodo, ...prev]);

    SetInputValue("");
  };

  return (
    <form className={styles.Form_Box} onSubmit={onHandleSumbmit}>
      <input
        id="todo"
        type="text"
        onChange={onInputChange}
        value={InputValue}
        placeholder="I have to.."
      />
      <div className={styles.Btn_Box}>
        <input type="submit" value="Add" className={styles.Add} />
        <button type="button" onClick={onHandleBtnClick}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default Additem;
