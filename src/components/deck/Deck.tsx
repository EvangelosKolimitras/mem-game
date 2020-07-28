import React from "react";
import Cards from "../card/card";
import styles from "./deck.module.css";

export default function Deck() {
  return (
    <ul id="card__deck" className={styles.deck}>
      <Cards />
    </ul>
  );
}
