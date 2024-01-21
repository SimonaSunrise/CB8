import { useState } from "react";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const navigate = useNavigate();
  const onHandleSearch = (e) => {
    e.preventDefault();
    navigate(`/book/${inputValue.toLowerCase().replace(" ", "")}`);
  };
  return (
    <form className={styles.Input}>
      <input
        type="text"
        placeholder="Write here the title"
        value={inputValue}
        onChange={handleInputChange}
      />
      <input type="submit" onClick={onHandleSearch} />
    </form>
  );
};
export default Input;
