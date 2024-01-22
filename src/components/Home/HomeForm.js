import React, { useState } from "react";
import "./Home.css";
import Search from "./Search";
import SearchIcon from '@mui/icons-material/Search';
import DateSelector from "./DateSelector";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateFormData } from "../../utils/formDataSlice";
import { isFieldEmpty } from "../../utils/isFieldEmpty";
import { format } from "date-fns";

const HomeForm = () => {
  const [countryCode , setCountryCode] = useState(null)
  const [date, setDate] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState(null)
  const [codeError, setCodeError] = useState('')
  const [phoneError, setPhoneError] = useState('')
  // const [dateError, setDateError] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const validateForm = () => {
    const codeValidation = isFieldEmpty(countryCode.phoneCode, ['notEmpty'], 'Country Code is required');
  const phoneValidation = isFieldEmpty(phoneNumber, ['notEmpty', 'tenDigits'], 'Phone Number is required and should be 10 digits');
  // const dateValidation = isFieldEmpty(date, ['notEmpty', 'validDate'], 'Date is required and should be a valid date');

    if(!codeValidation.isValid){
      setCodeError(codeValidation.errorMessage)
      // console.log("kshfvjfs",coderError);
      return false;
    }
    // console.log("abcd",coderError);
    if (!phoneValidation.isValid) {
      setPhoneError(phoneValidation.errorMessage);
      return false;
    }
  
    // if (!dateValidation.isValid) {
    //   setDateError(dateValidation.errorMessage);
    //   return false;
    // }
    return true;
  }
  

  const handleChange = (e) => {
    const { value} = e.target
    setPhoneNumber(value)
    setPhoneError('')
    // console.log(phoneNumber);
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    
    const formData = {
      countryCode: countryCode,
      date: date ? format(date, "MM/dd/yyyy") : '', // Format the date here
      phoneNumber: phoneNumber,
    };
    console.log("Form submitted",countryCode, date,phoneNumber);
    if(validateForm()){
      dispatch(updateFormData(formData))
    alert("Form Submitted Sucesfully")
     navigate("/home/otp")
    }
    
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="upper-fields">
          <div className="code-search">
            <div className="code-search-input">
              <Search countryCode={countryCode} setCountryCode={setCountryCode} setCodeError={setCodeError}/> 
              <SearchIcon className="search-icon" />
            </div>
            {codeError && <span style={{ color: 'red', fontWeight: "600", fontSize: "15px" }}>{codeError}</span>}
        
          </div>
          <div className="phone-number">
            <input type="number" placeholder="Phone Number" value={phoneNumber} onChange={handleChange} />
        {phoneError && <span style={{ color: 'red', fontWeight: "600", fontSize: "15px" }}>{phoneError}</span>}

          </div>
         
        </div>
        <div className="lower-field">
          <DateSelector date={date} setDate={setDate} />
          {/* {dateError && <span style={{ color: 'red', fontWeight: "600", fontSize: "15px" }}>{dateError}</span>} */}
          {/* <p>{message}</p> */}
        </div>
        <div className="button">
          <button type="submit">Continue</button>
        </div>
      </form>
    </div>
  );
};

export default HomeForm;
