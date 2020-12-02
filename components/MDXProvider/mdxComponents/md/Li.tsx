import { makeStyles } from '@material-ui/core/styles';
import Typography, { TypographyProps } from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
  },
}));

/**
 * Li
 */
const Li = (props: TypographyProps<'li'>) => {
  const classes = useStyles();

  return (
    <Typography
      {...props}
      className={classes.root}
      component="li"
      variant="body1"
    />
  );
};

export default Li;
