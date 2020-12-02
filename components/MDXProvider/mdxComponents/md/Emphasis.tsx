import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import { yellow } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    backgroundColor: yellow[100],
    padding: '0 3px',
  },
});

/**
 * Emphasis
 */
const Emphasis = (props: TypographyProps) => {
  const classes = useStyles();

  return (
    <Typography
      {...props}
      className={classes.root}
      display="inline"
      variant="inherit"
    />
  );
};

export default Emphasis;
