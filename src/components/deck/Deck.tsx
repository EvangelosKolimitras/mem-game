import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";

export default function Deck() {
  return (
    <ul id="card__deck" className="card__deck">
      <li className="card__deck--card" data-type="diamond">
        <FontAwesomeIcon className="card__deck--card-fa" icon={icons.faGem} />
      </li>
      <li className="card__deck--card" data-type="paper">
        <FontAwesomeIcon
          className="card__deck--card-fa"
          icon={icons.faPaperPlane}
        />
      </li>
      <li className="card__deck--card" data-type="anchor">
        <FontAwesomeIcon
          className="card__deck--card-fa"
          icon={icons.faAnchor}
        />
      </li>
      <li className="card__deck--card" data-type="bolt">
        <FontAwesomeIcon className="card__deck--card-fa" icon={icons.faBold} />
      </li>
      <li className="card__deck--card" data-type="cube">
        <FontAwesomeIcon className="card__deck--card-fa" icon={icons.faCube} />
      </li>
      <li className="card__deck--card" data-type="anchor">
        <FontAwesomeIcon
          className="card__deck--card-fa"
          icon={icons.faAnchor}
        />
      </li>
      <li className="card__deck--card" data-type="leaf">
        <FontAwesomeIcon className="card__deck--card-fa" icon={icons.faLeaf} />
      </li>
      <li className="card__deck--card" data-type="bicycle">
        <FontAwesomeIcon
          className="card__deck--card-fa"
          icon={icons.faBicycle}
        />
      </li>
      <li className="card__deck--card" data-type="diamond">
        <FontAwesomeIcon className="card__deck--card-fa" icon={icons.faGem} />
      </li>
      <li className="card__deck--card" data-type="bomb">
        <FontAwesomeIcon className="card__deck--card-fa" icon={icons.faBomb} />
      </li>
      <li className="card__deck--card" data-type="leaf">
        <FontAwesomeIcon className="card__deck--card-fa" icon={icons.faLeaf} />
      </li>
      <li className="card__deck--card" data-type="bomb">
        <FontAwesomeIcon className="card__deck--card-fa" icon={icons.faBomb} />
      </li>
      <li className="card__deck--card" data-type="bolt">
        <FontAwesomeIcon className="card__deck--card-fa" icon={icons.faBolt} />
      </li>
      <li className="card__deck--card" data-type="bicycle">
        <FontAwesomeIcon
          className="card__deck--card-fa"
          icon={icons.faBicycle}
        />
      </li>
      <li className="card__deck--card" data-type="paper">
        <FontAwesomeIcon
          className="card__deck--card-fa"
          icon={icons.faPaperPlane}
        />
      </li>
      <li className="card__deck--card" data-type="cube">
        <FontAwesomeIcon className="card__deck--card-fa" icon={icons.faCube} />
      </li>
    </ul>
  );
}
