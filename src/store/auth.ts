import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
  id: string;
};

export interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

const { actions, reducer } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetState(state) {
      state.user = null;
    },
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
  },
});

export const { resetState } = actions;

export default reducer;
