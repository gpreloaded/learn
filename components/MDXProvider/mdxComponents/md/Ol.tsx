import Box, { BoxProps } from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    paddingLeft: 20,
  },
});

/**
 * Ul
 */
const Ol = (props: BoxProps) => {
  const classes = useStyles();

  return (
    <Box
      {...props}
      className={classes.root}
      component="ol"
      margin={0}
      marginTop={2}
    />
  );
};

export default Ol;
