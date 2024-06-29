import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Sidebar from "../Sidebar/Sidebar";
import { toast } from "react-toastify";
import {
  getDataFromLocalStorage,
  removeItemFromLocalStorage,
  setDataToLocalStorage,
} from "../../utils/localStorage";

const Main = () => {
  const [allCards, setAllCards] = useState([]);
  const [wantToCook, setWantToCook] = useState([]);
  const [currentlyCooking, setCurrentlyCooking] = useState([]);

  // handleWantToCook.
  const handleWantToCook = (card) => {
    if (wantToCook.includes(card)) {
      return toast.warn("Already Exits!");
    }
    setWantToCook([...wantToCook, card]);
    toast.success("Successfully added want to cook!");
    setDataToLocalStorage(card.id);
  };

  // handlePreparingButton.
  const handlePreparingButton = (id) => {
    addItemToCurrentlyCooking(id);
    const matchItem = wantToCook.filter((item) => item.id !== id);
    setWantToCook(matchItem);
    toast.success("Successfully added currently cooking item!");
    removeItemFromLocalStorage(id);
  };

  // handlePreparingButton.
  const addItemToCurrentlyCooking = (id) => {
    const matchItem = wantToCook.find((item) => item.id === id);
    setCurrentlyCooking([...currentlyCooking, matchItem]);
  };

  // All Card Data.
  useEffect(() => {
    fetch("./db/db.json")
      .then((res) => res.json())
      .then((data) => setAllCards(data));
  }, []);

  // LocalStorageDataLoad.
  useEffect(() => {
    const lsData = getDataFromLocalStorage();
    const newArr = [];
    for (const id of lsData) {
      const matchData = allCards.find((item) => item.id === id);
      newArr.push(matchData);
      if (matchData) {
        setWantToCook(newArr);
      }
    }
  }, [allCards]);

  return (
    <div className="flex flex-col md:flex-row gap-10 mb-20 p-3">
      <Cards
        allCards={allCards}
        handleWantToCook={handleWantToCook}
        wantToCook={wantToCook}
        setWantToCook={setWantToCook}
      ></Cards>
      <Sidebar
        wantToCook={wantToCook}
        handlePreparingButton={handlePreparingButton}
        currentlyCooking={currentlyCooking}
      ></Sidebar>
    </div>
  );
};

export default Main;
