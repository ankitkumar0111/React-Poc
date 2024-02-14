import React, { useState } from 'react'
import "./OtpPage.css"
import Otp from './Otp'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const OtpPage = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const handleSubmit = () => {
    const enteredOtp = otp.join('');
    if(enteredOtp === "234432"){
      navigate("/home/moneydetails")
    }
    else{
     toast.error("Incorrect OTP")
      setOtp(new Array(6).fill(""));
    }
  }
  return (
    <div className='otp'>
       <p className='first-para'>For your protection, enter a one-time password(OTP)</p>

       <p className='second-para'>We've sent a one-time password to +9198XXXXXX03</p>
       <Otp otp={otp} setOtp={setOtp}/>
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