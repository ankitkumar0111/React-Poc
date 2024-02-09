import React from 'react'
import './Review.css'
import PrintIcon from '@mui/icons-material/Print';

const Review = () => {
  return (
    <div style={{width: "100%", backgroundColor:"#EBECE7", marginTop:"-36px"}}>
    <div className='review-container'>
        <div className='review-heading'>
            <p>Review and confirm</p>
            <PrintIcon className='print-icon'/>
        </div>
        <p className='review-para'>This isn't a receipt. Please review your transfer details. To make any changes after confirmation, please call <span>1-877-989-3268</span></p>
        <div className='review-details'>
            <p>Transfer details</p>
            <hr></hr>
        </div>
        <div></div>
    </div>
    </div>
  )
}

export default Review