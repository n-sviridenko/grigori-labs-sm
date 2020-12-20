import { Dispatch } from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import firebase from '../common/firebase';

type User = {
  id: string;
  name: string;
  color?: string;
};

export interface AuthState {
  auth?: firebase.User | null;
  user: User | null;
  isLoading: boolean;
}

const initialState: AuthState = {
  auth: undefined,
  user: null,
  isLoading: false,
};

const { actions, reducer } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetState(state) {
      state.auth = null;
      state.user = null;
      state.isLoading = false;
    },
    setAuth(state, action: PayloadAction<firebase.User | null>) {
      state.auth = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload;
    },
  },
});

export const {
  setUser,
  setAuth,
  setIsLoading,
  resetState,
} = actions;

export const listenAuthState = () => async (dispatch: Dispatch<any>): Promise<void> => {
  // const auth = firebase.auth().currentUser?.toJSON() as firebase.User;
  // dispatch(setAuth(auth || null));
  firebase.auth().onAuthStateChanged(async (user) => {
    dispatch(setAuth(user?.toJSON() as firebase.User || null));
  });
};

export const getCurrentUser = () => async (
  dispatch: Dispatch<any>,
  getState: () => any,
): Promise<void> => {
  const authUser = getState().auth.auth;
  if (!authUser) {
    dispatch(setUser(null));
    return;
  }
  dispatch(setIsLoading(true));
  try {
    const userSnap = await firebase.firestore().collection('users').doc(authUser.uid).get();
    const user = (userSnap.data() || null) as User | null;
    dispatch(setUser(user));
  } catch (e) {
    // eslint-disable-line no-empty
  }
  dispatch(setIsLoading(false));
};

export const createUser = ({
  name,
}: {
  name: string;
}) => async (): Promise<void> => {
  await firebase.auth().signInAnonymously();
  const authUser = firebase.auth().currentUser;
  if (!authUser) {
    return;
  }
  await firebase.firestore().collection('users').doc(authUser.uid).set({
    id: authUser.uid,
    name,
  });
};

export const updateUser = ({
  color,
}: {
  color: string;
}) => async (dispatch: Dispatch<any>, getState: () => any): Promise<void> => {
  const { user } = getState().auth;
  await firebase.firestore().collection('users').doc(user.id).update({
    color,
  });
};

export const logout = () => async (): Promise<void> => {
  await firebase.auth().signOut();
};

export default reducer;
