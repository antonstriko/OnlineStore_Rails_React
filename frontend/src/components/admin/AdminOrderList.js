import React, { useState, useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { DataGrid } from '@material-ui/data-grid';



function AdminOrderList() {
    const allOrders = useSelector(state => state.order.allOrders)
    const currentUser = useSelector(state => state.user.currentUser)

    // const [customerOrders, setCustomerOrders] = useState()

    const data = allOrders.filter(order => order.user_id === currentUser.id)
    //const data = filteredOrders.map(order => )
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'user_name', headerName: 'Customer', width: 200 },
    { field: 'item_count', headerName: 'Items',type: 'number', width: 200 },
    { field: 'total', headerName: 'Total', type: 'number', width: 200 }
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={allOrders} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
export default AdminOrderList
