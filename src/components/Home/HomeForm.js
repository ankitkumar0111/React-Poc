import React, { useState } from 'react'
import "./Home.css"
import validator from "validator";
import SearchIcon from '@mui/icons-material/Search';

const HomeForm = () => {

  const [results, setResults] = useState([])
  const [input, setInput] = useState("")
    const [dateString, setDateString] = useState()
    const [message, setMessage] = useState(null)
    const handleDate = (e) => {
        let inputDate = e.target.value;
        setDateString(inputDate)
        if (validator.isDate(inputDate)) {
            setMessage("Date is Valid");
            // setMessageColor("green");
          } else {
            setMessage("Please, Enter a valid date!");
            // setMessageColor("red");
          }
    }

    const fetchCode = async(value) => {
      const data = await fetch("http://localhost:3000/country")
      const json = await data.json()

      const filteredData = json.filter((country) => {
        return (
          value && country && country.name && country.name.toLowerCase().includes(value) || country.name.toUpperCase().includes(value)
        )
      })
      setResults(filteredData)
      console.log(results);
    }
    const handleChange = (value) => {
      setInput(value)
      fetchCode(value)
    }
  return (
    <div className='container'>
        <form>
            <div className='upper-fields'>
            <div className='code-search'>
            <div className='code-search-input'>
                <input type='text' value={input} placeholder='Country Code' onChange={(e) => handleChange(e.target.value)}/>
                <SearchIcon className='search-icon'/>
                </div>
                <div className='result'>
                {results.map((result, id) => {
                  return (
                    <div key={result.id} className='result-list'>
                      <div>
                        <img src={`https://flagcdn.com/w40/${result.iso2.toLowerCase()}.png`} alt="" />
                        <p>+{result.phone_code} ({result.iso2})</p>
                      </div>
                    </div>
                  )
                })}
                </div>
                </div>
                <input type='number' placeholder='Phone Number'/>
            </div>
            <div className='lower-field'>
                <input type='date' value={dateString} placeholder='Date of birth (MM/DD/YYYY)' onChange={handleDate} max = "2023-01-27"/>
                <p>{message}</p>
            </div>
            <div className='button'>
            <button >Continue</button>
            </div>
        </form>
    </div>
  )
}

export default HomeForm