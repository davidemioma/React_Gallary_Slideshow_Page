import { configureStore } from "@reduxjs/toolkit";
import GallariaSlice from "./gallaria-slice";

const store = configureStore({
  reducer: { gallaria: GallariaSlice.reducer },
});

export const gallariaActions = GallariaSlice.actions;

export default store;
