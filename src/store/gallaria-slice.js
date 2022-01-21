import { createSlice } from "@reduxjs/toolkit";
import images from "../data.json";

const GallariaSlice = createSlice({
  name: "gallaria",
  initialState: {
    images: images.map((image, i) => ({
      ...image,
      position: i,
      isFirst: i === 0,
      isLast: i === images.length - 1,
    })),
    currentImageIndex: null,
  },
  reducers: {
    setCurrentImageIndex(state, { payload }) {
      state.currentImageIndex = payload;
    },
  },
});

export default GallariaSlice;
