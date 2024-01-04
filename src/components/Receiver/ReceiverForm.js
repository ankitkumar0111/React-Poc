import React, { useState } from "react";
import "./ReceiverDetails.css";

import SearchIcon from "@mui/icons-material/Search";

const ReceiverForm = () => {
  const [input, setInput] = useState("+1");
  const [results, setResults] = useState();
  const [data, setData] = useState();
  const [states, setStates] = useState();
  const [filteredStates, setFilteredStates] = useState()
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
  };

  const handleClickCode = (result) => {
    setResults(null);
    // setSelectedResult(result);
    setInput(result.phone_code);
    fetchState(result.iso2);
  };

  const handleChangeState = (e) => {
    const { value } = e.target;
    setData(value);

    const filteredData = states.filter((state) =>
      state.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredStates(filteredData)
  };

  const handleClickState = (state) => {
    setFilteredStates(null)
    setData(state.name)
  }

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
          <input type="text" placeholder="Enter email (optional)" />
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
                required
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
                          +{result.phone_code} ({result.iso2})
                        </p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <input
            className="mobile-number"
            type="number"
            placeholder="Mobile number"
            required
          />
        </div>
        <div className="city-name">
          <input type="text" placeholder="City or Suburb (Optional)" />
        </div>
        <div className="state">
          <div className="state-result">
            <div className="state-search">
              <input type="text" placeholder="State" onChange={handleChangeState} value={data} required />
              <SearchIcon className="search-icon" />
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
        </div>
        <div className="button-receiver">
          <button type="submit">Add Receiver</button>
        </div>
      </form>
    </div>
  );
};

export default ReceiverForm;
