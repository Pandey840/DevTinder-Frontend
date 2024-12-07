import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for user login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, {rejectWithValue}) => {
    try {
      const response = await axios.post('/api/login', credentials); // API call to login
      return {
        token: response.data.token,
        user: response.data.user,
      };
    } catch (error) {
      return rejectWithValue(error.response.data); // Handle errors
    }
  },
);
