import Link from "next/link";
import styles from "./index.module.scss";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.MainLayout}>
      <nav>
        <ul>
          <li>
            H
            <Link href="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/640px-Pok%C3%A9_Ball_icon.svg.png"
                alt="Pokeball"
              />
            </Link>
            <span> </span>ME
          </li>
          <li>
            <h3>Catch 'Em All </h3>
          </li>
          <li>
            <Link href="/pokedex">
              <img
                className={styles.PokedexImg}
                src="https://cdn.dribbble.com/userupload/3875672/file/original-42f52449520e8e7940c668566888d84f.png?resize=752x"
                alt="Pokedex"
              />{" "}
            </Link>
          </li>
        </ul>
      </nav>

      {children}
    </div>
  );
};
export default MainLayout;
