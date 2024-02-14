import React, { useState } from "react";
import "./Review.css";
import PrintIcon from "@mui/icons-material/Print";
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';

const Review = () => {
    const [hide, setHide] = useState(true)
    const handleButtonClick = () => {
        setHide(!hide)
    }
  return (
    <div
      style={{ width: "100%", backgroundColor: "#EBECE7", position:'absolute' }}
    >
      <div className="review-container">
        <div className="review-heading">
          <p>Review and confirm</p>
          <PrintIcon className="print-icon" />
        </div>
        <p className="review-para">
          This isn't a receipt. Please review your transfer details. To make any
          changes after confirmation, please call <span>1-877-989-3268</span>
        </p>
        <div className="review-details">
          <p>Transfer details</p>
          <hr style={{ margin: "25px 0px" }}></hr>

          <div className="review-transfer-details">
            <p>Transfer Amount</p>
            <h5>100.00 USD</h5>
          </div>
          <div className="review-transfer-details">
            <p>
              Transfer fee<sup>2</sup>
            </p>
            <h5>+10.00 USD</h5>
          </div>
          <div className="review-total">
            <p>Total</p>
            <p>110.00 USD</p>
          </div>
          <div className="review-transfer-details">
            <p>Transfer Amount</p>
            <h5>100.00 USD</h5>
          </div>
          <div className="review-transfer-details">
            <p>Total to Final Receiver</p>
            <h5>100.00 USD</h5>
          </div>
          <hr style={{ margin: "37px 0px" }}></hr>
          <div className="review-transfer-details">
            <p>Payment Method</p>
            <h5>Pay in-store</h5>
          </div>
          <div className="review-transfer-details">
            <p>From</p>
            <h5>Alabama</h5>
          </div>
          <div className="review-transfer-details">
            <p>Expected Payout Location</p>
            <h5>United States</h5>
          </div>
          <div className="review-transfer-details">
            <p>
              Delivery Method<sup>6</sup>
            </p>
            <h5>Cash Pickup at any Location</h5>
          </div>
          <div className="review-transfer-details">
            <p>Delivery Time</p>
            <h5>In minutes</h5>
          </div>
          <div className="edit-button">
            <button>Edit</button>
          </div>
        </div>
        <div className="review-sender">
          <div className="review-sender-div">
            <img
              src="https://flagcdn.com/w40/us.png"
              alt="flag-logo"
              style={{
                width: "30px",
                // marginRight: "8px",
                border: "1px solid black",
                height: "30px",
                // marginTop: "10px",
                borderRadius: "50%",
              }}
            />
            <div className="review-sender-div2">
              <p>Sending Details</p>
              <h5>Ekta Goyal</h5>
            </div>
          </div>
          <div>
          <ArrowDropDownCircleOutlinedIcon style={{height:'40px', width:'50px'}}/>
          </div>
        </div>
        <div className="review-sender">
          <div className="review-sender-div">
            <img
              src="https://flagcdn.com/w40/us.png"
              alt="flag-logo"
              style={{
                width: "30px",
                // marginRight: "8px",
                border: "1px solid black",
                height: "30px",
                // marginTop: "10px",
                borderRadius: "50%",
              }}
            />
            <div className="review-sender-div2">
              <p>Your Receiver Details</p>
              <h5>Ekta Goyal</h5>
            </div>
          </div>
          <div>
            <ArrowDropDownCircleOutlinedIcon style={{height:'40px', width:'50px'}}/>
          </div>
        </div>
        <div className="review-para-1">
          <p>
            Date available will be displayed on receipt for international
            transfers over $15. Service and funds may be delayed or unavailable
            depending on certain factors including the Service selected, the
            selection of delayed delivery options, special terms applicable to
            each Service, amount sent, destination country.
          </p>
          <p style={{ marginTop: "25px" }}>
            Date available will be displayed on receipt for international
            transfers over $15. Service and funds may be delayed or unavailable
            depending on certain factors including the Service selected.
          </p>
          <p style={{ marginTop: "25px" }}>
            You confirm that you'are not sending this transaction on behalf of
            another person
          </p>
        </div>
        <hr style={{ margin: "25px 0px" }}></hr>
        <div className="review-para-2">
          <p>
            Please review the transaction details for accuracy because we rely
            on the information you provide to send money.
          </p>
          <p style={{ marginTop: "30px" }}>
            Date available will be displayed on receipt for international
            transfers over $15. Service and funds may be delayed or unavailable
            depending on certain factors including the Service selected, the
            selection of delayed delivery options, special terms applicable to
            each Service, amount sent, destination country.
          </p>
        </div>
        <hr style={{ margin: "35px 0px" }}></hr>
        <div className="review-para-3">
          <p>
            Are you sending money to a telemarketer who sold you something?Learn
            More.
          </p>
          <div className="review-para-buttons">
            <button>Yes,Cancel</button>
            <button>No,Continue</button>
          </div>
        </div>
        <div className="review-send-button">
          <button>Send</button>
        </div>
        <div className="legal-terms">
          <div className="legal-terms-button">
            {hide ? <button onClick={handleButtonClick}>+</button> : <button onClick={handleButtonClick}>-</button>}
            <p>Legal disclaimers and important info.</p>
          </div>
          {!hide && <div className="legal-terms-list">
            <p >
              Date available will be displayed on receipt for international
              transfers over $15. Service and funds may be delayed or
              unavailable depending on certain factors including the Service
              selected.
            </p>
            <ol>
              <li>
                {" "}
                Date available will be displayed on receipt for international
                transfers over $15. Service and funds may be delayed or
                unavailable depending on certain factors including the Service
                selected, the selection of delayed delivery options, special
                terms applicable to each Service, amount sent, destination
                country.
              </li>
              <li>
                Date available will be displayed on receipt for international
                transfers over $15. Service and funds may be delayed or
                unavailable depending on certain factors including the Service
                selected.
              </li>
              <li>
                Date available will be displayed on receipt for international
                transfers over $15. Service and funds may be delayed or
                unavailable
              </li>
            </ol>
          </div>}
          
          <p className="legal-terms-para-1">
            Western Union's Territory Purchase or Sale Policy
          </p>
          <p className="legal-terms-para-2">
            Western Union, P.O. Box 6036 , Englewood,CO,80155
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
