import React from 'react';
import {useSelector} from 'react-redux';
import { DataGrid } from '@material-ui/data-grid';



function AdminCustomerList() {
  const allUsers = useSelector(state => state.user.allUsers)

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
