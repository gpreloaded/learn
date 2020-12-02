import { HTMLAttributes } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    color: 'rgb(0, 0, 0)',
  },
});

/**
 * Strong
 */
const Strong = (props: HTMLAttributes<HTMLSpanElement>) => {
  const classes = useStyles();

  return <strong {...props} className={classes.root} />;
};

export default Strong;
