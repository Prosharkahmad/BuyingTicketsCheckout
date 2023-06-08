import { configureStore } from "@reduxjs/toolkit";
import { productData } from "../ReduxToolkit/MoviesCart";
export default configureStore({
  // reducer:persistReducerr,
  reducer: {
    productData: productData.reducer,
  },
  // middleware:[thunk],
});
