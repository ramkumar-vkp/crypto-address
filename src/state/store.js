import { configureStore } from "@reduxjs/toolkit";
import cryptosReducer from "./cryptoSlice";

export const store = configureStore({
  reducer: {
    cryptos: cryptosReducer,
  },
});
