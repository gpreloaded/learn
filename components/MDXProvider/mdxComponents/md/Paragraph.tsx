import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography, { TypographyProps } from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    lineHeight: 1.7,
    marginTop: theme.spacing(4),
  },
  todo: {
    color: theme.palette.secondary.dark,
    opacity: 0.5,
  },
}));

/**
 * Paragraph
 */
const Paragraph = (props: TypographyProps<'p'>) => {
  const classes = useStyles();

  return (
    <Typography
      {...props}
      className={classes.root}
      component="p"
      variant="body1"
    />
  );
};

Paragraph.propTypes = {
  todo: PropTypes.bool,
};

export default Paragraph;
