import { makeStyles } from '@material-ui/core/styles';
import MathBase, { Props } from '../utils/MathBase';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
  },
}));

/**
 * Math
 */
const Math = (props: Props) => {
  const classes = useStyles();

  return (
    <Typography className={classes.root} variant="h6">
      <MathBase {...props} />
    </Typography>
  );
};

export default Math;
