import { FiClock } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import PropTypes from "prop-types";

const Card = ({ card, handleWantToCook }) => {
  const {
    name,
    calories,
    ingredients,
    img,
    preparing_time,
    short_description,
  } = card;

  const ingItem = ingredients.slice(0, 3);
  return (
    <div className="w-full item border border-[#D4D4D4] rounded-2xl p-3 md:p-5 lg:p-6 space-y-3">
      <img className="rounded-2xl w-full" src={img} alt="card-image" />

      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-[#878787] fira-sans border-b pb-3">
        {short_description}
      </p>

      <h3 className="text-lg font-medium">
        Ingredients: <span>{ingredients.length}</span>
      </h3>
      <ul className="*:text-[#878787] fira-sans space-y-1">
        {ingItem.map((item, index) => (
          <li key={index} className="flex items-center gap-2 pl-2">
            <GoDotFill />
            {item}
          </li>
        ))}
      </ul>
      <div className="text-[#535353] flex gap-5">
        <p className="flex items-center gap-2">
          <FiClock />
          {preparing_time}
        </p>
        <p className="flex items-center gap-2">
          <img src="./images/icon.png" alt="" />
          {calories}
        </p>
      </div>
      <button
        onClick={() => handleWantToCook(card)}
        className="btn btn-accent rounded-full text-lg font-medium"
      >
        Want to Cook
      </button>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  handleWantToCook: PropTypes.func.isRequired,
};
export default Card;
