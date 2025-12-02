    // src/store.js
    import { configureStore } from '@reduxjs/toolkit';
// Import your slice reducers here

// import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    // Add your slice reducers here
    // counter: counterReducer,
  },
});