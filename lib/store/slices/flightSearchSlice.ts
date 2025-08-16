import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tripType: 'one-way',
  passengers: 1,
  cabinClass: 'economy'
};

const flightSearchSlice = createSlice({
  name: 'flightSearch',
  initialState,
  reducers: {
    setTripType: (state, action) => {
      state.tripType = action.payload;
    },
    setPassengers: (state, action) => {
      state.passengers = action.payload;
    },
    setCabinClass: (state, action) => {
      state.cabinClass = action.payload;
    }
  }
});

export const { setTripType, setPassengers, setCabinClass } = flightSearchSlice.actions;
export default flightSearchSlice.reducer;