import { blueGrey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Typography, { TypographyProps } from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'rgb(0, 0, 0)',
    fontWeight: theme.typography.fontWeightBold,

    '&::before': {
      borderBottom: `1px solid ${blueGrey[100]}`,
      content: '" "',
      display: 'block',
      marginBottom: theme.spacing(5),
      paddingTop: theme.spacing(5.5),
    },
  },
}));

/**
 * SectionHeader
 */
const SectionHeader = (props: TypographyProps) => {
  const classes = useStyles();

  return <Typography {...props} className={classes.root} variant="h5" />;
};

export default SectionHeader;
