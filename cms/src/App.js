import React  from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import routes from './pages/routes'
import { useRoutes } from 'react-router-dom';
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'


export default function App() {

  let router = useRoutes(routes)

  return (
    <>
      <Topbar />
      <div fluid className='d-flex justify-content-between p-0'>
        <Sidebar />
        {router}
      </div>

    </>
  )
}

