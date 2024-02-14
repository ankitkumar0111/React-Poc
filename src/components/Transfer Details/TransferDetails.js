import React, { useState } from "react";
import "./TransferDetails.css";
import PrintIcon from "@mui/icons-material/Print";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const TransferDetails = () => {
    const [hide, setHide] = useState(true)
    const handleButtonClick = () => {
        setHide(!hide)
    }
  return (
    <div style={{ width: "100%", backgroundColor: "#EBECE7",position:'absolute' }}>
      {/* <div style={{ width: "100%", backgroundColor: "#FFF200" }}></div> */}
        <div className="transfer-container">
          <div className="transfer-container-para">
            <h1>Payment required</h1>
          </div>

          <div className="transfer-container-1">
            <p>Visit one of our locations to complete this transfer</p>
            <div className="transfer-time">
            <AccessTimeFilledIcon style={{height:'40px', width:'50px'}}/>
              <div className="transfer-time-1">
                <p>Complete this transfer before</p>
                <h3>Tomorrow by 11:16 am.</h3>
              </div>
            </div>
            <div className="transfer-total">
              <MonetizationOnIcon style={{width:'50px',height:'25px'}}/>
              <p>Bring 110.00 USD in cash</p>
            </div>
            <div className="transfer-time">
              <HomeOutlinedIcon style={{height:'40px', width:'50px'}}/>
              <div className="transfer-time-2">
                <p>
                  Let the agent know you started the transfer with this phone
                  number:
                </p>
                <h3>+916200243726</h3>
              </div>
            </div>
          </div>

          <div className="transfer-details">
            <div className="transfer-details-1">
              <p>Transfer details</p>
              <PrintIcon />
            </div>
            <hr style={{ margin: "25px 0px" }}></hr>
            <div className="review-transfer-details">
              <p>Date of transaction</p>
              <h5>02/05/2024</h5>
            </div>
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
            <hr style={{ margin: "25px 0px" }}></hr>
            <div className="review-transfer-details">
              <p>Expected payout location</p>
              <h5>United States</h5>
            </div>
            <div className="review-transfer-details">
              <p>
                Money received by<sup>6</sup>
              </p>
              <h5>Cash pickup at any location</h5>
            </div>
            <div className="review-transfer-details">
              <p>
                Delivery Time<sup>1</sup>
              </p>
              <h5>In minutes</h5>
            </div>
            <hr style={{ margin: "25px 0px" }}></hr>
            <div className="review-transfer-details">
              <p>Sender's name</p>
              <h5>Ekta Goyal</h5>
            </div>

            <div className="review-transfer-details">
              <p>Address</p>
              <h5>United States</h5>
            </div>
            <div className="review-transfer-details">
              <p>Phone</p>
              <h5>+916200243726</h5>
            </div>
            <div className="review-transfer-details">
              <p>Payment Method</p>
              <h5>Pay in-store</h5>
            </div>
            <hr style={{ margin: "25px 0px" }}></hr>
            <div className="review-transfer-details">
              <p>Receiver's Name</p>
              <h5>Ekta Goyal</h5>
            </div>
            <div className="review-transfer-details">
              <p>Address</p>
              <h5>Alabama,United States</h5>
            </div>
          </div>
          <div className="review-para-1">
            <p>For enquiries or comments, please visit https://www.westernunion.com/us/en/web/send-money/start or write to:</p>
            <div>
                <p>Western Union Financial Services, Inc.</p>
                <p>P.O.Box 6036,Englewood, CO 80155</p>
                <p>or call: 1-800-325-6000</p>
            </div>
            <p>Date available will be displayed on receipt for international
                transfers over $15. Service and funds may be delayed or
                unavailable</p>
                <p>Date available will be displayed on receipt for international
                transfers over $15. Service and funds may be delayed or
                unavailable</p>
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
          </div>
          <p className="legal-terms-para-1">
            Western Union's Territory Purchase or Sale Policy
          </p>
          <p className="legal-terms-para-2">
            Western Union, P.O. Box 6036 , Englewood,CO,80155
          </p>
    
        <div className="legal-terms">
          <div className="legal-terms-button">
            {hide ? <button onClick={handleButtonClick}>+</button> : <button onClick={handleButtonClick}>-</button>}
            <p>Terms and Conditions</p>
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
          </div>
          </div>
    </div>
  );
};

export default TransferDetails;
