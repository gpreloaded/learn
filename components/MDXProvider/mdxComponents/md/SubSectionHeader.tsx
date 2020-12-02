import { makeStyles } from '@material-ui/core/styles';
import Typography, { TypographyProps } from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'rgb(0, 0, 0)',
    fontWeight: theme.typography.fontWeightBold,

    '&::before': {
      content: '" "',
      display: 'block',
      marginTop: -45,
      paddingTop: 90,
    },
  },
}));

/**
 * SubSectionHeader
 */
const SubSectionHeader = (props: TypographyProps) => {
  const classes = useStyles();

  return <Typography {...props} className={classes.root} variant="h6" />;
};

export default SubSectionHeader;
