import React from "react";
import { NavLink } from "react-router-dom";
import restartImage from "../../restart.png";
import homePage from "../../home.png";
import { useDispatch, useSelector } from "react-redux";
import { selectMode, stop } from "../../redux/memorySlice";

function Navbar({ setCheck }) {
  const mode = useSelector((state) => state.memory.mode);

  const dispatch = useDispatch();
  const restart = () => {
    dispatch(selectMode(mode));
    setCheck([]);
  };

  return (
    <div
      id="navbar"
      className="flex justify-between  pt-2 z-20 w-full top-0 left-0 z-20 px-5 sm:px-20"
    >
      <NavLink to={"/"}>
        <button
          type="button"
          onClick={() => dispatch(stop())}
          className="focus:outline-none text-white bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm  px-3 py-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          <img
            className="w-4 sm:w-5 lg:w-7 h-4 sm:h-5 lg:h-7"
            alt="homePage"
            src={homePage}
          />
        </button>
      </NavLink>
      <button
        type="button"
        onClick={() => restart()}
        className="focus:outline-none text-white bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        <img
          className="w-4 sm:w-5 lg:w-7 h-4 sm:h-5 lg:h-7"
          alt="restartImage"
          src={restartImage}
        />
      </button>
    </div>
  );
}

export default Navbar;
