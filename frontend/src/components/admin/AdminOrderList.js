import React from 'react';
import {useSelector} from 'react-redux';
import { DataGrid } from '@material-ui/data-grid';



function AdminOrderList() {
  const allOrders = useSelector(state => state.order.allOrders)
  const columns = [
    { field: 'date', headerName: 'Date', width: 180 },
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'user_name', headerName: 'Customer', width: 200 },
    { field: 'item_count', headerName: 'Items',type: 'number', width: 200 },
    { field: 'total', headerName: 'Total', type: 'number', width: 200 }
  ];

  return (
    <div style={{ height: 800, width: '100%' }}>
      <DataGrid rows={allOrders} columns={columns} pageSize={14} checkboxSelection />
    </div>
  );
}
export default AdminOrderList
