// import React from 'react'

import PropTypes from 'prop-types';
import style from "./title.module.css"

function Title({title}) {
  return     <div className={`${style.title} ${title === "Winner" ? style.winner : title==="Loser" ? style.loser : "style.title"}`}>{title}</div>;
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
