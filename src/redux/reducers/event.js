import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boxEvent: [],
};

const event = createSlice({
  name: "event",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.boxEvent = action.payload;
    },
  },
});

export const { addEvent } = event.actions;
export default event.reducer;
