import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

const profile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addProfile: (state, action) => {
      state.data = action.payload.results;
    },
    removeProfile: (state, action) => {
      state.data = null;
    },
  },
});

export const { addProfile, removeProfile } = profile.actions;
export default profile.reducer;
