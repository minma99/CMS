import React from 'react'
import './ProductDetails.css'
import Chart from '../../components/chart/Chart'
import { productinfo } from './../../components/datas/Datas'
import { Link } from 'react-router-dom'
import { MdPublish } from 'react-icons/md'
import { Button } from 'react-bootstrap'


export default function ProductDetails() {
  return (
    <div className='proDetailsMainDiv'>
      <div className='productDetailsContainer'>
        <div className='titleConainer d-flex justify-content-between align-items-center'>
          <h1 className='productTitle'>product</h1>
          <Link to='/newproduct'>
            <button className='btn btn-primary addbtn'>create</button>
          </Link>
        </div>
        <div className='productBody'>
          <div className='productTop d-flex'>
            <div className='productTopLeft'>
              <Chart title=' Sale in month' data={productinfo} dataKeys='sale' />
            </div>
            <div className='productTopRight shadow'>
              <div className='productTopInfo'>
                <sapn className='proTopRighTitle'><h4>Loptop Del</h4></sapn>
                <img className='proTopRightImg' src='logo512.png' />
              </div>

              <div className='productFooter'>
                <div className='productInfoItem'>
                  <div className='productInfoKey'>Id:</div>
                  <div className='productInfoValue'>1</div>
                </div>
                <div className='productInfoItem'>
                  <div className='productInfoKey'>name:</div>
                  <div className='productInfoValue'>Del loptop</div>
                </div>
                <div className='productInfoItem'>
                  <div className='productInfoKey'>price:</div>
                  <div className='productInfoValue'>90000$</div>
                </div>
                <div className='productInfoItem'>
                  <div className='productInfoKey'>in stock:</div>
                  <div className='productInfoValue'>No</div>
                </div>
                <div className='productInfoItem'>
                  <div className='productInfoKey'>active:</div>
                  <div className='productInfoValue'>Yes</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      <div className='productBottom shadow'>
        <form className='productForm'>
          <div className='productFormLeft'>
            <label>product name:</label>
            <input type='text' placeholder='dell loptop' />

            <label>in stock</label>
            <select id='in-stock' >
              <option value='yes'>yes</option>
              <option value='no'>no</option>
            </select>
            <label>active</label>
            <select id='active' >
              <option value='yes'>yes</option>
              <option value='no'>no</option>
            </select>
          </div>
          <div className='productFormRight d-flex justify-content-around'>
            <div className='productUploader'>
              <img className='productUploaderImg' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAAY1BMVEX////MzMxNTU3Pz8/IyMj8/PxJSUnV1dX29vbS0tLY2Njl5eVDQ0Pz8/M+Pj75+fk4ODi7u7tdXV3s7Ozf39+oqKhycnJUVFSDg4NlZWV6enqPj4+YmJiioqK1tbWurq4qKirp7IPdAAAEU0lEQVRoge1a6W7iMBCusXFu5wByQtP3f8p1QpZtYcbOOKHSSv5+VSrJN5fncj4+PDw8PDw8PDw8PF5xzPMwzPPj7xOHp3McRJwxxnkUxedT+GtC5EnMhWA/IASPk/z93GHCn5i/i5CEbyXPYoz7rwhx9j7ywMx9R/AeAcLAovnDAsEbXJCsJJ8FSHYmz/h68omf7+qBhEQ+Yz8DHM8Ewz8McN4pER2RmOMRnxEhjgl2SUNH+O08KIe6ORyaeigD5Cc78B8RzW+VkvKgIaWqbhFsgM32z0HFItGqmfsOqVoBCrBV/yOU6LgYmvTwA2kzgAIE2/SHYj74fCafBUgvkKjnLexQquN18Uo+QdX81VNbEmAG+bMGVF8MUEMn1D3/AWEXtSi75u+AJ7grO2B6XkqcXfOP+5k/BCwZ9EZ62UPh51Z/gTfxUpnYdfiVgPkDF/YMiKPoalReq38FTr9wiT4w4dQ2+hpMPg7KA69hvDGz6woEJmm6+jFIbzh1i/Ohx1hMZYfCXnsRSXj/UMC9ATX4wfaKl3Z6KPTprRf4Ev5ppQdPHjn15aAN3bUXtMKPtLbOvidaH4x7rb7l2Ousj/SdpNhH2kvGKxt9hT1JaXtCxIQrsh5CLyhH74TRmwveVPIw+hOB/gy/gwV27bEhnNL0IZEnOmvoyQ4xHCX2YBX4xVLtJ6gLbH5C1TvCQ0tk8/zd+8jD60MfHm1YZLf9ZH2YnjDwIPTCeuonVIjz19PD1ZaxdfTIw+sPPkK/yfcEesT4myJ/u++ZsLZ6utnDEuZ6euTgrbG+bLFnCTUHeQW/Wa2vbojlovXsWNJlDJrsvyNtsCcpSRcrOVxczfRXge0fKSUHK7haidbgftmiZiMVXKzdmKY803wPTXgLPaXdwJoty9nHzjwjNlt47PHSpD3cZU+gjVn4DtlUd7Bqw6iNNjxmTDCkHjTdk8cMeMiawD9R56tP/Ckau8H6aLONNtmMPmLiR4/fkOBLsXzLHLZLeOyPiPUVsFVbQF4vwMuVmR5zvoHeYbeEzQvolI3M1sxtswYt1mZgUzY2W7st1lD1GUaP/d5prQg2nDwKYmyzqcrlTv0ZjpeaLytlHpVD38HkE7p+KF8EcN/o82fyVqbSVO/1v9tnAZwX6j8O30R+sG4VdfI5PAmw4Tr1YX4ejF2xYsiYbVB04+Nmb9tt8nnR/FKlK8lnAdLqcreA2HSVNF+kRWIkkS8CjNPN2saLND3wlAOZfBFgELQWC9RfrhjsYCi5wyV2Vq2Idwhptcs3BFntpL+qd/qCIR+sq1yAfdjvK6JRUSNfjbuRa8QNyQGqofc3ZlzWJr0p7d12JtdI+nUCyKLf+7OdO6I6tZ7BNK0piwQagl6ZMqBMVb+303/iNFZfsAQy/apGyhTvLEHfFIXuOxYp9B9pUTT9b3DfESbi2tZd1WhUXd1exZs/FASFyE4a2e8Te3h4eHh4eHh4/A/4A3VkQKujL2iqAAAAAElFTkSuQmCC" />
              <label className='fs-4'><MdPublish /></label>
              <input type='file' className='d-none' />
            </div>
            <Button variant='primary'>Upload(edit)</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
