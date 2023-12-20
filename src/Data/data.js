import { nanoid } from "@reduxjs/toolkit";

export const frameworks = [
  "angular2",
  "vue",
  "semantic-ui-react",
  "grunt",
  "phantomjs",
  "ionic",
  "istanbul",
  "yeoman",
  "yarn",
  "bower",
  "cerebral",
  "browserify",
  "alpaca",
  "moon",
  "bosonic",
  "rxjs",
  "redux",
  "react-cosmos",
  "bosket",
  "js_of_ocaml",
];

//Creating new array with random elements according to the selected mode.
export const getMultipleRandom = (arr, num) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
};
//end

export const shuffle = (array) => {
  let shuffledCard = array.sort(() => Math.random() - 0.5);
  shuffledCard = array.map((card) => {
    return {
      id: nanoid(),
      name: card,
      isOpen: false,
      isMatched: false,
    };
  });

  return shuffledCard;
};
