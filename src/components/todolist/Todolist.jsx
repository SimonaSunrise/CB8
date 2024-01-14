import Todoitem from "../todoitem/Todoitem";
import styles from "./index.module.scss";

const Todolist = ({ todoListData, setTodoList }) => {
  return (
    <ul className={styles.Todolist}>
      {todoListData.map((item) => (
        <Todoitem setTodoList={setTodoList} todoData={item} key={item.id} />
      ))}{" "}
    </ul>
  );
};

export default Todolist;
