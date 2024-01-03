import React, { useEffect, useState } from "react";
import "./ReceiverDetails.css";
import Search from "../Home/Search";
import SearchIcon from '@mui/icons-material/Search';

const ReceiverForm = () => {
//     const [data, setData] = useState()
//    const fetchCode = async (value) => {
//     const data = await fetch("http://localhost:3000/country");
//     const json = await data.json();

//     const filteredData = json.filter((country) => {
//       return (
//         country.name.toLowerCase().includes(value.toLowerCase())
//         || country.phone_code.includes(value)
//         || country.iso2.includes(value)
//       );
//     });
//     setResults(filteredData);
//     console.log(results);
//   };
//   const handleChange = (value) => {
//     setInput(value);
//     fetchCode(value);
//     console.log(value);
//   };

//   const handleChange = (e) => {
//     const {value} = e.target
//     setInput(value)
//     fetchCode(value)
//   }

  return (
    <div className="receiver-form">
      <form>
        <div className="first-name">
          <input type="text" placeholder="First name" required />
          <input type="text" placeholder="Last name" required />
        </div>
        <div className="middle-name">
          <label>
            <input type="checkbox" />I have middle/second last name
          </label>
        </div>
        <div className="email">
        <input type="text" placeholder="Enter email (optional)"/>
        </div>
        <div className="country-mobile">
        <div className="country-code-search">
        {/* <Search/> */}
        <input type="text" placeholder="Country Code"  required />
        <SearchIcon className="search-icon" />
        </div>
        <input className="mobile-number" type="number" placeholder="Mobile number" required />
        </div>
        
      </form>
    </div>
  );
};

export default ReceiverForm;
