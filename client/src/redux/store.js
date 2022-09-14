import { configureStore, combineReducers } from "@reduxjs/toolkit";
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
import storage from "redux-persist/lib/storage";

import tickerSlice from "./slice/tickers-slice";
import selectSlice from "./slice/select-slice";
import deleteSlice from "./slice/delete-slice";
import themeSlice from "./slice/theme-slice";

const rootReducer = combineReducers({
  tickers: tickerSlice,
  select: selectSlice,
  delete: deleteSlice,
  theme: themeSlice,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["select"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
