import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
// AsyncStorage.clear();

import rootReducer from './reducers';

const persistConfig ={
  key: 'Clep',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {persistedReducer},
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

const persistor = persistStore(store);

export { store, persistor };