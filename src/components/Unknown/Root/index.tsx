import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import GuestRoot from '../GuestRoot';
import AuthenticatedRoot from '../AuthenticatedRoot';
import { listenAuthState } from '../../../store/auth';

const Root: React.FC = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state: RootState) => state.auth, shallowEqual);
  useEffect(() => {
    dispatch(listenAuthState());
  }, [dispatch]);

  if (auth === undefined) {
    return null;
  }
  if (!auth) {
    return <GuestRoot />;
  }
  return <AuthenticatedRoot />;
};

export default Root;
