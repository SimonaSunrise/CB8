import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../../styles/Pokedex.module.scss";

export default function Pokedex() {
  const router = useRouter();
  const [pokemonData, setPokemonData] = useState({});
  const [pokemonSearch, setPokemonSearch] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${router.query.name}`)
      .then((res) => res.json())
      .then((data) => setPokemonData(data));
  }, [router.query.name]);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    router.push(pokemonSearch.toLowerCase());
  };

  const onHandleChange = (e) => {
    setPokemonSearch(e.target.value);
  };

  return (
    <>
      {pokemonData.sprites ? (
        <div className={styles.Pokedex}>
          <div className={styles.PokedexImageContainer}>
            <img
              src="https://i.pinimg.com/736x/14/bd/68/14bd686faedccee521a84e293f50cbb6.jpg"
              alt={pokemonData.name}
              className={styles.BaseImage}
            />
            <img
              src={pokemonData.sprites.other.dream_world.front_default}
              alt={pokemonData.name}
              className={styles.OverlayGif}
            />
            <form onSubmit={onHandleSubmit} className={styles.FormDinamic}>
              <input
                value={pokemonSearch}
                onChange={onHandleChange}
                type="text"
                placeholder="Search another Pokèmon here🔎"
                required
              />
              <input type="submit" value=" " className={styles.GoBtn} />
            </form>
          </div>

          <div className={styles.PokedexText}>
            <h1>{pokemonData.name.toUpperCase()}</h1>

            <div>
              {pokemonData.types.map((type, i) => (
                <p key={i}> type: {type.type.name}</p>
              ))}
              <p>base experience: {pokemonData.base_experience}</p>
            </div>
            <div>
              <p>Weight: {pokemonData.weight}</p>
              <p>Height: {pokemonData.height}</p>
            </div>
            <div className={styles.PokedexTextQuality}>
              {pokemonData.stats.map((stat, i) => (
                <div key={i}>
                  <p>
                    {stat.stat.name}: {stat.base_stat}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p>{router.query.name + " non trovato"}</p>
      )}
    </>
  );
}
