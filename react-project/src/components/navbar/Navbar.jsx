import styles from "./index.module.scss";
import Search from "../search";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.Navbar_Left}>
        <Link href="/">
          <p>🧵</p>
        </Link>
        <Link href="/">
          <h1>Ricamine</h1>
        </Link>
      </div>
      <Search />
    </nav>
  );
};

export default Navbar;
