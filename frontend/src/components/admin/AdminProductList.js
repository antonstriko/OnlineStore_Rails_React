import React from 'react';
import {useSelector} from 'react-redux';
import { DataGrid } from '@material-ui/data-grid';



function AdminProductList() {
  const allProducts = useSelector(state => state.products.allProducts)

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'brand', headerName: 'Brand', width: 200 },
    { field: 'department', headerName: 'Department', width: 200 },
    { field: 'stock', headerName: 'Stock', width: 200 },
    { field: 'price', headerName: 'Price', width: 200 }
  ];

  return (
    <div style={{ height: 800, width: '100%' }}>
      <DataGrid rows={allProducts} columns={columns} pageSize={14} checkboxSelection />
    </div>
  );
}
export default AdminProductList
