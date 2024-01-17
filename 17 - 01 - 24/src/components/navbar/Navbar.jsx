import React from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/about"> About </Link>
        </li>
        <li>
          <Link to="/contacts"> Contacts </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
