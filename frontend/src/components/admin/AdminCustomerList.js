import React, { useState, useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { DataGrid } from '@material-ui/data-grid';



function AdminCustomerList() {

    const currentUser = useSelector(state => state.user.currentUser)
    const allUsers = useSelector(state => state.user.allUsers)
    // const [customerOrders, setCustomerOrders] = useState()

    const data = allOrders.filter(item => order.user_id === currentUser.id)
    //const data = filteredOrders.map(order => )
  const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'email', headerName: 'Customer', width: 180 },
    { field: 'firstname', headerName: 'First Name', width: 180 },
    { field: 'lastname', headerName: 'Last Name', width: 180 },
    { field: 'reviews_count', headerName: 'Reviews', width: 75 },
    { field: 'favorites_count', headerName: 'Favorites', width: 75 },
    
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={allUsers} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
export default AdminCustomerList
