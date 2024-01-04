import React, { useEffect, useState } from "react";
import "./ReceiverDetails.css";
import Search from "../Home/Search";
import SearchIcon from '@mui/icons-material/Search';

const ReceiverForm = () => {
    const [input, setInput] = useState()
    const [results,setResults] = useState()
    const [selectedResult, setSelectedResult] = useState()
   const fetchCode = async (value) => {
    const data = await fetch("http://localhost:3000/country");
    const json = await data.json();

    const filteredData = json.filter((country) => {
      return (
        country.name.toLowerCase().includes(value.toLowerCase())
        || country.phone_code.includes(value)
        || country.iso2.includes(value)
      );
    });
    setResults(filteredData);
    console.log(results);
  };
//   const handleChange = (value) => {
//     setInput(value);
//     fetchCode(value);
//     console.log(value);
//   };

  const handleChange = (e) => {
    const {value} = e.target
    setInput(value)
    fetchCode(value)
  }

 const handleClick = (result) => {
    setResults(null)
    // setSelectedResult(result);
    setInput(result.phone_code)
  };

  return (
    <div className="receiver-form">
      <form>
        <div className="first-name">
          <input type="text" placeholder="First name" required />
          <input type="text" placeholder="Last name" required />
        </div>
        <div className="middle-name">
          <label>
            <input type="checkbox" />I have middle/second last name.
          </label>
        </div>
        <div className="email">
        <input type="text" placeholder="Enter email (optional)"/>
        </div>
        <div className="country-mobile">
 <div className="code-result">
        <div className="country-code-search">
        {/* <Search/> */}
        <input type="text" placeholder="Country Code" value={input} onChange={handleChange} required />
        <SearchIcon className="search-icon" />
        </div>
        <div className="result">
              <div className="result2">
                {results && results.map((result, id) => {
                  return (
                    <div
                      key={result.id}
                      className="result-list"
                      onClick={() => handleClick(result)}
                    >
                      <p>
                        +{result.phone_code} ({result.iso2})
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
        </div>
        <input className="mobile-number" type="number" placeholder="Mobile number" required />
        </div>
      </form>
    </div>
  );
};

export default ReceiverForm;
