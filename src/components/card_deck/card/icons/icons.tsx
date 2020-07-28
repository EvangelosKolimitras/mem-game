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

import shuffle from "../../../../utils/shuffler";

type I = IconDefinition;

const icns: I[] = [
  faGem,
  faGem,
  faPaperPlane,
  faPaperPlane,
  faAnchor,
  faAnchor,
  faBold,
  faBold,
  faCube,
  faCube,
  faLeaf,
  faLeaf,
  faBomb,
  faBomb,
  faBicycle,
  faBicycle,
];

// It returns an array of object with each object being the icon
const Icons = (icns: I[]): object[] =>
  icns.map((i: any) => ({
    i,
    type: i.type,
  }));

export default Icons(shuffle(icns));
