import React, { useState } from 'react'
import "./Home.css"
import validator from "validator";

const HomeForm = () => {

    const [dateString, setDateString] = useState()
    const [message, setMessage] = useState(null)
    const handleDate = (e) => {
        let inputDate = e.target.value;
        setDateString(inputDate)
        if (validator.isDate(inputDate)) {
            setMessage("Date is Valid");
            // setMessageColor("green");
          } else {
            setMessage("Please, Enter a valid date!");
            // setMessageColor("red");
          }
    }
  return (
    <div className='container'>
        <form>
            <div className='upper-fields'>
                <input type='text' placeholder='Country Code'/>
                <input type='number' placeholder='Phone Number'/>
            </div>
            <div className='lower-field'>
                <input type='date' value={dateString} placeholder='Date of birth (MM/DD/YYYY)' onChange={handleDate} max = "2023-01-27"/>
                <p>{message}</p>
            </div>
            <div className='button'>
            <button >Continue</button>
            </div>
        </form>
    </div>
  )
}

export default HomeForm