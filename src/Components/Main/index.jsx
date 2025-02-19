// import React from 'react'

import PropTypes from "prop-types";
import Title from "../Titles";
import Card from "../Cards";
import style from "./main.module.css"

function MainContainer({ data, title, pokemons }) {
  return (
    <div className={style.mainContainer}>
      <Title title={title} className={{title}} />
      <p>{pokemons}</p>
      <div className={style.container_cards}>
        {data.map((el, index) => (
          <Card key={index} el={el} />
        ))}
      </div>
    </div>
  );
}

MainContainer.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  pokemons: PropTypes.string.isRequired,
};

export default MainContainer;
