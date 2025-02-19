// import React from 'react'
import style from "./button.module.css";
import PropTypes from 'prop-types';
function Button({startButton}) {
  return (
    <div className={style.button_container}>
      <button className={style.button} onClick={startButton}>Start game</button>
    </div>
  );
}
Button.propTypes = {
  startButton: PropTypes.func.isRequired,
};

export default Button;

