import { Stack } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";
import "./Home.css"
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { endOfYear } from "date-fns";
// import { endOfDecade } from "date-fns/esm/fp";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const DateSelector = ({ date, setDate }) => {

  const handleDateChange = (date) => {
    if (date != null) {
        console.log(date);
        console.log(date.$d.getMonth() + 1);
        console.log(date.$d.getDate());
        console.log(date.$d.getFullYear());
        const formattedDate = `${date.$d.getMonth() + 1}/${date.$d.getDate()}/${date.$d.getFullYear()}`;
        console.log(formattedDate);
        const err = DobValidation(formattedDate);
        if (err === "") {
            setDob(formattedDate);
            errors.dob = "";
            setDobError('');
        }
        else {
            setDobError(err);
            errors.dob = "";
        }
    }
    else {
        setDob('');
    }
}
    
  return (
    // <Stack spacing={4} sx={{ width: "100%",border:"none !important"}}>
    //   <DatePicker
    //   className=".date-picker"
    //     label="Date of birth (MM/DD/YYYY)"
    //     // renderInput={(params) => <TextField {...params} />}
    //     value={date}
    //     onChange={(date) => {
    //       console.log(date)
    //         // setDate(newValue)
            
    //     }}
    //     maxDate= {new Date("2023-20-12")}
    //   />
    // </Stack>
    <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DemoContainer components={['DatePicker', 'DatePicker', 'DatePicker']}>
                                    <DatePicker
                                        label="Date of birth(MM/DD/YYYY)"
                                        slotProps={{ textField: { size: 'small' } }}
                                        // maxDate={maxdate}
                                        // minDate={mindate}
                                        onChange={(date) => { handleDateChange(date) }}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
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
