import MuiBox, { BoxProps } from '@material-ui/core/Box';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { green, grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

interface Props extends BoxProps {
  children: React.ReactNode;
  className?: string;
}

const useStyles = makeStyles((theme) => ({
  root: ({ color }: { color: string }) => ({
    backgroundColor: fade(color, 0.2),
    borderLeftColor: color,
    borderLeftStyle: 'solid',
    borderLeftWidth: theme.spacing(1),
    marginBottom: theme.spacing(4),
    marginLeft: -theme.spacing(4),
    marginRight: -theme.spacing(4),
    marginTop: theme.spacing(3),
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,

    '&>*:first-child': {
      marginTop: 0,
    },
  }),
}));

function color(c?: string) {
  switch (c) {
    case 'tip':
      return green[500];

    case 'solution':
    default:
      return grey[500];
  }
}

/**
 * Blockquote
 */
const Blockquote = ({ children, className }: Props) => {
  const classes = useStyles({ color: color(className) });

  return (
    <MuiBox component="blockquote" className={classes.root} marginTop={2}>
      {children}
    </MuiBox>
  );
};

Blockquote.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Blockquote;
