import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isFieldEmpty } from "../../utils/isFieldEmpty";
// import SearchIcon from "@mui/icons-material/Search";

const PersonalForm = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [middleName, setMiddleName] = useState(false);
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [zip, setZip] = useState();
  const [firstError, setFirstError] = useState("");
  const [lastError, setLastError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [cityError, setCityError] = useState("");
  const [stateError, setStateError] = useState("");
  const [zipError, setZipError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFirstChange = (e) => {
    const { value } = e.target;
    setFirstName(value);
    setFirstError("");
  };

  const handleLastChange = (e) => {
    const { value } = e.target;
    setLastName(value);
    setLastError("");
  };

  const handleCheckbox = () => {
    setMiddleName(!middleName);
  };

  const handleAddressChange = (e) => {
    const { value } = e.target;
    setAddress(value);
    setAddressError("");
  };

  const handleCityChange = (e) => {
    const { value } = e.target;
    setCity(value);
    setCityError("");
  };

  const handleStateChange = (e) => {
    const { value } = e.target;
    setState(value);
    setStateError("");
  };

  const handleZipChange = (e) => {
    const { value } = e.target;
    setZip(value);
    setZipError("");
  };

  const formData = useSelector((store) => store.formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const firstNameValidation = isFieldEmpty(
      firstName,
      ["notEmpty"],
      "First Name is required"
    );
    const lastNameValidation = isFieldEmpty(
      lastName,
      ["notEmpty"],
      "Last Name is required"
    );
    // const emailValidation = isFieldEmpty(email,['notEmpty','validEmail'],'Invalid Email Address')
    const addressValidation = isFieldEmpty(
      address,
      ["notEmpty"],
      "Address is required"
    );

    const cityValidation = isFieldEmpty(
      city,
      ["notEmpty"],
      "City is required"
    );
    const stateValidation = isFieldEmpty(
      state,
      ["notEmpty"],
      "State is required"
    );
    const zipValidation = isFieldEmpty(
      zip,
      ["notEmpty", "tenDigits"],
      "Zip Code is required"
    );

    setFirstError(firstNameValidation.errorMessage);
    setLastError(lastNameValidation.errorMessage);
    // setEmailError(emailValidation.errorMessage);
    setAddressError(addressValidation.errorMessage);
    setCityError(cityValidation.errorMessage);
    setStateError(stateValidation.errorMessage);
    setZipError(zipValidation.errorMessage);

    if (
      !firstNameValidation.isValid ||
      !lastNameValidation.isValid ||
      !addressValidation.isValid ||
      !cityValidation.isValid ||
      !stateValidation.isValid ||
      !zipValidation.isValid
    ) {
      return;
    }
    // const receiverData = {
    //   firstName: firstName,
    //   lastName: lastName,
    //   // receiverCountry: results.name,
    //   mobileNumber: mobileNumber,
    // };
    // dispatch(updateReceiverData(receiverData));
    navigate("/home/review");
  };
  console.log(formData);
  return (
    <div className="personal-form">
      <form onSubmit={handleSubmit}>
        <div className="first-name-2">
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={handleFirstChange}
            onBlur={() =>
              setFirstError(
                isFieldEmpty(firstName, ["notEmpty"], "First Name is required")
                  .errorMessage
              )
            }
          />
          {firstError && (
            <span style={{ color: "red", fontWeight: "600", fontSize: "15px" }}>
              {firstError}
            </span>
          )}
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={handleLastChange}
            onBlur={() =>
              setLastError(
                isFieldEmpty(lastName, ["notEmpty"], "Last Name is required")
                  .errorMessage
              )
            }
          />
          {lastError && (
            <span style={{ color: "red", fontWeight: "600", fontSize: "15px" }}>
              {lastError}
            </span>
          )}
        </div>
        <div className="middle-name">
          <label>
            <input type="checkbox" onChange={handleCheckbox} />I have
            middle/second last name.
          </label>
        </div>
        {middleName && (
          <div className="middleName">
            <input type="text" placeholder="Middle Name" />
          </div>
        )}
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
        <div className="dob">
          <input
            type="text"
            placeholder="Date of birth(MM/DD/YYYY)"
            value={formData?.dob || ""}
          />
        </div>

        <div className="country-phone">
          <input
            type="text"
            className="country-phone-code"
            placeholder="Country Code"
            value={formData?.countryCode?.phoneCode || ""}
           
          />
          <input
            type="number"
            className="country-phone-number"
            placeholder="Phone Number"
            value={formData?.phoneNumber || ""}
           
          />
        </div>

        <div className="address-fields">
          <h3 className="address-heading">Address</h3>
          <input
            type="text"
            placeholder="Street Address"
            value={address}
            onChange={handleAddressChange}
            onBlur={() =>
              setAddressError(
                isFieldEmpty(address, ["notEmpty"], "Address is required")
                  .errorMessage
              )
            }
          />
          {addressError && (
            <span style={{ color: "red", fontWeight: "600", fontSize: "15px" }}>
              {addressError}
            </span>
          )}
          <input type="text" placeholder="Street Address 2 (optional)" />
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={handleCityChange}
            onBlur={() =>
              setCityError(
                isFieldEmpty(city, ["notEmpty"], "City is required")
                  .errorMessage
              )
            }
          />
          {cityError && (
            <span style={{ color: "red", fontWeight: "600", fontSize: "15px" }}>
              {cityError}
            </span>
          )}
          <input
            type="text"
            placeholder="State"
            value={state}
            onChange={handleStateChange}
            onBlur={() =>
              setStateError(
                isFieldEmpty(state, ["notEmpty"], "State is required")
                  .errorMessage
              )
            }
          />
          {stateError && (
            <span style={{ color: "red", fontWeight: "600", fontSize: "15px" }}>
              {stateError}
            </span>
          )}
          <input
            type="text"
            placeholder="ZIP code"
            value={zip}
            onChange={handleZipChange}
          />
          {zipError && (
            <span style={{ color: "red", fontWeight: "600", fontSize: "15px" }}>
              {zipError}
            </span>
          )}
        </div>
        <div className="middle-name">
          <label>
            <input type="checkbox" />I want to receive marketing communication
            with news, offers and promotions from Western Union via email and
            SMS
          </label>
        </div>
        <div className="button-receiver">
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default PersonalForm;
