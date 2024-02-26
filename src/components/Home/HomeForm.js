import React, { useState } from "react";
import "./Home.css";
import Search from "./Search";
import SearchIcon from '@mui/icons-material/Search';
import DateSelector from "./DateSelector";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateFormData } from "../../utils/formDataSlice";
import { isFieldEmpty } from "../../utils/isFieldEmpty";
import 'react-toastify/dist/ReactToastify.css';


const HomeForm = () => {
  const [countryCode , setCountryCode] = useState(null)
  // const [date, setDate] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState(null)
  const [codeError, setCodeError] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [dob, setDob] = useState("")
  const [dateError, setDateError] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch();
  

  const handleChange = (e) => {
    const { value } = e.target;
    setPhoneNumber(value);
    setPhoneError('');
    
    // Dynamically update phone number error message based on input length
    if (value.trim().length !== 10) {
      setPhoneError('Phone Number should be of 10 digits');
    }else {
      setPhoneError('')
    } 
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const codeValidation = isFieldEmpty(countryCode?.phoneCode, ['notEmpty'], 'Country Code is required');
    const phoneValidation = isFieldEmpty(phoneNumber, ['notEmpty', 'tenDigits'], 'Phone Number is required and should be 10 digits');
    const dateValidation = isFieldEmpty(dob, ['notEmpty'], 'Date is required');

    setCodeError(codeValidation.errorMessage);
    setPhoneError(phoneValidation.errorMessage);
    setDateError(dateValidation.errorMessage);

    if (!codeValidation.isValid || !phoneValidation.isValid || !dateValidation.isValid) {
      return;
    }

    // Dispatch form data and navigate
    const formData = {
      countryCode: countryCode,
      dob: dob,
      phoneNumber: phoneNumber,
    };
    dispatch(updateFormData(formData));
    
    navigate("/home/otp");
  }

  return (
    <>
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="upper-fields">
          <div className="code-search">
            <div className="code-search-input">
              <Search countryCode={countryCode} setCountryCode={setCountryCode} setCodeError={setCodeError} /> 
              <SearchIcon className="search-icon" />
            </div>
            {codeError && <span style={{ color: 'red', fontWeight: "600", fontSize: "15px" }}>{codeError}</span>}
        
          </div>
          <div className="phone-number">
            <input type="number" placeholder="Phone Number" value={phoneNumber} onChange={handleChange}  />
        {phoneError && <span style={{ color: 'red', fontWeight: "600", fontSize: "15px", width:"50%" }}>{phoneError}</span>}

          </div>
         
        </div>
        <div className="lower-field">
          <DateSelector dob={dob} setDob={setDob} setDateError={setDateError}/>
          {dateError && <span style={{ color: 'red', fontWeight: "600", fontSize: "15px" }}>{dateError}</span>}
          {/* <p>{message}</p> */}
        </div>
        <div className="button">
          <button type="submit">Continue</button>
        </div>
      </form>
      {/* <ToastContainer/> */}
    </div>
  
    </>
  );
};

export default HomeForm;
