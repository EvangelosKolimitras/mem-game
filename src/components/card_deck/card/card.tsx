import React from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import styles from "./card.module.css";
import Icons from "./icons/icons";

export default function Cards() {
  return (
    <>
      {Icons.map((icon: any) => (
        <li className={styles.deck__card} data-type={icon.type}>
          <FontAwesomeIcon className={styles.deck__card_fa} icon={icon.i} />
        </li>
      ))}
    </>
  );
}
