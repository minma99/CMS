import React from 'react'
import './Featured.css'
import {Col} from 'react-bootstrap'
import {AiOutlineArrowDown ,AiOutlineArrowUp} from 'react-icons/ai'

export default function Featured() {
    return (
        <div className='FeaturedMainDev d-flex justify-content-between'>
            <div className=' Featuredcontainer'>
                <div className='Featuredtitle'><h5>Revanue</h5></div>
                <div className='d-flex justify-content-between'>
                    <span className='Featuredprice'><h2>$2,125</h2></span>
                    <span className='Growth'>-11.5<AiOutlineArrowDown className='Featuredicon' /></span>
                </div>
                <div className='Featuredsub'>compaired to last month</div>
            </div>
            <div className='Featuredcontainer'>
                <div className='Featuredtitle'><h5>Sales</h5></div>
                <div className='d-flex justify-content-between'>
                    <span className='Featuredprice'><h2>$24,415</h2></span>
                    <span className='Growth'>-1.2<AiOutlineArrowDown className='Featuredicon' /></span>
                </div>
                <div className='Featuredsub'>compaired to last month</div>
            </div>
            <div className='Featuredcontainer'>
                <div className='Featuredtitle'><h5>Cost</h5></div>
                <div className='d-flex justify-content-between'>
                    <span className='Featuredprice'><h2>$2,225</h2></span>
                    <span className='Growth'>+2.4<AiOutlineArrowUp className='Featuredicon text-success' /></span>
                </div>
                <div className='Featuredsub'>compaired to last month</div>
            </div>


        </div>
    )
}
