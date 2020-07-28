import React from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import {
  faGem,
  IconDefinition,
  faPaperPlane,
  faAnchor,
  faBold,
  faCube,
  faLeaf,
  faBomb,
  faBicycle,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./card.module.css";
import shuffle from "../../utils/shuffler";

type IconItems = {
  i: IconDefinition;
  type: string;
}[];

const I: IconItems = shuffle([
  { i: faGem, type: "gem" },
  { i: faGem, type: "gem" },
  { i: faPaperPlane, type: "paper" },
  { i: faPaperPlane, type: "paper" },
  { i: faAnchor, type: "anchor" },
  { i: faAnchor, type: "anchor" },
  { i: faBold, type: "bold" },
  { i: faBold, type: "bold" },
  { i: faCube, type: "cube" },
  { i: faCube, type: "cube" },
  { i: faLeaf, type: "leaf" },
  { i: faLeaf, type: "leaf" },
  { i: faBomb, type: "bomb" },
  { i: faBomb, type: "bomb" },
  { i: faBicycle, type: "bicycle" },
  { i: faBicycle, type: "bicycle" },
]);

export default function Cards() {
  return (
    <>
      {I.map((i) => (
        <li className={styles.deck__card} data-type={i.type}>
          <FontAwesomeIcon className={styles.deck__card_fa} icon={i.i} />
        </li>
      ))}
    </>
  );
}
