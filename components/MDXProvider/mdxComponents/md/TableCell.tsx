import { makeStyles } from '@material-ui/core/styles';
import MuiTableCell, { TableCellProps } from '@material-ui/core/TableCell';
import PropTypes from 'prop-types';

interface Props {
  align: null | TableCellProps['align'];
  children?: React.ReactNode;
}

const useStyles = makeStyles({
  root: {
    minWidth: 100,
  },
});

/**
 * TableCell
 */
const TableCell = ({ align, children }: Props) => {
  const classes = useStyles();

  return (
    <MuiTableCell align={align || 'inherit'} className={classes.root}>
      {children}
    </MuiTableCell>
  );
};

TableCell.propTypes = {
  align: PropTypes.string,
  children: PropTypes.node,
};

export default TableCell;
