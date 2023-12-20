import { createSlice } from "@reduxjs/toolkit";
import { frameworks, getMultipleRandom, shuffle } from "../Data/data";

export const memorySlicer = createSlice({
  name: "memory",
  initialState: {
    items: [],
    point: 0,
    matchedCount: 0,
    checkArray: [],
    time: 0,
    mode: "",
    status: "",
    flipCount: 0,
    timeRunning: false,
    min: 0,
    sec: 0,
  },
  reducers: {
    selectMode: (state, action) => {
      state.mode = action.payload;
      let easy = getMultipleRandom(frameworks, 6);
      let medium = getMultipleRandom(frameworks, 10);
      let hard = frameworks;

      if (state.mode === "easy") {
        state.items = shuffle(easy.concat(easy));
      } else if (state.mode === "hard") {
        state.items = shuffle(hard.concat(hard));
      } else if (state.mode === "medium") {
        state.items = shuffle(medium.concat(medium));
      }
      state.matchedCount = 0;
      state.point = 0;
      state.flipCount = 0;
      state.min = 0;
      state.sec = 0;
      state.timeRunning = false;
      console.log(state.mode);
    },
    openClose: (state, action) => {
      const openClose = state.items.find(
        (item) => item.id === action.payload.id
      );
      openClose.isOpen = !openClose.isOpen;
    },
    match: (state, action) => {
      const isMatched = state.items.find(
        (item) => item.id === action.payload.id
      );
      isMatched.isMatched = !isMatched.isMatched;
    },
    increase: (state) => {
      state.matchedCount += 1;
      state.point += 50;
      state.flipCount += 1;
    },
    decrease: (state) => {
      state.point -= 10;
      state.flipCount += 1;
    },
    start: (state) => {
      state.timeRunning = true;
    },
    tick: (state) => {
      state.sec += 1;
      if (state.sec === 59) {
        state.min += 1;
        state.sec = 0;
      }
    },
    stop: (state) => {
      state.timeRunning = false;
    },
    emptyCheckArrray: (state) => {
      state.checkArray = [];
    },
  },
});

export const {
  openClose,
  match,
  selectMode,
  increase,
  decrease,
  start,
  tick,
  stop,
  emptyCheckArrray,
} = memorySlicer.actions;
export default memorySlicer.reducer;
