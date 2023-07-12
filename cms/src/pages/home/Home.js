import React from 'react'
import './Home.css'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import Widget from '../../components/widget/Widget'
import {xAxisData} from '../../components/datas/Datas'

export default function Home() {
  return (
    <>
    <div className='homecontainer '>
       <Featured/>
       <Chart grid title='-MonthSale-' data={xAxisData} dataKeys='sale'/>
       <Widget/>
    </div>
  
    </>
  )
}
