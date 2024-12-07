import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer, // Register the auth slice in Redux store
  },
//   devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools only in development
});

export default store;
