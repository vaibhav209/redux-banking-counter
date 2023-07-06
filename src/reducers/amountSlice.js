import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "Janny",
  totalAmount: 2500701
};

export const amountSlice = createSlice({
  name: "totalAmount",
  initialState,
  reducers: {
    withdrawByTen: (state) => {
      state.totalAmount += 10;
    },
    withdrawByFive: (state) => {
      state.totalAmount -= 5;
    },
    changeByAmount: (state, action) => {
      state.totalAmount -= action.payload;
    }
  }
});

export const {
  withdrawByTen,
  withdrawByFive,
  changeByAmount
} = amountSlice.actions;

export default amountSlice.reducer;
