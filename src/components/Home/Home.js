import React from 'react'
import "./Home.css"
import BasicCard from '../Card/Card'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import HomeForm from './HomeForm';

const Home = () => {
 const firstIcon = <CurrencyExchangeIcon/>
 const secondIcon = <PaymentsOutlinedIcon/>
  return (
    <div className='home'>
        <div className='upper-box'>
        <div className='heading-box'>
            <span className='heading'>Welcome to fast checkout</span>
        </div>
            <img className='home-pic' src='https://www.nia.nih.gov/sites/default/files/styles/inline_right/public/2023-07/grandmother-hugging-smiling.jpg?itok=95tGMGWS' alt='home-pic'/>
        </div>
        <p className='first-line'>How can we help you today?</p>
        <div className='cards'>
            <BasicCard  icon={firstIcon} name="Send Money"/>
            <BasicCard icon={secondIcon} name="Cash Pickup"/>
        </div>
        <p className='second-line'>Enter your details below.</p>
        <HomeForm/>
        <p className='third-line'>2023 Western Union Holdings, Inc. All Rights Reserved</p>
    </div>
  )
}

export default Home