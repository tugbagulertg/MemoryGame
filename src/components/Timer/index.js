import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tick } from "../../redux/memorySlice";

function Timer() {
  const matchedCount = useSelector((state) => state.memory.matchedCount);
  const seconds = useSelector((state) => state.memory.sec);
  const minutes = useSelector((state) => state.memory.min);
  const score = useSelector((state) => state.memory.point);
  const state = useSelector((state) => state.memory);
  const flipCount = useSelector((state) => state.memory.flipCount);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!state.timeRunning) {
      return;
    }
    let interval = null;
    interval = setInterval(() => dispatch(tick()), 1000);
    return () => clearInterval(interval);
  }, [state.timeRunning, dispatch]);

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 w-full mb-3 sm:mb-5  text-sm lg:text-md">
      <span className="bg-green-100 text-green-800 font-medium  md:me-6 max-[350px]:px-1 px-1.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300 ">
        Score:{score}
      </span>

      <span className="bg-green-100 text-green-800 font-medium  md:me-6 max-[350px]:px-1 px-1.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300 ">
        Flips:{flipCount}
      </span>

      <span className="bg-green-100 text-green-800  font-medium  md:me-6 max-[350px]:px-1 px-1.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
        Matched:{matchedCount}
      </span>

      <span
        className="bg-green-100 text-green-800 font-medium max-[350px]:px-1 px-1.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300
      "
      >
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </span>
    </div>
  );
}

export default Timer;
