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
          <Link to="/contact"> Contacts </Link>
        </li>
        <li>
          <Link to="/copyright"> Copyright</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
