import React from 'react'
import './Product.css'
import { useState } from 'react'
import { product } from './../../components/datas/Datas'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { AiOutlineDelete } from 'react-icons/ai'



export default function Product() {
  const [productDatas, setProductDatas] = useState(product)
  const userDelet = (productid)=>{
    setProductDatas(productDatas.filter(product => product.id !=productid))
  }
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90
    },
    {
      field: 'title',
      headerName: 'product title',
      width: 200, 
      renderCell: (params) => {
        return (
          <Link to='/'>
            <div className='productlist fs-5'>
              <img src={params.row.avatar} className='productlistimg' />
              <div className='ms-3'>{params.row.title}</div>
              
            </div>
          </Link>
        )

      }
    },
    {
      field: 'price',
      headerName: 'price',
      width: 150
    },
    {
      field: 'action',
      headerName: 'action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={ `/product/${params.row.id}`}>
              <Button className='btn btn-success productListEdit'>Edit</Button>
            </Link>
          <AiOutlineDelete className='text-danger ms-3 fs-2 productListDelet 'onClick={()=>userDelet(params.row.id)} />
          </>



        )

      }
    },
  ]
  return (
    <>
      <div className='productsmaindiv'>
        <DataGrid
          rows={productDatas}
          columns={columns}
          disableSelectionOnClick
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 4,
              },
            },
          }}
          pageSizeOptions={[4]}
          checkboxSelection
        />
      </div>

    </>
  )
}
