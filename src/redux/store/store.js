import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../slices/auth/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  //   devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools only in development
});

export default store;
