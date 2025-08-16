import { configureStore, combineReducers } from '@reduxjs/toolkit';
import flightSearchSlice from './slices/flightSearchSlice';

const rootReducer = combineReducers({
  flightSearchSlice,
  // Add other reducers...
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production', // Fixed typo (MODE_ENV → NODE_ENV)
});

// Correct type exports
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;