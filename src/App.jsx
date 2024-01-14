import { useState, useEffect } from "react";
import styles from "./App.module.scss";
import Header from "./components/header/Header";
import Todolist from "./components/todolist/Todolist";
import Additem from "./components/additem/AddItem";

function App() {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => setTodoList(data.todos));
  }, []);

  return (
    <div className={styles.App}>
      <Header />
      <Additem setTodoList={setTodoList} />
      <Todolist todoListData={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
