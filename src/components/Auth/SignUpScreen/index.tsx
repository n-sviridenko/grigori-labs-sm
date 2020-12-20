import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from '@material-ui/core';
import { Formik } from 'formik';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import validationSchema from './validationSchema';
import { createUser } from '../../../store/auth';

const SignUpScreen: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <Card>
      <Formik
        initialValues={{ name: '' }}
        validationSchema={validationSchema}
        onSubmit={async (values, actions) => {
          try {
            await dispatch(createUser(values));
          } catch (e) {
            // eslint-disable-line no-empty
          }
          actions.setSubmitting(false);
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <CardContent>
              <Typography><FormattedMessage {...messages.description} /></Typography>
              <TextField
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
                name="name"
                error={!!props.errors.name}
                helperText={props.errors.name}
                label={<FormattedMessage {...messages.nameLabel} />}
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

export default SignUpScreen;
