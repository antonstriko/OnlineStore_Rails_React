import React from 'react';
import {useSelector} from 'react-redux';
import { DataGrid } from '@material-ui/data-grid';



function OrderDataGrid() {
    const allOrders = useSelector(state => state.order.allOrders)
    const currentUser = useSelector(state => state.user.currentUser)

    // const [customerOrders, setCustomerOrders] = useState()

    const data = allOrders.filter(order => order.user_id === currentUser.id)
    //const data = filteredOrders.map(order => )
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'date', headerName: 'Date', width: 100 },
    { field: 'user_name', headerName: 'Customer', width: 200 },
    { field: 'item_count', headerName: 'Items',type: 'number', width: 200 },
    { field: 'total', headerName: 'Total', type: 'number', width: 200 }
  ];

  return (
    <div style={{ height: 800, width: '100%' }}>
      <DataGrid rows={data} columns={columns} pageSize={20} checkboxSelection />
    </div>
  );
}
export default OrderDataGrid
