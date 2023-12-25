import React, { useState } from "react";
import "./Home.css";
import Search from "./Search";
import SearchIcon from '@mui/icons-material/Search';
import DateSelector from "./DateSelector";
import { useNavigate } from "react-router-dom";

const HomeForm = () => {
  const [countryCode , setCountryCode] = useState(null)
  const [date, setDate] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState(null)
  const navigate = useNavigate()
  // const [results, setResults] = useState([]);
  // const [input, setInput] = useState("");
  // const [selectedResult, setSelectedResult] = useState(null);
  // const [dateString, setDateString] = useState();
  // const [message, setMessage] = useState(null);
  // const handleDate = (e) => {
  //   let inputDate = e.target.value;
  //   setDateString(inputDate);
  //   if (validator.isDate(inputDate)) {
  //     setMessage("Date is Valid");
  //     // setMessageColor("green");
  //   } else {
  //     setMessage("Please, Enter a valid date!");
  //     // setMessageColor("red");
  //   }
  // };

  // const fetchCode = async (value) => {
  //   const data = await fetch("http://localhost:3000/country");
  //   const json = await data.json();

  //   const filteredData = json.filter((country) => {
  //     return (
  //       country.name.toLowerCase().includes(value.toLowerCase())
  //       || country.phone_code.includes(value)
  //       || country.iso2.includes(value)
  //     );
  //   });
  //   setResults(filteredData);
  //   console.log(results);
  // };
  // const handleChange = (value) => {
  //   setInput(value);
  //   fetchCode(value);
  //   console.log(value);
  // };

  // const handleChange = (e) => {
  //   const {value} = e.target
  //   setInput(value)
  //   fetchCode(value)
  // }

  // const handleClick = (result) => {
  //   setSelectedResult(result);
  // };
  // const handleCodeChange = (code) => {
  //   setCountryCode(code)
  //   console.log("code",countryCode);
  // }

  const handleChange = (e) => {
    const { value} = e.target
    setPhoneNumber(value)
    // console.log(phoneNumber);
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log("Form submitted",countryCode, date,phoneNumber);
    const formData = {
      countryCode : countryCode,
      date: date?.toString(),
      phoneNumber: phoneNumber
    }
    try{
      const response = await fetch('http://localhost:3000/users',{
        method: "POST",
        headers: {
          "Content-type" : "application/json",
        },
        body: JSON.stringify(formData)
      })
      if(response.ok){
        alert("Form Submitted Sucesfully")
        navigate("/home/otp")
      }
      else{
        alert("Form not Submitted")
      }
    }
    catch(error){
      console.log("Error",error);
    }
    
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="upper-fields">
          <div className="code-search">
            <div className="code-search-input">
            {/* <div>
                <img
                  src={`https://flagcdn.com/w40/${selectedResult?.iso2.toLowerCase()}.png`}
                  alt=""
                />
                 <input
                type="text"
                value={`${selectedResult?.phone_code} ${selectedResult?.iso2}`}
                placeholder={selectedResult === null ? "Country Code" : ""}
                onClick={(e) => e.target.select()}
                onChange={handleChange}
              />
              </div> */}
              <Search countryCode={countryCode} setCountryCode={setCountryCode}/>
              
              <SearchIcon className="search-icon" />
            </div>
            {/* <div className="result">
              <div className="result2">
                {results.map((result, id) => {
                  return (
                    <div
                      key={result.id}
                      className="result-list"
                      onClick={() => handleClick(result)}
                    >
                    
                      <img
                        src={`https://flagcdn.com/w40/${result.iso2.toLowerCase()}.png`}
                        alt=""
                      />
                      <p>
                        +{result.phone_code} ({result.iso2})
                      </p>
                    
                    </div>
                  );
                })}
              </div>
            </div> */}
          </div>
          <div className="phone-number">
            <input type="number" placeholder="Phone Number" value={phoneNumber} onChange={handleChange} required/>
          </div>
        </div>
        <div className="lower-field">
          {/* <input
            type="date"
            // value={dateString}
            placeholder="Date of birth (MM/DD/YYYY)"
            // onChange={handleDate}
            max="2023-01-27"
          /> */}
          <DateSelector date={date} setDate={setDate} />
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
