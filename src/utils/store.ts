import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../utils/userSlice";
import moviesReducer from "./movieSlice";
import toggleReducer from "./gptToggleSlice";
const store = configureStore({
  reducer: {
    userReducer,
    movies: moviesReducer,
    toggle: toggleReducer
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;