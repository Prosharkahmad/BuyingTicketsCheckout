import { createSlice } from "@reduxjs/toolkit";

export const productData = createSlice({
  name: "quantity",
  initialState: {
    ary: [],
    subTotalPrice: 0,
    totalPrice: 0,
    totalTickets: 0,
    totalServiceFee: 0,
    orderProcessingFee: 2.95,
  },
  reducers: {
    productAdd: (state, action) => {
      const existingIndex = state.ary.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex === -1) {
        state.ary = [...action.payload];
      }
      // replace existing items
      else {
        state.ary.forEach((item, id) =>
          existingIndex === id ? (item = action.payload) : !item
        );
      }
      state.ary.forEach((item) => {
        state.totalTickets += item.quantity;
        state.totalServiceFee = 44.08 * item.quantity;
        state.subTotalPrice += item.totalPrice;
        state.totalPrice =
          state.subTotalPrice +
          state.totalServiceFee +
          state.orderProcessingFee;
      });
      // state.ary.forEach((item)=>{

      // })
    },
  },
});

export const { productAdd } = productData.actions;

export default productData.reducer;
