import {createSlice} from '@reduxjs/toolkit';
import {InitialState} from './types';

const initialState: InitialState = {
  isAuth: false,
  currentUserID: '',
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsAuth: (state, {payload}) => {
      state.isAuth = payload;
    },
    setCurrentUserID: (state, {payload}) => {
      state.currentUserID = payload;
    },
  },
});

export default globalSlice;
export const {setIsAuth, setCurrentUserID} = globalSlice.actions;
