import React from 'react'
import './Topbar.css'
import { Container, Row, Col, Badge } from 'react-bootstrap'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { MdLanguage } from 'react-icons/md'
import { AiOutlineSetting } from 'react-icons/ai'
import { Link } from 'react-router-dom'


export default function Topbar() {
  return (
    <>
      <div className='m-0 p-0 bg-light topcontainer fixed-top'>
        <Row className='d-flex justify-content-between pe-3 ps-3 pt-1'>
          <Col xs={4}>
            <div className='logo'>
              <Link className='link' to='/'>
              <h1>
                myLogo
              </h1>
              </Link>
              
            </div>
          </Col>
          <Col xs={4} className='d-flex justify-content-end'>
            <ul className='d-flex list-unstyled fs-3 p-1'>
              <li className=' notif pe-2 ps-2'>
                <Link className='link' to='/messages'>
                  <IoMdNotificationsOutline />
                  <span className='notifbadge'>
                    <Badge pill bg="danger">
                      2
                    </Badge>
                  </span>
                </Link>
              </li>
              <li className=' lang pe-2 ps-2'>
                <Link className='link' to='language'>
                  <MdLanguage />
                  <span className='notifbadge'>
                    <Badge pill bg="danger">
                      2
                    </Badge>
                  </span>
                </Link>
              </li>
              <li className='set pe-2 ps-2'>
                <Link  className='link'to='Setting'>
                  <AiOutlineSetting />
                </Link>
              </li>
              <li className='image pe-1 ps-1'>
                <Link to='pro'>
                  <img src='logo512.png' className='img img-fluid logo512.png border rounded-pill p-1 ' />
                </Link>

              </li>
            </ul>
          </Col>
        </Row>

      </div>
    </>
  )
}
