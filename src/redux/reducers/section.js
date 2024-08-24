import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    qty: 0,
    eventId: 0,
    eventTitle: "",
    totalPayment: 0,
    ticketSection: [],
    sectionId: [],
    quantity: [],
};

const section = createSlice({
    name: "section",
    initialState,
    reducers: {
        addSection: (state, action) => {
            state.data = [action.payload]
        },
        addQty: (state, action) => {
            state.qty = action.payload
        },
        addEventId: (state, action) => {
            state.eventId = action.payload
        },
        addEventTitle: (state, action) => {
            state.eventTitle = action.payload
        },
        addTotalPayment: (state, action) => {
            state.totalPayment = action.payload
        },
        addTicketSection: (state, action) => {
            state.ticketSection = action.payload
        },
        addSectionId: (state, action) => {
            state.sectionId = action.payload
        },
        addQuantity: (state, action) => {
            state.quantity = action.payload
        },
    }
})

// const section = createSlice({
//     name: "section",
//     initialState,
//     reducers: {
//         changeSeat: (state, action) => {
//             state.selected(action.payload.id) = action.payload;
//         },
//         addSeat: (state, action) => {
//             const existing = state.selected(action.payload.id)
//             if (existing){
//                 const newData = {...existing};
//                 newData.quantity += 1
//                 newData.price = newData.quantity * action.payload.price;
//                 state.selected[action.payload.id] = newData
//             } else {
//                 const newData = {...action.payload};
//                 newData.quantity = 1
//                 newData.price = newData.quantity * action.payload.price;
//                 state.selected[action.payload.id] = newData
//             }
//         },
//         removeSeat: (state, action) => {
//             const existing = state.selected(action.payload.id)
//             if (existing){
//                 const newData = {...existing};
//                 newData.quantity -= 1
//                 newData.price = newData.quantity * action.payload.price;
//                 state.selected[action.payload.id] = newData
//             } else {
//                 const newData = {...action.payload};
//                 newData.quantity = 1
//                 newData.price = newData.quantity * action.payload.price;
//                 state.selected[action.payload.id] = newData
//             }
//         }
//     }
// })



export const {
    addSection, 
    addQty, 
    addEventId, 
    addEventTitle, 
    addTotalPayment,
    addTicketSection,
    addSectionId,
    addQuantity,
} = section.actions
export default section.reducer