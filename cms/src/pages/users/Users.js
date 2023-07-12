import React from 'react'
import './Users.css'
import { useState } from 'react'
import { userDetails } from './../../components/datas/Datas'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { AiOutlineDelete } from 'react-icons/ai'



export default function Users() {
  const [userDatas, setUserDatas] = useState(userDetails)
  const userDelet = (userid)=>{
    setUserDatas(userDatas.filter(user => user.id !=userid))
  }
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90
    },
    {
      field: 'user',
      headerName: 'user',
      width: 200,
      renderCell: (params) => {
        return (
          <Link to='/'>
            <div className='userlist fs-5'>
              <img src={params.row.avatar} className='userlistimg' />
              <div className='ms-3'>{params.row.username}</div>
              
            </div>
          </Link>
        )

      }
    },
    {
      field: 'email',
      headerName: 'email',
      width: 150
    },
    {
      field: 'status',
      headerName: 'status',
      width: 90
    },
    {
      field: 'transaction',
      headerName: 'transaction',
      width: 90
    },
    {
      field: 'action',
      headerName: 'action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={ `/user/${params.row.id}`}>
              <Button className='btn btn-success userListEdit'>Edit</Button>
            </Link>
          <AiOutlineDelete className='text-danger ms-3 fs-2 userListDelet 'onClick={()=>userDelet(params.row.id)} />
          </>



        )

      }
    },
  ]
  return (
    <>
      <div className='usersmaindiv'>
        <DataGrid
          rows={userDatas}
          columns={columns}
          disableSelectionOnClick
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 3,
              },
            },
          }}
          pageSizeOptions={[3]}
        />
      </div>

    </>
  )
}
