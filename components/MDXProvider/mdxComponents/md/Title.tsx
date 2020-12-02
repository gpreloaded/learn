import { makeStyles } from '@material-ui/core/styles';
import Typography, { TypographyProps } from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(7),
  },
}));

/**
 * Title
 */
const Title = (props: TypographyProps) => {
  const classes = useStyles();

  return <Typography {...props} className={classes.root} variant="h2" />;
};

export default Title;
