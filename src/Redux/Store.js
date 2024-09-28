import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./Cartslice";
import Wishslice from "./Wishslice";

export const store = configureStore({
    reducer:{
      cart : Cartslice , 
      Wishlist : Wishslice
    }
})