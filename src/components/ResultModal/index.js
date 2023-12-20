import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMode } from "../../redux/memorySlice";

function ResultModal({ setShowModal, setCheck }) {
  const matchedCount = useSelector((state) => state.memory.matchedCount);
  const flipCount = useSelector((state) => state.memory.flipCount);
  const score = useSelector((state) => state.memory.point);
  const seconds = useSelector((state) => state.memory.sec);
  const minutes = useSelector((state) => state.memory.min);
  const mode = useSelector((state) => state.memory.mode);

  const dispatch = useDispatch();
  const restart = () => {
    dispatch(selectMode(mode));
    setCheck([]);
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-3/4 md:w-1/2 xl:w-1/3 my-6 mx-auto ">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start  justify-between px-4 py-2 lg:py-6 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-2xl md:text-3xl font-semibold">Results</h3>
              <button
                className=" ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-stone-500  h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>

            <div className=" flex flex-col justify-around align-center w-full  h-60 px-4 py-2 lg:py-6">
              <span className="flex justify-between align-center bg-gradient-to-r from-rose-300 via-rose-200 to-rose-100 text-green-800 w-full text-lg font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                <h3>Score</h3>
                <p>{score}</p>
              </span>

              <span className="flex justify-between align-center bg-gradient-to-r from-rose-300 via-rose-200 to-rose-100 text-green-800 text-lg font-medium  px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                <h3>Flips</h3>
                <p>{flipCount}</p>
              </span>

              <span className="flex justify-between align-center bg-gradient-to-r from-rose-300 via-rose-200 to-rose-100 text-green-800 text-lg font-medium  px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                <h3>Matched</h3>
                <p>{matchedCount}</p>
              </span>

              <span className="flex justify-between align-center bg-gradient-to-r from-rose-300 via-rose-200 to-rose-100 text-green-800 text-lg font-medium  px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                <h3>Timer</h3>
                <p>
                  {minutes < 10 ? `0${minutes}` : minutes}:
                  {seconds < 10 ? `0${seconds}` : seconds}
                </p>
              </span>
            </div>

            <div className="flex items-end justify-end px-4 py-2 lg:py-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase ps-6 py-2 text-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className=" text-teal-500 uppercase text-md background-transparent font-bold uppercase ps-6 py-2  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => {
                  restart();
                  setShowModal(false);
                }}
              >
                Restart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default ResultModal;
