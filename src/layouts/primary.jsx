import { Container } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { NavBar } from '@/components';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  headerAndBody: {
    display: 'flex',
    flexDirection: 'column',
    // paddingLeft: spacing.m,
    // paddingRight: spacing.m,
    // marginBottom: spacing.xl,
  },
}));

export const PrimaryLayout = (props) => {
  const classes = useStyles();
  const { children } = props;

  return (
    <Container disableGutters className={classes.root} maxWidth={false}>
      <Container className={classes.headerAndBody} maxWidth={false}>
        <NavBar />
        {children}
      </Container>
    </Container>
  );
};
