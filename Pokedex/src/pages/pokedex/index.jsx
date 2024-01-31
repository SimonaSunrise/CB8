import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../styles/Pokedex.module.scss";

export default function Pokedex() {
  const router = useRouter();
  const [pokemonSearch, setPokemonSearch] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    router.push(`/pokedex/${pokemonSearch}`.toLowerCase());
  };

  const onHandleChange = (e) => {
    setPokemonSearch(e.target.value);
  };

  return (
    <>
      <div className={styles.TextSearch}>
        <h4>
          Here you can search for all the Pokémon you want and find out
          everything about them.
        </h4>
        <p>
          With over 800 Pokémon out there, have fun discovering them all and
          become the best trainer you can be!
        </p>
      </div>
      <form onSubmit={onHandleSubmit} className={styles.Form}>
        <input
          value={pokemonSearch}
          onChange={onHandleChange}
          type="text"
          placeholder="Search Pokèmon"
          required
        />
        <input type="submit" value="Go ⚡" />
      </form>
    </>
  );
}
