import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selected: []
}

const section = createSlice({
    name: "section",
    initialState,
    reducers: {
        changeSeat: (state, action) => {
            state.selected(action.payload.id) = action.payload;
        },
        addSeat: (state, action) => {
            const existing = state.selected(action.payload.id)
            if (existing){
                const newData = {...existing};
                newData.quantity += 1
                newData.price = newData.quantity * action.payload.price;
                state.selected[action.payload.id] = newData
            } else {
                const newData = {...action.payload};
                newData.quantity = 1
                newData.price = newData.quantity * action.payload.price;
                state.selected[action.payload.id] = newData
            }
        },
        removeSeat: (state, action) => {
            const existing = state.selected(action.payload.id)
            if (existing){
                const newData = {...existing};
                newData.quantity -= 1
                newData.price = newData.quantity * action.payload.price;
                state.selected[action.payload.id] = newData
            } else {
                const newData = {...action.payload};
                newData.quantity = 1
                newData.price = newData.quantity * action.payload.price;
                state.selected[action.payload.id] = newData
            }
        }
    }
})

export const {changeSeat, addSeat, removeSeat} = section.actions
export default section.reducer