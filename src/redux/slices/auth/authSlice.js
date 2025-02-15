import {createSlice} from '@reduxjs/toolkit';
import {decryptToken} from '../../../utils/encryption';

const initialState = {
  token: localStorage.getItem('token')
    ? decryptToken(localStorage.getItem('token'))
    : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      localStorage.setItem('token', action.payload);
      state.token = action.payload;
    },
    clearToken: (state) => {
      localStorage.removeItem('token');
      state.token = null;
    },
  },
});

export const {setToken, clearToken} = authSlice.actions;
export default authSlice.reducer;
