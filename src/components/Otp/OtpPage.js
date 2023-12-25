import React from 'react'
import "./OtpPage.css"
import Otp from './Otp'
import { useNavigate } from 'react-router-dom'

const OtpPage = () => {
  const navigate = useNavigate
  const handleSubmit = () => {
    navigate("")
  }
  return (
    <div className='otp'>
       <p className='first-para'>For your protection, enter a one-time password(OTP)</p>

       <p className='second-para'>We've sent a one-time password to +919837777303</p>
       <Otp/>
       <div className='third-para'>
       <p>Resend OTP in 0:38</p>
       </div>
       <div className='submit-button'>
        <button onClick={handleSubmit}>Submit</button>
       </div>
    </div>
  )
}

export default OtpPage