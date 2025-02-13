import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../utils/userSlice";
import moviesReducer from "./movieSlice";
const store = configureStore({
  reducer: {
    userReducer,
    movies: moviesReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;