import Card from "../Card/Card";
import PropTypes from "prop-types";

const Cards = ({ handleWantToCook, allCards }) => {
  return (
    <div className="lg:w-4/6 cards grid grid-cols-1 lg:grid-cols-2 gap-5">
      {allCards.map((card, index) => (
        <Card
          card={card}
          handleWantToCook={handleWantToCook}
          key={index}
        ></Card>
      ))}
    </div>
  );
};

Cards.propTypes = {
  allCards: PropTypes.array.isRequired,
  handleWantToCook: PropTypes.func.isRequired,
};

export default Cards;
