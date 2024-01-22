import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Details.css";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import FormDialog from "./DialogBox";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import { useNavigate } from 'react-router-dom'
import { isFieldEmpty } from "../../utils/isFieldEmpty";

const useStyles = makeStyles({
  icon: {
    marginLeft: "-450px",
  },
});

const Details = () => {
  const classes = useStyles();
  const [promoCode, setPromoCode] = useState();
  const [senderError, setSenderError] = useState('')
  const [receiverError, setReceiverError] = useState('')
  const [correct, setCorrect] = useState(false)
  const [senderInput, setSenderInput] = useState(null);
  const [senderCountries, setSenderCountries] = useState([]);
  const [filteredSenderCountries, setFilteredSenderCountries] = useState([]);
  const [selectedSenderCountry, setSelectedSenderCountry] = useState("USA");
  const [senderCurrency, setSenderCurrency] = useState("USD");
  const [senderCountryImage, setSenderCountryImage] = useState("us");
  const [senderMoneyInput, setSenderMoneyInput] = useState('');

  const [receiverInput, setReceiverInput] = useState(null);
  const [receiverCountries, setReceiverCountries] = useState([]);
  const [filteredReceiverCountries, setFilteredReceiverCountries] = useState(
    []
  );
  const [selectedReceiverCountry, setSelectedReceiverCountry] =
    useState("India");
  const [receiverCurrency, setReceiverCurrency] = useState("INR");
  const [receiverCountryImage, setReceiverCountryImage] = useState("in");
  const [receiverMoneyInput, setReceiverMoneyInput] = useState('');

 const navigate = useNavigate()

  const fetchSenderCode = async (value) => {
    const filteredData = senderCountries.filter((country) => {
      return country.name.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredSenderCountries(filteredData);
  };

  // const filteredSenderCountry = filteredSenderCountries.filter((country) => {
  //   return country.name.toLowerCase().includes(selectedSenderCountry.toLowerCase())
  // })
  // console.log(filteredSenderCountry);

  const fetchSenderCountry = async () => {
    const data = await fetch("http://localhost:3000/country");
    const json = await data.json();

    setSenderCountries(json);
    setFilteredSenderCountries(json);
    // console.log(filteredSenderCountries);
  };
  const handleSenderClick = () => {
    fetchSenderCountry();
  };
  const handleSenderCountry = (e) => {
    const { value } = e.target;
    setSenderInput(value);
    fetchSenderCode(value);
  };

  const handleSenderCheckboxChange = (countryName, currency, iso2) => {
    setSelectedSenderCountry(countryName);
    setSenderCurrency(currency);
    setSenderCountryImage(iso2.toLowerCase());
    setSenderMoneyInput(null);
  };
  const fetchSenderCurrencyRate = async (formattedFloat) => {
    const data = await fetch(
      `https://v6.exchangerate-api.com/v6/c541c99ac7613023ca34b8c9/pair/${senderCurrency}/${receiverCurrency}/${formattedFloat}`
    );
    const json = await data.json();
    console.log(json);
    setReceiverMoneyInput(json.conversion_result);
  };
  const handleSenderMoneyInput = (e) => {
    const { value } = e.target;
    setSenderMoneyInput(value);
    setSenderError('')
    let floatValue = parseFloat(value);
    let formattedFloat = floatValue.toFixed(4);
    fetchSenderCurrencyRate(formattedFloat);
  };

  //Receiver functions
  const fetchReceiverCode = async (value) => {
    const filteredData = receiverCountries.filter((country) => {
      return country.name.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredReceiverCountries(filteredData);
  };
  // const filteredReceiverCountry = filteredReceiverCountries.filter((country) => {
  //   return country.name.toLowerCase().includes(selectedReceiverCountry.toLowerCase())
  // })
  // console.log(filteredReceiverCountry);
  const fetchReceiverCountry = async () => {
    const data = await fetch("http://localhost:3000/country");
    const json = await data.json();

    setReceiverCountries(json);
    setFilteredReceiverCountries(json);
    // console.log(filteredReceiverCountries);
  };
  const handleReceiverClick = () => {
    fetchReceiverCountry();
  };
  const handleReceiverCountry = (e) => {
    const { value } = e.target;
    setReceiverInput(value);
    fetchReceiverCode(value);
  };

  const handleReceiverCheckboxChange = (countryName, currency, iso2) => {
    setSelectedReceiverCountry(countryName);
    setReceiverCurrency(currency);
    setReceiverCountryImage(iso2.toLowerCase());
    setReceiverMoneyInput(null);
  };
  const fetchReceiverCurrencyRate = async (formattedFloat) => {
    const data = await fetch(
      `https://v6.exchangerate-api.com/v6/c541c99ac7613023ca34b8c9/pair/${receiverCurrency}/${senderCurrency}/${formattedFloat}`
    );
    const json = await data.json();
    console.log(json);

    setSenderMoneyInput(json.conversion_result);
  };
  const handleReceiverMoneyInput = (e) => {
    const { value } = e.target;
    setReceiverMoneyInput(value);
    setReceiverError('')
    let floatValue = parseFloat(value);
    let formattedFloat = floatValue.toFixed(4);
    console.log(formattedFloat);
    console.log(senderMoneyInput);
    if (receiverMoneyInput === NaN) {
      console.log("abc", senderMoneyInput);
      setSenderMoneyInput("0");
    } else {
      fetchReceiverCurrencyRate(formattedFloat);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateForm()){
      alert("Form submitted successfully")
      navigate("/home/receiver-add")
    }
    console.log("abcd");
  }

  const validateForm = () => {
    const senderValidation = isFieldEmpty(senderMoneyInput,"Field is required")

    const receiverValidation = isFieldEmpty(receiverMoneyInput, "Field is required")
    if(!senderValidation.isValid){
      setSenderError(senderValidation.errorMessage)
      return false;
    }
    if(!receiverValidation.isValid){
      setReceiverError(receiverValidation.errorMessage)
      return false;
    }
    return true;
  }

  return (
    <div>
       <form onSubmit={handleSubmit}>
      <div className="sender-div">
        <Accordion
          sx={{
            background: "rgb(251 247 247)",
            marginTop: "20px",
            boxShadow: "0 1 0px",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.icon} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            onClick={handleSenderClick}
          >
            {/* <Typography></Typography> */}
            <div className="sender-country">
              <p className="details-para-1">Sending Money from</p>
              <img
                src={`https://flagcdn.com/w40/${senderCountryImage}.png`}
                alt={senderCountries.name}
                style={{
                  width: "30px",
                  marginRight: "8px",
                  border: "1px solid #D9D9D9",
                  height: "30px",
                  marginTop: "10px",
                  borderRadius: "50%",
                }}
              />

              <p className="details-para-2">{selectedSenderCountry}</p>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="country-code-search">
              <input
                type="text"
                placeholder="Search..."
                value={senderInput}
                onChange={handleSenderCountry}
              />
              
              <SearchIcon className="search-icon" />
            </div>
            <div className="country-list">
              {filteredSenderCountries &&
                filteredSenderCountries.map((country) => (
                  <div key={country?.id} className="country-list-div">
                    <input
                      type="checkbox"
                      onChange={() =>
                        handleSenderCheckboxChange(
                          country.name,
                          country.currency,
                          country.iso2
                        )
                      }
                      checked={selectedSenderCountry === country.name}
                      required
                    />
                    
                    <img
                      src={`https://flagcdn.com/w40/${country.iso2.toLowerCase()}.png`}
                      alt={senderCountries.name}
                      style={{
                        width: "30px",
                        // marginRight: "8px",
                        border: "1px solid #D9D9D9",
                        height: "30px",
                        // marginTop: "10px",
                        borderRadius: "50%",
                      }}
                    />

                    <label key={country?.id}>{country.name}</label>
                  </div>
                ))}
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
        <Accordion
          sx={{
            background: "rgb(251 247 247)",
            marginTop: "20px",
            boxShadow: "0 1 0px",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.icon} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            onClick={handleReceiverClick}
          >
            {/* <Typography></Typography> */}
            <div className="sender-country">
              <p className="details-para-1">Sending Money to</p>
              <img
                src={`https://flagcdn.com/w40/${receiverCountryImage}.png`}
                alt={senderCountries.name}
                style={{
                  width: "30px",
                  marginRight: "8px",
                  border: "1px solid #D9D9D9",
                  height: "30px",
                  marginTop: "10px",
                  borderRadius: "50%",
                }}
              />
              <p className="details-para-2">{selectedReceiverCountry}</p>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="country-code-search">
              <input
                type="text"
                placeholder="Search..."
                value={receiverInput}
                onChange={handleReceiverCountry}
              />
              <SearchIcon className="search-icon" />
            </div>
            <div className="country-list">
              {filteredReceiverCountries &&
                filteredReceiverCountries.map((country) => (
                  <div key={country?.id} className="country-list-div">
                    <input
                      type="checkbox"
                      onChange={() =>
                        handleReceiverCheckboxChange(
                          country.name,
                          country.currency,
                          country.iso2
                        )
                      }
                      checked={selectedReceiverCountry === country.name}
                      required
                    />
                    <img
                      src={`https://flagcdn.com/w40/${country.iso2.toLowerCase()}.png`}
                      alt={country.name}
                      style={{
                        width: "30px",
                        // marginRight: "8px",
                        border: "1px solid #D9D9D9",
                        height: "30px",
                        // marginTop: "10px",
                        borderRadius: "50%",
                      }}
                    />

                    <label key={country?.id}>{country.name}</label>
                  </div>
                ))}
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="money-details">
        <div className="sender-money-details">
          <div className="sender-details-upper">
            <input
            type="number"
              placeholder="You're sending"
              value={senderMoneyInput}
              onChange={handleSenderMoneyInput}
            />
            <div>
              <p className="sender-currency">{senderCurrency}</p>
            </div>
          </div>
          {senderError && <span style={{ color: 'red', fontWeight: "600", fontSize: "15px" }}>{senderError}</span>}
          <p className="sender-para">Send up to 800.00 USD</p>
          <ul className="bar">
            <li>Pay in Store</li>
            <li>Exchange Rate 1 USD = 1.0000 USD</li>
          </ul>
          {/* 
          <div>
            <p>Pay in Store</p>
            <p>Exchange Rate 1 USD = 1.0000 USD</p>
          </div> */}
        </div>
        <div className="receiver-money-details">
          <div className="receiver-details-upper">
            <input
            type="number"
              placeholder="Your receiver gets"
              value={receiverMoneyInput}
              onChange={handleReceiverMoneyInput}
            />
            
            <div>
              <p className="sender-currency">{receiverCurrency}</p>
            </div>
          </div>
          {receiverError && <span style={{ color: 'red', fontWeight: "600", fontSize: "15px" }}>{receiverError}</span>}
          
          <ul className="bar-2">
            <li>Delivery Location</li>
            <div
              style={{
                background: "rgb(221 243 251)",
                marginLeft: "40px",
                padding: "1px 0px",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center"
              }}
            >
              <LocalAtmOutlinedIcon style={{ color: "rgb(36, 173, 227)", marginLeft: "10px" }} />
              <p
                style={{
                  color: "rgb(36, 173, 227)",
                  fontWeight: "500",
                  marginLeft: "10px",
                }}
              >
                Cash Pickup at any location
              </p>
            </div>
            <li>Available in minutes</li>
          </ul>
          {/* <div>
            <p></p>
            <div></div>
            <p>Available in minutes</p>
          </div> */}
        </div>
      </div>
      <div className="promo-code">
        <div className="our-fees">
          <p>Our fees</p>
          <p>+10.00 USD</p>
        </div>
        <div className="apply">
          {/* <a href="/">Apply Promo Code</a> */}
          <FormDialog promoCode={promoCode} setPromoCode={setPromoCode} setCorrect={setCorrect}/>
          {promoCode !== "5USDOFF"? <p>-0.00 USD</p> : <p>-5.00 USD</p>}
          
        </div>
        <div className="total">
          <p>Total you pay</p>
          <p>5.00 USD</p>
        </div>
      </div>
      <div className="button-details" >
        <button type="submit">Continue</button>
      </div>
      </form>
    </div>
  );
};

export default Details;
