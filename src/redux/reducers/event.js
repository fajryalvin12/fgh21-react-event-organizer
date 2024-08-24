import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boxEvent: [],
  listEvent: {}
};

const event = createSlice({
  name: "event",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.boxEvent = action.payload;
    },
    selectEventId: (state, action) => {
      state.listEvent = action.payload
    }
  },
});

export const { addEvent, selectEventId } = event.actions;
export default event.reducer;
