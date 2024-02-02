import React, { useEffect, useState } from "react";
import Select from "react-select";
// import { FiSearch } from "react-icons/fi";

const Search = ({ countryCode, setCountryCode, setCodeError}) => {
    const [data , setData] = useState([])
  const [selectedOption, setSelectedOption] = useState(null);

  const DropdownIndicator = () => null;

  const IndicatorSeparator = () => null;
//   const jsonData = [
//     {
//       id: 1,
//       name: "India",
//       iso2: "IN",
//       phone_code: "91",
//       image: "https://flagcdn.com/w40/in.png"
//     },
//     {
//       id: 2,
//       name: "Aland Islands",
//       iso2: "AX",
//       phone_code: "+358-18",
//       image: "https://flagcdn.com/w40/ax.png"
//     }
//   ];

  const fetchData = async() => {
    const  data = await fetch("http://localhost:3000/country");
    const json = await data.json();
    setData(json)
  }

  useEffect(() => {
    fetchData()
  },[])
const options = data.map((country) => ({
    value: country.id,
    label: (
      <div style={{ display: "flex", margin: "-8px"}}>
        <img
          src={`https://flagcdn.com/w40/${country?.iso2.toLowerCase()}.png`}
          alt={country.name}
          style={{ width: "36px", marginRight: "8px",border:"1px solid #D9D9D9", height: "30px", marginTop:"10px"}}
        />
        <p style={{ fontWeight:"500", fontSize: "18px"}}>{` +${country.phone_code} ${country.iso2}`}</p>
      </div>
    ),
    name: country.name.toLowerCase(),
    phoneCode: country.phone_code.toLowerCase(),
    iso2: country.iso2.toLowerCase()
  }));


//   const options = jsonData.map((country) => ({
//     value: country.id,
//     label: (
//       <div>
//         <img
//           src={country.image}
//           alt={country.name}
//           style={{ width: "24px", marginRight: "5px" }}
//         />
//         {`${country.name} (${country.phone_code})`}
//       </div>
//     ),
//     name: country.name.toLowerCase(),
//     phoneCode: country.phone_code.toLowerCase()
//   }));

  const handleChange = (selected) => {
    console.log(selected);
    setCodeError("")
    const cleanedSelected= {
        iso2: selected.iso2,
        name: selected.name,
        phoneCode: selected.phoneCode
    }
    console.log(cleanedSelected);
    // console.log("sdc",selected);
    setSelectedOption(selected);
    setCountryCode(cleanedSelected)
    // console.log("country",selectedOption);
    // handleCodeChange(selected)
  };

//   useEffect(() => {
//     if (selectedOption) {
//       handleCodeChange(selectedOption);
//     }
//   }, [selectedOption, handleCodeChange]);

//   const DropdownIndicator = () => {
//     return (
//       <div style={{ paddingLeft: "5px" }}>
//         <FiSearch />
//       </div>
//     );
//   };

  

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderBottom: "2px solid #ccc", 
        borderRadius: "0", 
        border: "none", 
    //    borderBottom: "2px solid #ccc",
        boxShadow: "none", 
      // border: state.isFocused ? "1px solid blue" : "1px solid #ccc",
      width: "250px", 
        minHeight: "34px",
      // "&:hover": {
      //   border: "1px solid blue" 
      // }
    }),
    menu: (provided, state) => ({
      ...provided,
      width: "400px" ,
      zIndex:"10"
//    border: state.isFocused ? "1px solid blue" : "1px solid #ccc",
//    border: state.
    }),
    // dropdownIndicator: (provided) => ({
    //   ...provided,
    //   color: "skyblue" 
    // }),
    // option: (provided, state) => ({
    //   ...provided,
    //   backgroundColor: state.isSelected ? "grey" : "white",
    //   color: state.isSelected ? "white" : "black" 
    // }),
    placeholder:(provided) => ({
        ...provided,
        color: "rgb(146, 144, 144)",
    fontWeight: "500",
    fontSize: "18px",
    })

  };

  const filterOptions = (option, inputValue) => {
    return (
      option.data.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        option.data.phoneCode.includes(inputValue.toLowerCase()) ||
        option.data.iso2.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  return (
    <div className="search">
      <Select
        options={options}
        value={selectedOption}
        onChange={handleChange}
        placeholder="Country Code"
        isSearchable={true}
        components={{ DropdownIndicator,
        IndicatorSeparator }}
        styles={customStyles}
        filterOption={filterOptions}
        
        // required
      />
    </div>
  );
};

export default Search;