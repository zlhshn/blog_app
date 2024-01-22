import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from 'redux-persist/lib/storage/session'
import blogReducer from "../features/blogSlice";
import authReducer from "../features/authSlice";


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, authReducer)



const store = configureStore({
  reducer: {
    auth: persistedReducer,
    blog: blogReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
export default store