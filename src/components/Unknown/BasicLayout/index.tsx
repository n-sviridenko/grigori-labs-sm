import React from 'react';
import { Grid } from '@material-ui/core';

const BasicLayout: React.FC = ({ children }) => (
  <Grid container direction="column" alignItems="center" justify="center">
    <Grid item sm={8} md={6} lg={4} xs={12}>
      {children}
    </Grid>
  </Grid>
);

export default BasicLayout;