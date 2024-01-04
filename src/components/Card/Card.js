import React from "react";
import "./Card.css"

function Card(props) {
  const { variant = "primary", children, ...rest } = props;
  return (
    <button className={`button defaultBox  ${variant}`} {...rest}>
      {children}
    </button>
  );
}

export default Card;
