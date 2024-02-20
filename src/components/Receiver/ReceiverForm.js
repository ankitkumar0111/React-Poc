import React, { useState } from "react";
import "./ReceiverDetails.css";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { isFieldEmpty } from "../../utils/isFieldEmpty";


const ReceiverForm = () => {
    
  const [input, setInput] = useState("");
  const [results, setResults] = useState();
  const [data, setData] = useState();
  const [states, setStates] = useState();
  const [filteredStates, setFilteredStates] = useState()
  const[firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const[email, setEmail] = useState()
  const[mobileNumber, setMobileNumber] = useState()
  const [middleName, setMiddleName] = useState(false)
  const [firstError, setFirstError] = useState('')
  const[lastError, setLastError] = useState('')
  const[emailError, setEmailError] = useState('')
  const[mobileError, setMobileError] = useState('')
  const[codeError, setCodeError] = useState('')
  const[stateError, setStateError] = useState('')
  const navigate = useNavigate()
  const fetchCode = async (value) => {
    const data = await fetch("http://localhost:3000/country");
    const json = await data.json();

    const filteredData = json.filter((country) => {
      return (
        country.name.toLowerCase().includes(value.toLowerCase()) ||
        country.phone_code.includes(value) ||
        country.iso2.includes(value)
      );
    });
    setResults(filteredData);
    // console.log(results);
  };

  const fetchState = async (countryCode) => {
    const data = await fetch(
      `http://localhost:3000/states?country_code=${countryCode}`
    );
    const json = await data.json();

    setStates(json);
  };

  const handleChangeCode = (e) => {
    const { value } = e.target;
    setInput(value);
    fetchCode(value);
    setCodeError('')
  };

  const handleClickCode = (result) => {
    setResults(null);
    // setSelectedResult(result);
    setInput("+" + result.phone_code);
    fetchState(result.iso2);
    setCodeError('')
  };

  const handleChangeState = (e) => {
    const { value } = e.target;
    setData(value);

    const filteredData = states.filter((state) =>
      state.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredStates(filteredData)
    setStateError('')
  };

  const handleClickState = (state) => {
    setFilteredStates(null)
    setData(state.name)
  }

  const handleCheckbox = () => {
    setMiddleName(!middleName)
  }

  const handleFirstChange = (e) => {
    const { value } = e.target;
    setFirstName(value);
    setFirstError('')
  }

  const handleLastChange = (e) => {
    const { value } = e.target;
    setLastName(value);
    setLastError('')
  }
  
  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    setEmailError('')
  }

  const handleMobileChange = (e) => {
    const { value } = e.target;
    setMobileNumber(value);
    setMobileError('')
    if (value.trim().length !== 10) {
      setMobileError('Phone Number should be of 10 digits');
    }else {
      setMobileError('')
    } 
  }

  // const handleCodeChange = (e) => {
  //   const { value } = e.target;
  //   setInput(value);
  //   setCodeError('')
  // }

  // const handleStateChange = (e) => {
  //   const { value } = e.target;
  //   setData(value);
  //   setStateError('')
  // }



  

  const handleSubmit = async(e) => {
    e.preventDefault();
    const firstNameValidation = isFieldEmpty(firstName, ['notEmpty'], 'First Name is required');
    const lastNameValidation = isFieldEmpty(lastName, ['notEmpty'], 'Last Name is required');
    // const emailValidation = isFieldEmpty(email,['notEmpty','validEmail'],'Invalid Email Address')
    const codeValidation = isFieldEmpty(input,['notEmpty'],'Country Code is required')
    const stateValidation = isFieldEmpty(data,['notEmpty'],'State is required')
  const mobileValidation = isFieldEmpty(mobileNumber, ['notEmpty', 'tenDigits'], 'Mobile Number is required');

  setFirstError(firstNameValidation.errorMessage);
  setLastError(lastNameValidation.errorMessage);
  // setEmailError(emailValidation.errorMessage);
  setCodeError(codeValidation.errorMessage);
  setStateError(stateValidation.errorMessage);
  setMobileError(mobileValidation.errorMessage);

  if(!firstNameValidation.isValid || !lastNameValidation.isValid  || !codeValidation.isValid || !stateValidation.isValid || !mobileValidation.isValid){
    return;
  }
  navigate("/home/addpersonal")
  }

  return (
    <div className="receiver-form">
      <form onSubmit={handleSubmit}>
        <div className="first-name">
          <input type="text" placeholder="First name" value={firstName} onChange={handleFirstChange} onBlur={() => setFirstError(isFieldEmpty(firstName,['notEmpty'],"First Name is required").errorMessage)}/>
          {firstError && <span style={{ color: 'red', fontWeight: "600", fontSize: "15px" }}>{firstError}</span>}
          <input type="text" placeholder="Last name" value={lastName} onChange={handleLastChange} onBlur={() => setLastError(isFieldEmpty(lastName,['notEmpty'],"Last Name is required").errorMessage)}/>
          {lastError && <span style={{ color: 'red', fontWeight: "600", fontSize: "15px" }}>{lastError}</span>}
        </div>
        <div className="middle-name">
          <label>
            <input type="checkbox" onChange={handleCheckbox}/>I have middle/second last name.
          </label>
        </div>
        {middleName &&  <div className="middleName">
          <input type="text" placeholder="Middle Name" />
        </div>}
        <div className="email">
          <input type="text" placeholder="Enter email (optional)" value={email} onChange={handleEmailChange}  onBlur={() => setEmailError(isFieldEmpty(email, ['validEmail'],'Invalid Email Address').errorMessage)}/>
          {emailError && <span style={{ color: 'red', fontWeight: "600", fontSize: "15px" }}>{emailError}</span>}
        </div>
        <div className="country-mobile">
          <div className="code-result">
            <div className="country-code-search">
              {/* <Search/> */}
              <input
                type="text"
                placeholder="Country Code"
                value={input}
                onChange={handleChangeCode}
              />
              <SearchIcon className="search-icon" />
            </div>
            

            <div className="result">
              <div className="result2">
                {results &&
                  results.map((result, id) => {
                    return (
                      <div
                        key={result.id}
                        className="result-list"
                        onClick={() => handleClickCode(result)}
                      >
                        <p>
                         { `+${result.phone_code} ${result.iso2}`}
                        </p>
                      </div>
                    );
                  })}
              </div>
            </div>
            {codeError && <span style={{ color: 'red', fontWeight: "600", fontSize: "15px" }}>{codeError}</span>}
          </div>
          <div className="mobile-number">
          <input
            type="number"
            placeholder="Mobile number"
            onChange={handleMobileChange}
          />
          {mobileError && <span style={{ color: 'red', fontWeight: "600", fontSize: "15px" }}>{mobileError}</span>}
          </div>
        </div>
        <div className="city-name">
          <input type="text" placeholder="City or Suburb (Optional)" />
        </div>
        <div className="state">
          <div className="state-result">
            <div className="state-search">
              <input type="text" placeholder="State" onChange={handleChangeState} value={data}/>
             
              <SearchIcon className="search-icon"/>
            </div>
            <div className="result">
              <div className="result2">
                {filteredStates &&
                  filteredStates.map((state, id) => {
                    return (
                      <div
                        key={state.id}
                        className="result-list"
                        onClick={() => handleClickState(state)}
                      >
                        <p>
                          {state.name}
                        </p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          {stateError && <span style={{ color: 'red', fontWeight: "600", fontSize: "15px" }}>{stateError}</span>}

        </div>
        <div className="button-receiver">
          <button type="submit">Add Receiver</button>
        </div>
      </form>
    </div>
  );
};

export default ReceiverForm;
