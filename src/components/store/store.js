import { createSlice, configureStore } from "@reduxjs/toolkit";

const tabSlice = createSlice({
  name: "tab",
  initialState: { tab: "Customer Data" },
  reducers: {
    update(state, action) {
      state.tab = action.payload;
    },
  },
});

// const btnSlice = createSlice({
//   name: "btn",
//   initialState: { btn: 0 },
//   reducers: {
//     update(state, action) {
//       state.btn = action.payload;
//     },
//   },
// });

const store = configureStore({
  reducer: {
    tab: tabSlice.reducer,
    // btn: btnSlice.reducer
  }, //, 2nd slice reducer, 3rd slice reducer
});

export const tabActions = tabSlice.actions;
// export const btnActions = btnSlice.actions;

export default store;
