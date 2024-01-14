import styles from "./index.module.scss";

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.Text_Box}>
        <h1>
          📝 To-do-list 💭 <br />
          ...Forever and Always ✏️
        </h1>
        <p>
          {" "}
          me: "Why do something when you can jot it down first?" <br />{" "}
          me:"Because you risk forgetting it, Mr. Forgetful!" ❤️🤍
        </p>
      </div>
    </div>
  );
};

export default Header;
