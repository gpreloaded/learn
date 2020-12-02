import { grey } from '@material-ui/core/colors';
import BaseLink from 'components/Link';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { LinkProps } from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: fade(theme.palette.primary.main, 0.15),
    borderBottomColor: grey[400],
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    textDecoration: 'none',

    '&:hover': {
      backgroundColor: fade(theme.palette.primary.main, 0.35),
      borderBottomColor: grey[900],
      textDecoration: 'none',
    },
  },
}));

/**
 * Link
 */
const Link = (props: LinkProps) => {
  const classes = useStyles();

  return <BaseLink {...props} className={classes.root} color="textPrimary" />;
};

export default Link;
