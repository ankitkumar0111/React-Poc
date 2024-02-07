import { Stack } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";
import "./Home.css"
// import { endOfYear } from "date-fns";
// import { endOfDecade } from "date-fns/esm/fp";

const DateSelector = ({ date, setDate }) => {
    
  return (
    <Stack spacing={4} sx={{ width: "100%",border:"none !important"}}>
      <DatePicker
      className=".date-picker"
        label="Date of birth (MM/DD/YYYY)"
        // renderInput={(params) => <TextField {...params} />}
        value={date}
        onChange={(newValue) => {
            setDate(newValue)
        }}
        maxDate= {new Date("2023-20-12")}
      />
    </Stack>
  );
};

export default DateSelector;

// import React from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// // import { format } from "date-fns";
// import "./Home.css"

// const DateSelector = ({ date ,setDate, setDateError}) => {
// //   const [startDate, setStartDate] = useState();
//   const handleChange = (date) => {
//     console.log(date);
//     setDate(date)
//     // if (!date) {
//     //   setDateError('Date is required');
//     // } else {
//     //   setDateError('');
//     // }
//   }
  

//   useEffect(() => {
//     console.log("Selected Date:", startDate);
//   }, [startDate]); 
//   return (
//     <DatePicker
//       closeOnScroll={(e) => e.target === document}
//       selected={date}
//       onChange={handleChange}
//       placeholderText="Date of birth (MM/DD/YYYY)"
//       fixedHeight
//       showMonthDropdown
//       showYearDropdown
//       dropdownMode="select"
//       className="date-picker"
//       wrapperClassName="datePicker"
//       dateFormat="MM/dd/yyyy"
//     />
//   );
// };

// export default DateSelector;
