import React, { useState } from "react";
import "./Home.css";
import BasicCard from "../Card/Card";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import HomeForm from "./HomeForm";

// import DoneIcon from '@mui/icons-material/Done'

const Home = () => {
  const firstIcon = <CurrencyExchangeIcon />;
  const secondIcon = <PaymentsOutlinedIcon />;
  const cards = [
    {
      id: 1,
      icon: firstIcon,
      name: "Send Money",
    },
    {
      id: 2,
      icon: secondIcon,
      name: "Cash Pickup",
    },
  ];
  const [selectedCard, setSelectedCard] = useState(null)

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId === selectedCard ? null : cardId);
    return(
        <div className="tick-symbol">&#10003;</div>
    )
    // console.log("Card Clicked")
  }
  return (
    <>
    <div className="home">
      <div className="upper-box">
        <div className="heading-box">
          <span className="heading">Welcome to fast checkout</span>
        </div>
        <img
          className="home-pic"
          src="https://www.nia.nih.gov/sites/default/files/styles/inline_right/public/2023-07/grandmother-hugging-smiling.jpg?itok=95tGMGWS"
          alt="home-pic"
        />
      </div>
      <p className="first-line">How can we help you today?</p>
      <div className="cards">
        {cards.map((card) => (
          <BasicCard key={card.id} icon={card.icon} name={card.name} isSelected={selectedCard === card.id} onClick={() => handleCardClick(card.id)}/>
        ))}
         {/* {selectedCard && (
        <DoneIcon className={`${classes.tickSymbol} ${classes.tickVisible}`} />
      )} */}
        {/* <BasicCard  icon={firstIcon} name="Send Money"/>
            <BasicCard icon={secondIcon} name="Cash Pickup"/> */}
      </div>
      <p className="second-line">Enter your details below.</p>
      <HomeForm />
      <p className="third-line">
        2023 Western Union Holdings, Inc. All Rights Reserved
      </p>
    </div>
     
     </>
  );
};

export default Home;
