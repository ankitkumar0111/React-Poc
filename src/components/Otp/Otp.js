import React, { useEffect, useRef, useState } from "react";


let currentOtpIndex = 0;
const Otp = () => {

  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [activeOtpIndex, setActiveOtpIndex] = useState(0);
  const inputRef = useRef(null);

  const handleOnChange = ({ target }) => {
    const { value } = target;
    const newOtp = [...otp]
    newOtp[currentOtpIndex] = value.substring(value.length-1)
    if (!value) setActiveOtpIndex(currentOtpIndex - 1);
    else setActiveOtpIndex(currentOtpIndex + 1);
    setOtp(newOtp)
  };

  const handleKeyDown = ({key},index) => {
    currentOtpIndex = index
    if(key === "Backspace") setActiveOtpIndex(currentOtpIndex-1)
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex]);
  return (
    <div className="code-container">
      {otp.map((_, index) => {
        return (
          <div key={index}>
            <input
              ref={index === activeOtpIndex ? inputRef : null}
              type="number"
              className="code"
              placeholder=""
              min="0"
              max="9"
              required
              onChange={handleOnChange}
              onKeyDown={(e) => handleKeyDown(e, index)}
              value={otp[index]}
            />
            {/* {index === otp.length-1 ? null : (
              <span/>
            )} */}
          </div>
        );
      })}
      {/* <input type='number' className='code' placeholder='0' min="0" max="9" required/>
        <input type='number' className='code' placeholder='0' min="0" max="9" required/>
        <input type='number' className='code' placeholder='0' min="0" max="9" required/>
        <input type='number' className='code' placeholder='0' min="0" max="9" required/>
        <input type='number' className='code' placeholder='0' min="0" max="9" required/>
        <input type='number' className='code' placeholder='0' min="0" max="9" required/> */}
    </div>
  );
};

export default Otp;
