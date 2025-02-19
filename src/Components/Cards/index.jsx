// import React from 'react'
import style from "./card.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

function Card({ el }) {
  const [show, setShow] = useState(false);

  console.log(show);

  function handleShow() {
    setShow(!show);
  }

  const { name, type, base_experience, id } = el;
  let pokeId = id.toString().padStart(3, "0");
  return (
    <>
      <div>
        <div className={style.card}>
          <h1 className={style.card_title}>{name}</h1>
          <div>
            <img
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeId}.png`}
            />
          </div>
          <h2 className={style.card_type}>Type: {type}</h2>
          <p className={style.card_type}>EXP {base_experience}</p>
          <button className={style.card_btn} onClick={handleShow}>
            Read More
          </button>

          {show && (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              adipisci dolore, a voluptate facere saepe eaque nobis aut porro
              perferendis nihil numquam dolores! Assumenda iusto, quo inventore
              consectetur libero aliquid.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
Card.propTypes = {
  el: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    base_experience: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
