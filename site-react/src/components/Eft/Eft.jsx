import React from 'react'
import PropTypes from "prop-types";
import { useReducer } from "react";
import "./Eft.css"

const Eft = ({ property1, property2, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "encadr-EFT",
    property2: property2 || "default",
  });

  return (
    <div
      className={`encadr-EFT ${state.property2} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="EFT">
        {state.property2 === "default" && <>EFT</>}

        {state.property2 === "variant-2" && <div className="text-wrapper">EFT</div>}
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property2: "variant-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property2: "default",
      };
  }

  return state;
}

Eft.propTypes = {
  property1: PropTypes.oneOf(["encadr-EFT"]),
  property2: PropTypes.oneOf(["variant-2", "default"]),
};

export default Eft