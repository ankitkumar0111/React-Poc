import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div className='home'>
        <div className='upper-box'>
        <div className='heading-box'>
            <span className='heading'>Welcome to fast checkout</span>
        </div>
            <img className='home-pic' src='https://www.nia.nih.gov/sites/default/files/styles/inline_right/public/2023-07/grandmother-hugging-smiling.jpg?itok=95tGMGWS' alt='home-pic'/>
        </div>
        <p className='first-line'>How can we help you today?</p>
    </div>
  )
}

export default Home