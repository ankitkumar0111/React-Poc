import React, { useEffect, useState } from "react";
import Select from "react-select";
import { FiSearch } from "react-icons/fi";

const Search = () => {
    const [data , setData] = useState([])
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
      <div>
        <img
          src={`https://flagcdn.com/w40/${country?.iso2.toLowerCase()}.png`}
          alt={country.name}
          style={{ width: "24px", marginRight: "5px" }}
        />
        {` +${country.phone_code} ${country.iso2}`}
      </div>
    ),
    name: country.name.toLowerCase(),
    phoneCode: country.phone_code.toLowerCase(),
    iso2: country.iso2.toLowerCase()
  }));

  const [selectedOption, setSelectedOption] = useState(null);

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
    setSelectedOption(selected);
  };

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
      width: "200px", 
        minHeight: "34px",
      // "&:hover": {
      //   border: "1px solid blue" 
      // }
    }),
    menu: (provided, state) => ({
      ...provided,
      width: "300px" ,
//    border: state.isFocused ? "1px solid blue" : "1px solid #ccc",
//    border: state.
    }),
    // dropdownIndicator: (provided) => ({
    //   ...provided,
    //   color: "skyblue" 
    // }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "grey" : "white",
      color: state.isSelected ? "white" : "black" 
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
        // components={{ DropdownIndicator }}
        styles={customStyles}
        filterOption={filterOptions}
      />
    </div>
  );
};

export default Search;