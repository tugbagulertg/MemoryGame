import React from "react";
import backImages from "../../faq.png";
import flip from "./light-switch-82388.mp3";
import matchSound from "./power-up-sparkle-1-177983.mp3";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrease,
  increase,
  openClose,
  start,
  match,
} from "../../redux/memorySlice";

function Cards({ check, setCheck }) {
  const cards = useSelector((state) => state.memory.items);
  const mode = useSelector((state) => state.memory.mode);

  const dispatch = useDispatch();

  const flipSound = new Audio(flip);
  const matchedSound = new Audio(matchSound);

  const handleClick = (card) => {
    dispatch(start());
    dispatch(openClose(card));
    check.push(card);

    if (check.length === 2) {
      compareItems();
    }
  };

  const compareItems = () => {
    if (check[0].name === check[1].name) {
      matchedSound.play();
      dispatch(increase());
      check.forEach((ch) => {
        dispatch(match(ch));
      });
      setCheck([]);
      console.log("same");
    } else {
      setTimeout(() => {
        check.forEach((ch) => {
          dispatch(openClose(ch));
        });
        dispatch(decrease());

        setCheck([]);
      }, 500);
      console.log("not same");
    }
  };

  return (
    <ul
      id="game"
      className={`grid  select-none pb-3 ${
        mode === "easy" &&
        " grid-cols-3 sm:grid-cols-6 lg:grid-cols-4 gap-2 sm:gap-3  lg:gap-5"
      }
        ${mode === "medium" && "grid-cols-4 sm:grid-cols-5  gap-2 sm:gap-3 "}
        ${
          mode === "hard" &&
          " max-[350px]:grid-cols-4 grid-cols-5 md:grid-cols-8 xl:grid-cols-10 gap-1 sm:gap-3 "
        }
}`}
    >
      {cards.map((card) => (
        <li
          key={card.id}
          onClick={() => {
            if (check.length < 2) {
              handleClick(card);
            }
            flipSound.play();
          }}
          className={`card bg-gradient-to-r from-rose-400 via-rose-300 to-rose-200 
          
          ${
            mode === "easy" &&
            "max-[350px]:w-[80px] w-[105px] sm:w-[80px] md:w-[100px] lg:w-[130px] max-[350px]:h-[80px]  h-[105px] sm:h-[80px] md:h-[100px] lg:h-[130px]"
          }
          ${
            mode === "medium" &&
            "max-[350px]:w-[60px] w-[85px] sm:w-[90px] md:w-[110px] max-[350px]:h-[60px] h-[85px] sm:h-[90px] md:h-[110px]"
          }
          ${
            mode === "hard" &&
            "max-[374px]:w-[65px] w-[70px] sm:w-[90px] md:w-[85px] lg:w-[110px] max-[374px]:h-[65px] h-[70px] sm:h-[90px] md:h-[85px] lg:h-[110px] "
          }
}
              ${card.isOpen === true ? "flipped" : ""}`}
        >
          <img className="front" src={backImages} alt="front" />
          <img
            className={`back  ${
              card.isMatched === true &&
              "opacity-25 transition-opacity duration-1000 ease-out"
            }`}
            src={`https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/${card.name}.png`}
            alt="card.name"
          />
        </li>
      ))}
    </ul>
  );
}

export default Cards;
