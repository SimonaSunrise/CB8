import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.scss";

const Search = () => {
  const [clientSearch, setClientSearch] = useState("");
  const router = useRouter();
  const onHandleSubmit = (e) => {
    e.preventDefault();
    const formattedSearch = clientSearch.replace(/\s+/g, "+");
    router.push(`/ricamine/${formattedSearch}`.toLowerCase());
  };
  const onHandleSearch = (e) => {
    setClientSearch(e.target.value);
  };

  return (
    <div className={styles.Search}>
      <form onSubmit={onHandleSubmit}>
        <input
          className={styles.Search_Input_Text}
          type="text"
          value={clientSearch}
          onChange={onHandleSearch}
          placeholder="Cerca..."
        />
        <input
          className={styles.Search_Input_Submit}
          type="submit"
          value={"🔎"}
        />
      </form>
    </div>
  );
};

export default Search;
