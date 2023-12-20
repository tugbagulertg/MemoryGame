import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { start, stop } from "../../redux/memorySlice";
import Timer from "../Timer";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ResultModal from "../ResultModal";
import Cards from "../Cards";

function Game() {
  const [check, setCheck] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const cards = useSelector((state) => state.memory.items);
  const matched = useSelector((state) => state.memory.matched);
  const flipCount = useSelector((state) => state.memory.flipCount);
  const mode = useSelector((state) => state.memory.mode);

  const dispatch = useDispatch();

  useEffect(() => {
    if (flipCount === 1) {
      dispatch(start());
    }
    setCheck([]);
  }, [dispatch, matched, mode, flipCount]);

  useEffect(() => {
    if (matched * 2 === cards.length) {
      dispatch(stop());
      setShowModal(true);
    }
  }, [dispatch, matched, cards.length, mode]);

  return (
    <div className="text-center min-h-screen  bg-[#93B1A6] flex flex-col justify-between  ">
      <Navbar check={check} setCheck={setCheck} />

      {showModal && (
        <ResultModal setShowModal={setShowModal} setCheck={setCheck} />
      )}

      <div className="flex justify-center align-center ">
        <div
          className={` ${mode === "easy" && " max-w-4xl "}
          ${mode === "medium" && "max-w-3xl"}
          ${mode === "hard" && " max-w-8xl"}
        }`}
        >
          <h1
            id="header"
            className={`text-white font-semibold text-3xl sm:text-5xl lg:text-6xl 
            ${mode === "easy" && " pb-4 sm:pb-2.5 md:py-3 lg:py-10"}
            ${mode === "medium" && "pb-4 sm:pb-2.5 lg:py-10  "}
            ${mode === "hard" && "pb-2 sm:pb-2.5 md:pb-12 lg:text-7xl"}`}
          >
            Memory Game
          </h1>
          <Timer check={check} />
          <Cards check={check} setCheck={setCheck} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Game;
