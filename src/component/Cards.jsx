import React from "react";
import "../style/Cards.css"
import security from "../images/security.svg"
import proactive from "../images/proactive.svg"
import personal from "../images/personal.svg"

const Cards = () => {
  const cardData = [
    {
      image: security,
      title: "Added security with encryption",
      description: "Use our Encrypted Cloud Backup for increased wallet security."
    },
    {
      image: personal,
      title: "Zero personal tracking",
      description: "We don't track any personal information, including your IP address or balances."
    },
    {
      image: proactive,
      title: "Proactive alerts for risky transactions",
      description: "Stay safe with alerts for risky address and dApp connections."
    }
  ];

  return (
    <div className="cards-container">
      {cardData.map((card, index) => (
        <div className="cards" key={index}>
          <h3>{card.title}</h3>
          <img src={card.image} alt={card.title} />
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
