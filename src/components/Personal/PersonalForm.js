import React, { useState } from 'react'
import { useSelector } from 'react-redux'
// import SearchIcon from "@mui/icons-material/Search";

const PersonalForm = () => {
    const [middleName, setMiddleName] = useState(false)
    const handleCheckbox = () => {
        setMiddleName(!middleName)
      }
      const formData = useSelector((store) => store.formData)
      console.log(formData);
  return (
    <div className='personal-form'>
        <form>
        <div className="first-name-2">
          <input type="text" placeholder="First name" required />
          <input type="text" placeholder="Last name" required />
        </div>
        <div className="middle-name">
          <label>
            <input type="checkbox" onChange={handleCheckbox}/>I have middle/second last name.
          </label>
        </div>
        {middleName &&  <div className="middleName">
          <input type="text" placeholder="Middle Name" />
        </div>}
        {/* <input type="text" placeholder="Date of birth (MM/DD/YYYY)" required />
        <div className="country-mobile">
          
            
             
              <input
                type="text"
                placeholder="Country Code"
                required
              />
             
          <input
            className="mobile-number"
            type="number"
            placeholder="Mobile number"
            required
          />
        </div> */}
        <div className='dob'>
        <input type="text" placeholder="Date of birth(MM/DD/YYYY)" value={formData?.date || ''} required />
        </div>

        <div className='country-phone'>
        <input type="text" className='country-phone-code'  value={formData?.countryCode?.phoneCode || ''} required />
        <input type="number" className='country-phone-number' placeholder="Phone Number" value={formData?.phoneNumber || ''} required /> 
        </div>
       
        <div className="address-fields">
            <h3 className='address-heading'>Address</h3>
          <input type="text" placeholder="Street Address" required />
          <input type="text" placeholder="Street Address 2 (optional)"/>
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="State" required />
          <input type="text" placeholder="ZIP code" required />
        </div>
        <div className="middle-name">
          <label>
            <input type="checkbox" />I want to receive marketing communication with news, offers and promotions from Western Union via email and SMS
          </label>
        </div>
        <div className="button-receiver">
          <button type="submit">Save</button>
        </div>
        </form>
    </div>
  )
}

export default PersonalForm