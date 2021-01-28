import React, { useState, useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { DataGrid } from '@material-ui/data-grid';



function AdminProductList() {
  const allProducts = useSelector(state => state.product.allProducts)

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'brand', headerName: 'Brand', width: 200 },
    { field: 'stock', headerName: 'Stock', type: 'number', width: 200 },
    { field: 'in_stock', headerName: 'In-Stock', type: 'boolean', width: 200 },
    { field: 'price', headerName: 'Price', type: 'number', width: 200 }
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={allProducts} columns={columns} pageSize={20} checkboxSelection />
    </div>
  );
}
export default AdminProductList
