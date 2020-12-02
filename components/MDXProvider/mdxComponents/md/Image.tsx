import { makeStyles } from '@material-ui/core/styles';
import { HTMLAttributes } from 'react';

const useStyles = makeStyles({
  root: {
    height: 'auto',
    maxWidth: 800,
  },
});

/**
 * Image
 */
const Image = (props: HTMLAttributes<HTMLImageElement>) => {
  const classes = useStyles();

  return <img {...props} className={classes.root} />;
};

export default Image;
