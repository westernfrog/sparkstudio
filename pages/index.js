import { useState } from "react";
import Card from "@/components/Card";
import data from "../data/data.json";

export default function Home() {
  const [activeButton, setActiveButton] = useState("one");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const filterCardsByAge = (minAge, maxAge) => {
    return data.cards.filter(
      (card) => card.min_age <= minAge && card.max_age >= maxAge
    );
  };

  const activeCards =
    activeButton === "one" ? filterCardsByAge(5, 9) : filterCardsByAge(10, 15);

  return (
    <div className="container my-5">
      <div className="text-poppins d-flex justify-content-center">
        <button
          className={`btn bg-light-blue me-4 p-4 fw-bold ${
            activeButton === "one" ? "active" : ""
          }`}
          style={{ fontSize: "18px" }}
          onClick={() => handleButtonClick("one")}
        >
          Junior
          <br />
          <span className="fw-light">(Age 6-10)</span>
        </button>

        <button
          className={`btn bg-light-blue ms-4 p-4 fw-bold ${
            activeButton === "two" ? "active" : ""
          }`}
          style={{ fontSize: "18px" }}
          onClick={() => handleButtonClick("two")}
        >
          Senior
          <br />
          <span className="fw-light">(Age 10-15)</span>
        </button>
      </div>
      <div className="row d-flex justify-content-center my-4 gap-5">
        {activeCards.map((card) => (
          <Card
            key={card.id}
            class={card.num_classes}
            name={card.name}
            content={card.pitch}
            rating={card.rating.split(";")[2]}
            star={Math.floor(card.rating.split(";")[0])}
            original_price={card.original_price}
            discounted_price={card.discounted_price}
            games={card.games_count}
            certificate={card.certificate_count}
            outcome={card.curriculum_outcomes}
          />
        ))}
      </div>
    </div>
  );
}
