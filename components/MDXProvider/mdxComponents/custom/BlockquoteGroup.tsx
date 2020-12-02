import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Children, useState } from 'react';
import clsx from 'clsx';
import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

interface Props {
  children: React.ReactNode;
}

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
  root: {
    marginTop: theme.spacing(3),

    '&>*:first-child': {
      marginTop: 0,
    },
  },
  tips: {
    backgroundColor: green[400],
    color: theme.palette.getContrastText(green[400]),

    '&:hover': {
      backgroundColor: green[500],
    },
  },
}));

/**
 * BlockquoteGroup
 */
const BlockquoteGroup = ({ children }: Props) => {
  const classes = useStyles();
  const [tips, setTips] = useState(0);
  const [solutions, setSolutions] = useState(0);

  const showTips: React.ReactNode[] = [],
    showSolutions: React.ReactNode[] = [];

  Children.forEach(children, (child: any) => {
    // console.log(children);
    if (child.props.className === 'tip') {
      showTips.push(child);
    } else if (child.props.className === 'solution') {
      showSolutions.push(child);
    }
  });

  const showSolutionsButton = solutions < showSolutions.length,
    showTipsButton =
      (tips < showTips.length && showSolutionsButton) ||
      (tips < showTips.length && !showSolutions.length);

  return (
    <Box className={classes.root}>
      {showTips.slice(0, tips)}
      {showSolutions.slice(0, solutions)}

      {(showTipsButton || showSolutionsButton) && (
        <Box display="flex">
          {showTipsButton && (
            <Button
              className={clsx(classes.button, classes.tips)}
              disableElevation
              onClick={() => {
                setTips((e) => e + 1);
              }}
              variant="contained"
            >
              Tips
            </Button>
          )}

          {showSolutionsButton && (
            <Button
              className={clsx(classes.button)}
              disableElevation
              onClick={() => {
                setSolutions((e) => e + 1);
              }}
              variant="contained"
            >
              Solution
            </Button>
          )}
        </Box>
      )}
    </Box>
  );
};

BlockquoteGroup.propTypes = {
  children: PropTypes.node,
};

export default BlockquoteGroup;
