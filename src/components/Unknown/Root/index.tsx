import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from '../../../store';
import GuestRoot from '../GuestRoot';
import AuthenticatedRoot from '../AuthenticatedRoot';

const Root: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth, shallowEqual);

  if (!user) {
    return <GuestRoot />;
  }
  return <AuthenticatedRoot />;
};

export default Root;
