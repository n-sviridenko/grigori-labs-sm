import React from 'react';
import {
  useSelector,
  shallowEqual,
  useDispatch,
} from 'react-redux';
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { RootState } from '../../../store';
import { logout } from '../../../store/auth';
import useStyles from './styles';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state: RootState) => state.auth, shallowEqual);
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <FormattedMessage {...messages.title} />
        </Typography>
        {auth && (
          <Button color="inherit" onClick={() => dispatch(logout())}>
            <FormattedMessage {...messages.logoutButton} />
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
