import React from 'react';
import { render } from 'react-dom';

import { Paper } from 'material-ui';

import {
  SortingState,
  LocalSorting,
  PagingState,
  LocalPaging,
  ColumnOrderState
} from '@devexpress/dx-react-grid';
import {
  Grid,
  TableView,
  TableHeaderRow,
  PagingPanel,
  DragDropContext
} from '@devexpress/dx-react-grid-material-ui';

import { columns, rows } from './data';

const App = () => (
  <Paper>
    <Grid columns={columns} rows={rows}>
      <PagingState defaultPageSize={5} />
      <SortingState
        defaultSorting={[{ columnName: 'name', direction: 'asc' }]}
      />
      <ColumnOrderState defaultOrder={['name', 'artist', 'year']} />
      <LocalSorting />
      <LocalPaging />
      <DragDropContext />
      <TableView allowColumnReordering />
      <TableHeaderRow allowSorting allowDragging />
      <PagingPanel allowedPageSizes={[0, 5, 10, 20]} />
    </Grid>
  </Paper>
);

render(<App />, document.getElementById('root'));
