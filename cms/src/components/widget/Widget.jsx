import React from 'react'
import './Widget.css'
import { newMember } from './../../components/datas/Datas'
import { MdOutlineVisibility } from 'react-icons/md'
import { Col } from 'react-bootstrap'


export default function Widget() {
    const Button = ({type}) =>{
        return <button className={'widgetLgButton ' + type}>{type}</button>
    }
    return (
        <>
            <div className='d-flex main'>
                <div className='widsm'>
                    <span className='widsmtitle'>New Join Members</span>
                    <ul className='widsmlist'>
                        {newMember.map((user) => (
                            <li key={user.id} className='widsmitem '>
                                <img src={user.img} className='widsmimg' />
                                <Col xs={3} className='widsmdetails text-start '>
                                    <div className='widsmusername'>{user.username}</div>
                                    <div className='widsmusertitle'>({user.title})</div>
                                </Col>
                                <button className='widsmbtn'><MdOutlineVisibility /></button>
                            </li>
                        ))}

                    </ul>
                </div>
                <div className='widLg'>
                    <h3 className='widgetLgTitle mb-3'>Last Transaction</h3>
                    <table className='widLgTabel'>
                        <tr className='widLgTr'>
                            <th className='widLgTh'>User</th>
                            <th className='widLgTh'>Date</th>
                            <th className='widLgTh'>Amount</th>
                            <th className='widLgTh'>Status</th>
                        </tr>
                        <tr className='widLgTr'>
                            <td className='widLgUser '>
                                <img className='widLgImg' src='logo512.png'/>
                                <span className='widLgname'>qadir yolme</span>
                            </td>
                            <td className='widLgDate'>
                                2 may 2023
                            </td>
                            <td className='widLgAmount'>
                                $155
                            </td>
                            <td className='widLgStatus'>
                                <Button type='Approved'/>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}
