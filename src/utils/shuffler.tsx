import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";

const shuffle = (arr: any[]) => {
  let currentIndex: number = arr.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }
  return arr;
};

export default shuffle;
