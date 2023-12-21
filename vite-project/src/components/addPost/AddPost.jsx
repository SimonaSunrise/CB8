import { useState } from "react";
import "./index.css";

const AddPost = ({ setPostListData }) => {
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  const onHandleSubmit = (event) => {
    event.preventDefault();

    setPostListData((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        title: inputValue,
        body: textareaValue,
        userId: 99,
        tags: ["coding", "bootcamp"],
        reactions: 999,
      },
    ]);

    onHandleClear();
  };
  const onHandleInputValue = (event) => {
    setInputValue(event.target.value);
  };
  const onHandleTextareaValue = (event) => {
    setTextareaValue(event.target.value);
  };

  const onHandleClear = () => {
    setInputValue("");
    setTextareaValue("");
  };
  return (
    <form className="AddPost" onSubmit={onHandleSubmit}>
      <input
        type="text"
        placeholder="Sunto del discorso"
        value={inputValue}
        onChange={onHandleInputValue}
      />
      <textarea
        placeholder="A mia mi pare ca...."
        value={textareaValue}
        onChange={onHandleTextareaValue}
      ></textarea>
      <div className="AddPost__btns">
        <input type="submit" value="Sentenzia" />
        <button onClick={onHandleClear}>Pentiti e cancella</button>
      </div>
    </form>
  );
};

export default AddPost;
