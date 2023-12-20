import React from "react";
import { useDispatch } from "react-redux";
import { selectMode } from "../../redux/memorySlice";
import { NavLink } from "react-router-dom";
import Footer from "../Footer";

function HomePage() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="text-center font-mono container min-h-screen flex flex-col justify-between mx-auto ">
        <h1 className="text-white font-semibold text-5xl  lg:text-8xl max-[375px]:pt-6 pt-24 sm:pt-12 lg:pt-36">
          Memory Game
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3  text-2xl sm:text-3xl md:text-5xl ">
          <NavLink to={"/play/easy"}>
            <button
              className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-2xl  px-3 sm:px-5 py-2.5 text-center h-[9rem] sm:h-[12rem] md:h-[14rem] lg:h-[18rem] xl:h-[22rem] w-4/5 sm:w-[12rem] md:w-[14rem] lg:w-[18rem] xl:w-[22rem] "
              onClick={() => dispatch(selectMode("easy"))}
            >
              Easy
            </button>
          </NavLink>
          <NavLink to={"/play/medium"}>
            <button
              className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-2xl px-3 sm:px-5 py-2.5  h-[9rem] sm:h-[12rem] md:h-[14rem] lg:h-[18rem]  xl:h-[22rem] w-4/5 sm:w-[12rem] md:w-[14rem] lg:w-[18rem] xl:w-[22rem] "
              onClick={() => dispatch(selectMode("medium"))}
            >
              Medium
            </button>
          </NavLink>
          <NavLink to={"/play/hard"}>
            <button
              className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-2xl  px-3 sm:px-5 py-2.5 text-center  h-[9rem] sm:h-[12rem] md:h-[14rem] lg:h-[18rem]  xl:h-[22rem] w-4/5 sm:w-[12rem] md:w-[14rem] lg:w-[18rem] xl:w-[22rem]"
              onClick={() => dispatch(selectMode("hard"))}
            >
              Hard
            </button>
          </NavLink>
        </div>{" "}
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
