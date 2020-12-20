import { Dispatch } from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import firebase from '../common/firebase';

type User = firebase.User;

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
    setUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload;
    },
  },
});

export const { setUser, resetState } = actions;

export const listenAuthState = () => (dispatch: Dispatch<any>): void => {
  dispatch(setUser(firebase.auth().currentUser?.toJSON() as User));
  firebase.auth().onAuthStateChanged((user) => {
    dispatch(setUser(user?.toJSON() as User));
  });
};

export const createUser = ({
  name,
}: {
  name: string;
}) => async (): Promise<void> => {
  await firebase.auth().signInAnonymously();
  const user = firebase.auth().currentUser;
  if (!user) {
    return;
  }
  await firebase.firestore().collection('users').doc(user.uid).set({
    name,
  });
};

export const logout = () => async (): Promise<void> => {
  await firebase.auth().signOut();
};

export default reducer;
