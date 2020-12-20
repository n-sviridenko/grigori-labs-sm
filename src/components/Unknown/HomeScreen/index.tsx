import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import {
  Card,
  CardContent,
  LinearProgress,
  Typography,
} from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import { Redirect } from 'react-router-dom';
import { RootState } from '../../../store';
import messages from './messages';
import { getCurrentUser } from '../../../store/auth';

const boldFormatter = (msg: any, k: string) => <strong key={k}>{msg}</strong>;

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth, shallowEqual);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  if (!user) {
    return <LinearProgress />;
  }
  if (!user.color) {
    return <Redirect to="/onboarding" />;
  }

  return (
    <Card>
      <CardContent style={{ backgroundColor: user.color.value }}>
        <Typography gutterBottom>
          <FormattedMessage
            {...messages.description}
            values={{ name: user.name, color: user.color.name, strong: boldFormatter }}
          />
        </Typography>
        <Typography>
          <FormattedMessage {...messages.thankYou} />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HomeScreen;
