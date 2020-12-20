import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  LinearProgress,
  TextField,
  Typography,
} from '@material-ui/core';
import { Formik } from 'formik';
import { FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../../store';
import messages from './messages';
import validationSchema from './validationSchema';
import { getCurrentUser, updateUser } from '../../../store/auth';

const OnboardingScreen: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector((state: RootState) => state.auth, shallowEqual);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  if (!user) {
    return <LinearProgress />;
  }

  return (
    <Card>
      <Formik
        initialValues={{ color: user.color || '' }}
        validationSchema={validationSchema}
        onSubmit={async (values, actions) => {
          try {
            await dispatch(updateUser(values));
            history.push('/');
          } catch (e) {
            // eslint-disable-line no-empty
          }
          actions.setSubmitting(false);
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <CardContent>
              <Typography>
                <FormattedMessage {...messages.description} values={{ name: user.name }} />
              </Typography>
              <TextField
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.color}
                name="color"
                error={!!props.errors.color}
                helperText={props.errors.color}
                label={<FormattedMessage {...messages.colorLabel} />}
              />
            </CardContent>
            <CardActions>
              <Button type="submit"><FormattedMessage {...messages.submitButton} /></Button>
            </CardActions>
          </form>
        )}
      </Formik>
    </Card>
  );
};

export default OnboardingScreen;
