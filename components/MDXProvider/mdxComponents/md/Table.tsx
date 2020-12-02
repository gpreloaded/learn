import Box from '@material-ui/core/Box';
import MuiTable, { TableProps } from '@material-ui/core/Table';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';

const Container = (props: PaperProps) => (
  <Box display="flex" marginBottom={2}>
    <Box>
      <Paper {...props} elevation={0} />
    </Box>
  </Box>
);

/**
 * Table
 */
const Table = (props: TableProps) => (
  <TableContainer component={Container}>
    <MuiTable {...props} />
  </TableContainer>
);

export default Table;
