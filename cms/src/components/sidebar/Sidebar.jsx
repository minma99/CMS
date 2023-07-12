import React from 'react'
import './Sidebar.css'
import { MdLineStyle, MdTrendingUp } from 'react-icons/md'
import { IoAnalytics } from 'react-icons/io5'
import { BsFillBagFill } from 'react-icons/bs'
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai'
import { BiStore, BiBarChart, BiDollar, BiMessageAlt } from 'react-icons/bi'
import { TbMessages } from 'react-icons/tb'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <>
      <div className='sidebar bg-light'>
        <div className='sidbarcontainer'>
          <div className='sidebarmenue mt-2'><h2 className='sidebartitle '>dashboard</h2>
            <ul className='sidebarlist list-unstyled ms-3'>
              <Link className='text-decoration-none' to='/' ><li className='sidebarlistitem active'><MdLineStyle className='sidebaricon' />Home</li></Link>
              <Link className='text-decoration-none' to='/Analytics' ><li className='sidebarlistitem'><IoAnalytics className='sidebaricon' />Analytics</li></Link>
              <Link className='text-decoration-none' to='/sales' ><li className='sidebarlistitem'><MdTrendingUp className='sidebaricon' />sales</li></Link>
            </ul>
          </div>

          <div className='sidebarmenue'><h2 className='sidebartitle '>Quicmebue</h2>
            <ul className='sidebarlist list-unstyled ms-3'>
              <Link className='text-decoration-none' to='/user' ><li className='sidebarlistitem '><AiOutlineUser className='sidebaricon' />user</li></Link>
              <Link className='text-decoration-none' to='/newuser' ><li className='sidebarlistitem'><AiOutlineUser className='sidebaricon' />newuser</li></Link>
              <Link className='text-decoration-none' to='/product' ><li className='sidebarlistitem'><BiStore className='sidebaricon' />product</li></Link>
              <Link className='text-decoration-none' to='/transaction' ><li className='sidebarlistitem'><BiDollar className='sidebaricon' />transaction</li></Link>
              <Link className='text-decoration-none' to='/report' ><li className='sidebarlistitem'><BiBarChart className='sidebaricon' />report</li></Link>
            </ul>
          </div>

          <div className='sidebarmenue '><h2 className='sidebartitle '>notfication</h2>
          <ul className='sidebarlist list-unstyled ms-3'>
            <Link className='text-decoration-none' to='/mail' ><li className='sidebarlistitem '><AiOutlineMail className='sidebaricon' />mail</li></Link>
            <Link className='text-decoration-none' to='/facebook' ><li className='sidebarlistitem'><TbMessages className='sidebaricon' />feedback</li></Link>
            <Link className='text-decoration-none' to='/message' ><li className='sidebarlistitem'><BiMessageAlt className='sidebaricon' />message</li></Link>
          </ul>
        </div>

        <div className='sidebarmenue '><h2 className='sidebartitle '>staf</h2>
          <ul className='sidebarlist list-unstyled ms-3'>
            <Link className='text-decoration-none' to='/manege' ><li className='sidebarlistitem '><BsFillBagFill className='sidebaricon' />manege</li></Link>
            <Link className='text-decoration-none' to='/Analytics' ><li className='sidebarlistitem'><IoAnalytics className='sidebaricon' />Analytics</li></Link>
          </ul>
        </div>
      </div>
    </div >
    </>
  )
}
