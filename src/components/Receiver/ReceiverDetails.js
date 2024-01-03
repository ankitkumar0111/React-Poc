import React from 'react'
import "./ReceiverDetails.css"
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import ReceiverForm from './ReceiverForm';

const ReceiverDetails = () => {
  return (
    <div className='receiver-container'>
            <h2 className='receiver-heading'><ArrowBackSharpIcon color='primary' sx={{marginRight:"4px"}}/>Receiver details</h2>
        <div className='receiver-paragraph'>
            <p>Make sure the details below are accurate.No refunds are available after the money is picked up or deposited</p>
        </div>
        <ReceiverForm/>
    </div>
  )
}

export default ReceiverDetails